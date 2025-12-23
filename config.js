const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/e-commerce')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });
