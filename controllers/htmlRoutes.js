const router = require('express').Router();
const { User, Post } = require('../models');
const checkAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      order: [['created_at', 'DESC']],
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render('front-page', {
      posts,
      loggedIn: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/post-edit/:id', checkAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id);
    const post = postData.get({ plain: true });

    if(post.author_id !== req.session.user_id)
    {
      return res.status(400).json({ message: "Cannot edit someone else's post!" }); // Block editing of another user's post
    }

    res.render("edit-post",
    {
        post: post,
        loggedIn: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
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
