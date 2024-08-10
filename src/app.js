const express = require('express');
const authRoutes = require('./routes/authRoutes');
const assignmentRoutes = require('./routes/assignmentRoutes');

const app = express();

app.use(express.json());


app.use('/api/auth', authRoutes);
app.use('/api/assignments', assignmentRoutes);

module.exports = app;
