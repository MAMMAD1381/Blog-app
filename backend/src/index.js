// /backend/src/index.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); // If needed
const userRoutes = require('./routes/user');
const blogRoutes = require('./routes/blog');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/your-database-name', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middleware
app.use(bodyParser.json()); // If you need to parse JSON request bodies

// Routes
// app.use('/users', userRoutes);
// app.use('/blogs', blogRoutes);
app.use((req) => {

})

// Error handling middleware (optional)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
