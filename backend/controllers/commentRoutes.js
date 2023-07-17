const express = require('express');
const router = express.Router();
const Comment = require('../models/Comment');

router.get('/comments/:photoId', (req, res) => {
  const { photoId } = req.params;

  Comment.find({ photoId })
    .then((comments) => {
      res.json(comments);
    })
    .catch((error) => {
      console.log('Error fetching comments:', error);
      res.status(500).json({ error: 'Failed to fetch comments' });
    });
});


router.post('/comments', (req, res) => {
  const { photoId, text } = req.body;

  const newComment = new Comment({ photoId, text });
  newComment
    .save()
    .then((comment) => {
      res.status(201).json(comment);
    })
    .catch((error) => {
      console.log('Error submitting comment:', error);
      res.status(500).json({ error: 'Failed to submit comment' });
    });
});

module.exports = router;