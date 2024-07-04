import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateBlog = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [authorId, setAuthorId] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://Blog-app.com/api/blogs', { title, content, authorId });
      navigate('/');
    } catch (error) {
      console.error('Error creating blog:', error);
    }
  };

  return (
    <div>
      <h2>Create Blog</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div>
          <label>Content:</label>
          <textarea value={content} onChange={(e) => setContent(e.target.value)} required />
        </div>
        <div>
          <label>Author ID:</label>
          <input type="text" value={authorId} onChange={(e) => setAuthorId(e.target.value)} required />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateBlog;
