import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    axios.get(`http://Blog-app.com/api/blogs/${id}`)
      .then(response => setBlog(response.data))
      .catch(error => console.error('Error fetching blog:', error));
  }, [id]);

  if (!blog) return <div>Loading...</div>;

  return (
    <div>
      <h2>{blog.title}</h2>
      <p>{blog.content}</p>
    </div>
  );
};

export default BlogDetail;
