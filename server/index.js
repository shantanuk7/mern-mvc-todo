const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const todoRoutes = require('./routes/todoRoutes.js')

const app = express();
const PORT = process.env.PORT || 3000;

const mongoURI = 'mongodb://127.0.0.1:27017/mvc-todo-test';

app.use(cors());
app.use(express.json());
app.use('/api/todos', todoRoutes);

mongoose.connect(mongoURI)
  .then(() => console.log('Connected to MongoDB successfully!'))
  .catch(err => console.error('MongoDB connection error:', err));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});