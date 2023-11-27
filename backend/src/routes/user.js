const express = require('express');
const router = express.Router();
const {getAllUsers, getUserById, createUser, updateUser, deleteUser} = require('../controllers/user');
const CustomError = require('../utils/CustomError')

// GET all users
router.get('/', async (req, res) => {
  try {
    const users = await getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET a specific user by ID
router.get('/:id', async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await getUserById(userId);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST a new user
router.post('/', async (req, res, next) => {
  const { username, email, password } = req.body;
  if(!username || !email || !password)
    return next(new CustomError('requiring a username and email and password is needed', 400))

  try {
    const newUser = await createUser(username, email, password);
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
    const updatedUser = await updateUser(userId, username, email);
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE a user by ID
router.delete('/:id', async (req, res) => {
  const userId = req.params.id;
  try {
    await deleteUser(userId);
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
