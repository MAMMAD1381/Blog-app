// /backend/src/routes/blogRoutes.js

const express = require('express');
const router = express.Router();
const BlogController = require('../controllers/BlogController');

// GET all blogs
router.get('/', async (req, res) => {
  try {
    const blogs = await BlogController.getAllBlogs();
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET a specific blog by ID
router.get('/:id', async (req, res) => {
  const blogId = req.params.id;
  try {
    const blog = await BlogController.getBlogById(blogId);
    res.json(blog);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST a new blog
router.post('/', async (req, res) => {
  const { title, content, authorId } = req.body;
  try {
    const newBlog = await BlogController.createBlog(title, content, authorId);
    res.status(201).json(newBlog);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PUT (update) an existing blog by ID
router.put('/:id', async (req, res) => {
  const blogId = req.params.id;
  const { title, content } = req.body;
  try {
    const updatedBlog = await BlogController.updateBlog(blogId, title, content);
    res.json(updatedBlog);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE a blog by ID
router.delete('/:id', async (req, res) => {
  const blogId = req.params.id;
  try {
    await BlogController.deleteBlog(blogId);
    res.json({ message: 'Blog deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
