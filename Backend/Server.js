require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const invitationRoutes = require('./routes/invitationRoutes');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// MongoDB Connection
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/marriageInvitation';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => {
    console.error('❌ MongoDB Connection Error:', err);
    process.exit(1);
  });

// Routes
app.use('/api', invitationRoutes);

// Start Server
app.listen(port, () => console.log(`🚀 Server running on http://localhost:${port}`));
