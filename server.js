const express = require('express');
const mongoose = require('mongoose');
const config = require('config');

// Initialise the app
const app = express();

// Middleware
app.use(express.json());

// Connect to mongoDB with mongoose
mongoose
    .connect(config.get('mongoURI'), { useNewUrlParser: true, useCreateIndex: true })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

// Routes
app.use('/api/products', require('./routes/api/products'));

// Start server and listen on port 5000
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});