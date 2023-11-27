// /backend/src/routes/userRoutes.js

const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

// GET all users
router.get('/', async (req, res) => {
  try {
    const users = await UserController.getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET a specific user by ID
router.get('/:id', async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await UserController.getUserById(userId);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST a new user
router.post('/', async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const newUser = await UserController.createUser(username, email, password);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PUT (update) an existing user by ID
router.put('/:id', async (req, res) => {
  const userId = req.params.id;
  const { username, email } = req.body;
  try {
    const updatedUser = await UserController.updateUser(userId, username, email);
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE a user by ID
router.delete('/:id', async (req, res) => {
  const userId = req.params.id;
  try {
    await UserController.deleteUser(userId);
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
