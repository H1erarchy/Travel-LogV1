import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './PostPage.css';

const CommentForm = ({ photoId }) => {
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleRatingChange = (e) => {
    setRating(Number(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Comment:', comment);
    console.log('Rating:', rating);

    setComment('');
    setRating(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="comment">Comment:</label>
        <textarea id="comment" value={comment} onChange={handleCommentChange}></textarea>
      </div>
      <div>
        <label htmlFor="rating">Rating:</label>
        <input type="number" id="rating" value={rating} onChange={handleRatingChange} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

const Comments = ({ photoId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/comments/${photoId}`);
        setComments(response.data);
      } catch (error) {
        console.log('Error fetching comments:', error);
      }
    };

    fetchComments();
  }, [photoId]);

  return (
    <div>
      <h3>Comments:</h3>
      {comments.map((comment) => (
        <div key={comment.id}>{comment.text}</div>
      ))}
    </div>
  );
};

const PostPage = () => {
  const { id } = useParams();

  const photos = [
    { id: 1, src: 'img-2.jpg', text: 'The Eiffel Tower', label: 'Label 1' },
    { id: 2, src: 'img-3.jpg', text: 'The Colosseum', label: 'Label 2' },
    { id: 3, src: 'img-4.jpg', text: 'The Grand Canyon', label: 'Label 3' },
    { id: 4, src: 'img-5.jpg', text: 'Stonehedge', label: 'Label 4' },
    { id: 5, src: 'img-6.jpg', text: 'The Pyramids', label: 'Label 5' }
  ];

  const photo = photos.find((photo) => photo.id === Number(id));

  if (!photo) {
    return <div>No photo found</div>;
  }

  return (
    <div>
      <h1>Post Page</h1>
      <h2>{photo.text}</h2>
      <img src={photo.src} alt={photo.text} />

      <CommentForm photoId={photo.id} />
      <Comments photoId={photo.id} />
    </div>
  );
};

export default PostPage;