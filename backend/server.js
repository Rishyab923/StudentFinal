require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const studentRoutes = require('./routes/studentRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors({
  origin: "https://studentfinal-frontend.onrender.com"
}));
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.send('StudentFinal Backend is Running');
});

// API routes
app.use('/api', studentRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
