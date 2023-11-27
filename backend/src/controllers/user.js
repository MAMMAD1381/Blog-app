// /backend/src/controllers/UserController.js

const User = require('../models/User');

// Get all users
async function getAllUsers() {
  return User.find();
}

// Get a user by ID
async function getUserById(userId) {
  return User.findById(userId);
}

// Create a new user
async function createUser(username, email, password) {
  const newUser = new User({ username, email, password });
  return newUser.save();
}

// Update a user by ID
async function updateUser(userId, username, email) {
  return User.findByIdAndUpdate(userId, { username, email }, { new: true });
}

// Delete a user by ID
async function deleteUser(userId) {
  return User.findByIdAndDelete(userId);
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
