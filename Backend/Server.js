const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'));

// MongoDB connection
mongoose.connect('mongodb://localhost/lagnapatrika', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Ensure uploads directory exists
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// File upload setup
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir); // Save files to the 'uploads' directory
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname)); // Unique filename
  },
});
const upload = multer({ storage: storage });

// Model for Invitation
const Invitation = mongoose.model('Invitation', new mongoose.Schema({
  title: String,
  boyName: String,
  girlName: String,
  boyDetails: String,
  girlDetails: String,
  ceremonyDetails: String,
  couplePhoto: String,
  darshan: String,
  guestHouse: String,
  sender: String,
  textStyles: Object,  // Store text styles like font-size, color, etc.
  imageStyles: Object, // Store image styles like size, rotation, etc.
}));

// Routes

// Save invitation data
app.post('/save', upload.single('couplePhoto'), async (req, res) => {
  try {
    // Destructure the request body
    const { title, boyName, girlName, boyDetails, girlDetails, ceremonyDetails, darshan, guestHouse, sender, textStyles, imageStyles } = req.body;
    const couplePhoto = req.file ? req.file.path : '';

    // Create a new invitation document
    const newInvitation = new Invitation({
      title,
      boyName,
      girlName,
      boyDetails,
      girlDetails,
      ceremonyDetails,
      couplePhoto,
      darshan,
      guestHouse,
      sender,
      textStyles,
      imageStyles,
    });

    // Save the invitation to the database
    await newInvitation.save();

    // Send a success response
    res.status(200).send('Invitation saved successfully');
  } catch (error) {
    // Send error response
    console.error('Error saving invitation:', error);
    res.status(500).send('Error saving invitation');
  }
});

// Fetch invitation data
app.get('/fetch/:id', async (req, res) => {
  try {
    // Find invitation by ID
    const invitation = await Invitation.findById(req.params.id);

    // If invitation doesn't exist
    if (!invitation) {
      return res.status(404).send('Invitation not found');
    }

    // Send the invitation data
    res.status(200).json(invitation);
  } catch (error) {
    // Send error response
    console.error('Error fetching invitation:', error);
    res.status(500).send('Error fetching invitation');
  }
});

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
