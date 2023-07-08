"use client"
import '../styles/endpart.css'

import { useState } from 'react';

const CommentSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([
    { id: 1, name: 'John Doe', profilePic: '/profile-pic.jpg', content: 'This is a sample comment.' }
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newComment = {
      id: comments.length + 1,
      name,
      profilePic: '/profile-pic.jpg',
      content: comment
    };

    setComments([...comments, newComment]);
    setName('');
    setEmail('');
    setComment('');
  };

  return (
    <div className="comment-section">
        <h2>One Comment</h2>
        <br></br>
        <span className='recent_border2'></span>
      <div className="predefined-comment">
        <img className="profile-pic1" src="/profile.png" alt="Profile Picture" />
        <div className="comment-content">
          <h4 className="name">{comments[0].name}</h4>
          <p className="comment">{comments[0].content}</p>
        </div>
      </div>
      <br></br><br></br>
      <div className="comment-box">
        <hr></hr>
      
        <h3 className="title">Leave a Comment</h3> <span className='recent_border2'></span>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="form-group">
            <textarea placeholder="Your Comment" value={comment} onChange={(e) => setComment(e.target.value)} />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
     
    </div>
  );
};

export default CommentSection;
