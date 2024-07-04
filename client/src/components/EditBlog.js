import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditBlog = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://Blog-app.com/api/blogs/${id}`)
      .then(response => {
        setTitle(response.data.title);
        setContent(response.data.content);
      })
      .catch(error => console.error('Error fetching blog:', error));
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`http://Blog-app.com/api/blogs/${id}`, { title, content });
      navigate(`/blogs/${id}`);
    } catch (error) {
      console.error('Error updating blog:', error);
    }
  };

  return (
    <div>
      <h2>Edit Blog</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div>
          <label>Content:</label>
          <textarea value={content} onChange={(e) => setContent(e.target.value)} required />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditBlog;
