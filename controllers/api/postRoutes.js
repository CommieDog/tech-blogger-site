const router = require('express').Router();
const { User } = require('../../models');
const checkAuth = require('../../utils/auth');

router.post('/', checkAuth, async (req, res) => {
  /*try {
    // Find the user who matches the posted e-mail address
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    // Verify the posted password with the password store in the database
    const validPassword = userData.checkPassword(req.body.password);
    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    // Create session variables based on the logged in user
    req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
        res.json({ user: userData, message: 'You are now logged in!' });
    });
  } catch (err) {
    console.error(err);
    res.status(400).json(err);
  }*/
  res.json({ message: "POST /api/posts/ route hit!"});
});

router.post('/signup', async (req, res) =>
{
    // Check to see if there is already a user with that email address
    let userData = await User.count({ where: { email: req.body.email } });
    if(userData)
    {
        console.log("User email aready taken!");
        return res.status(400).json({ message: 'User email aready taken, please try again' });
    }
    userData = await User.create(
        {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        }
    );
    // Create session variables based on the logged in user
    req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
        res.json({ message: 'You are now logged in!' });
    });
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    // Remove the session variables
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
