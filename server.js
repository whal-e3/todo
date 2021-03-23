const express = require('express');
const connectDB = require('./db');

const app = express();

// Init Middleware
// app.use(): mounts middleware(express.json()) to the route(defualt: '/')
// express.json(): parses incoming requests with JSON payloads
app.use(express.json());

connectDB();

app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/todos', require('./routes/api/todos'));
app.use('/api/user', require('./routes/api/user'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
