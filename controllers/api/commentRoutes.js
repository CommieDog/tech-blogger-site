const router = require('express').Router();
const { Comment } = require('../../models');
const checkAuth = require('../../utils/auth');

router.post('/', checkAuth, async (req, res) => {
  try
  {
    const post = await Comment.create(
      {
        author_id: req.session.user_id,
        post_id: req.body.post_id,
        content: req.body.content
      }
    )
    res.json({ comment: post });
  }
  catch(error)
  {
    res.status(500).json(error);
  }
});

module.exports = router;
