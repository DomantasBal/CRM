const express = require('express');
const cookieParser = require('cookie-parser');
const { getAllUsers } = require('./models/userModel');

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());

// Health - Check
app.get('/api/health', (req, res) => {
  res.status(200).json({ message: 'API is OK' });
});

module.exports = app;
