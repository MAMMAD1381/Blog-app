// /backend/src/controllers/BlogController.js

const Blog = require('../models/Blog');

// Get all blogs
async function getAllBlogs() {
  return Blog.find();
}

// Get a blog by ID
async function getBlogById(blogId) {
  return Blog.findById(blogId);
}

// Create a new blog
async function createBlog(title, content, authorId) {
  const newBlog = new Blog({ title, content, author: authorId });
  return newBlog.save();
}

// Update a blog by ID
async function updateBlog(blogId, title, content) {
  return Blog.findByIdAndUpdate(blogId, { title, content }, { new: true });
}

// Delete a blog by ID
async function deleteBlog(blogId) {
  return Blog.findByIdAndDelete(blogId);
}

module.exports = {
  getAllBlogs,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog,
};
