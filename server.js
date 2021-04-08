const express = require('express');
const connectDB = require('./db');
const path = require('path');

const app = express();

connectDB();

// Init Body Parser Middleware
// app.use(): mounts middleware to the route(defualt: '/')
// express.json(): parses incoming requests with JSON payloads
app.use(express.json());

// Define Routes
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/todo', require('./routes/api/todo'));
app.use('/api/user', require('./routes/api/user'));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder to serve
  app.use(express.static('client/build'));

  // Set to get res of client index.html always
  app.get('*', (req, res) => {
    // Transfers the file at the given path
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
