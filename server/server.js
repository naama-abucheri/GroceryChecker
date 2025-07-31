require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Import routes
const itemRoutes = require('./routes/itemRoutes');

const app = express();
const PORT = process.env.PORT || 10000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/Items', itemRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  // These options are deprecated, no longer needed in Mongoose v6+
})
.then(() => {
  console.log('✅ Connected to MongoDB');
  // Start server after DB connection is successful
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
})
.catch((err) => {
  console.error('❌ MongoDB connection error:', err);
});
