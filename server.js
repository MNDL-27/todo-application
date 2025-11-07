// Entry point for the To-Do API server.
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');

const app = express();

// CORS configuration
app.use(cors({
  origin: true,
  credentials: true
}));
app.use(express.json());
app.use(morgan('dev'));

connectDB();

app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);

app.get('/', (_req, res) => {
	res.send('ToDo List Backend connected to MongoDB 🚀');
});

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM signal received: closing HTTP server');
  server.close(() => {
    console.log('HTTP server closed');
  });
});
