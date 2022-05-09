const router = require('express').Router();
 const { User, Post } = require('../models');
const checkAuth = require('../utils/auth');

router.get('/', async (req, res) => {
//   try {
//     const userData = await User.findAll({
//       attributes: { exclude: ['password'] },
//       order: [['name', 'ASC']],
//     });

//     const users = userData.map((project) => project.get({ plain: true }));

//     res.render('homepage', {
//       users,
//       // Pass the logged in flag to the template
//       logged_in: req.session.logged_in,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
    res.render("front-page",
    {
        loggedIn: req.session.logged_in
    });
});

router.get('/dashboard', checkAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, 
      {
        attributes: {
          exclude: ["password"] // Just to be on the safe side
        }
      });
    const postData = await Post.findAll({
      where:
      {
       author_id: req.session.user_id
      },
      order: [['id', 'ASC']],
    });

    const user = userData.get({ plain: true });
    const posts = postData.map((post) => post.get({ plain: true }));

    res.render("dashboard",
    {
        user: user,
        posts: posts,
        loggedIn: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Prevent non logged in users from viewing
router.get('/post', checkAuth, async (req, res) => {
    res.render("new-post",
    {
        loggedIn: req.session.logged_in
    });
});

router.get('/login', (req, res) => {
//   // If a session exists, redirect the request to the homepage
//   if (req.session.logged_in) {
//     res.redirect('/');
//     return;
//   }

    res.render("login",
    {
        loggedIn: req.session.logged_in
    });
});

module.exports = router;
