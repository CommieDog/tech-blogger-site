const router = require('express').Router();
const { User, Post } = require('../../models');
const checkAuth = require('../../utils/auth');

router.post('/', checkAuth, async (req, res) => {
  try
  {
    const post = await Post.create(
      {
        author_id: req.session.user_id,
        title: req.body.title,
        content: req.body.content
      }
    )
    res.json({ blogpost: post });
  }
  catch(error)
  {
    res.status(500).json(error);
  }
});

router.put('/:id', checkAuth, async (req, res) =>
{
  try
  {
    const post = await Post.update(
      {
        title: req.body.title,
        content: req.body.content
      },
      {
        where:
        {
          id: req.params.id
        }
      }
    )
    res.json({ blogpost: post });
  }
  catch(error)
  {
    res.status(500).json(error);
  }
});

router.delete('/:id', checkAuth, async (req, res) =>
{
  try
  {
    const post = await Post.destroy(
      {
        where:
        {
          id: req.params.id
        }
      }
    )
    res.json({ blogpost: post });
  }
  catch(error)
  {
    res.status(500).json(error);
  }
});

module.exports = router;
