import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get('http://Blog-app.com/api/blogs')
      .then(response => setBlogs(response.data))
      .catch(error => console.error('Error fetching blogs:', error));
  }, []);

  return (
    <div>
      <h2>Blog List</h2>
      <ul>
        {blogs.map(blog => (
          <li key={blog._id}>
            <Link to={`/blogs/${blog._id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
