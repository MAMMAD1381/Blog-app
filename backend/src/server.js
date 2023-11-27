const express = require('express');

// loading delopment or production variables
process.env.NODE_ENV === 'development' ? 
require('dotenv').config({path: __dirname+'/configs/config.dev.env'}):
require('dotenv').config({path: __dirname+'/configs/config.prod.env'})

const bodyParser = require('body-parser'); // If needed
const userRoutes = require('./routes/user');
const blogRoutes = require('./routes/blog');
const connectDB = require('./configs/db')

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
startDB()

// Middleware
app.use(bodyParser.json()); // If you need to parse JSON request bodies

// Routes
app.use('/users', userRoutes);
app.use('/blogs', blogRoutes);
app.get('/', (req, res, next) => {
    res.send('welcome home')
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

async function startDB(){
    await connectDB()
}
