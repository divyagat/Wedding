const express = require('express');
const router = express.Router();
const Invitation = require('../models/Invitation');
const multer = require('multer');
const path = require('path');

// Set up storage for uploaded files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage });

// Save invitation data
router.post('/save-style', async (req, res) => {
  try {
    const { title, boyName, girlName, boyDetails, girlDetails, haldiCeremony, textStyles, imageStyles } = req.body;

    if (!title || !boyName || !girlName || !boyDetails || !girlDetails || !haldiCeremony) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    const newInvitation = new Invitation({
      title,
      boyName,
      girlName,
      boyDetails,
      girlDetails,
      haldiCeremony,
      textStyles,
      imageStyles,
    });

    await newInvitation.save();
    res.status(201).json({ message: 'Data saved successfully!', data: newInvitation });
  } catch (error) {
    console.error('Error saving data:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Upload image
router.post('/upload-image', upload.single('image'), (req, res) => {
  try {
    const filePath = req.file.path;
    res.status(200).json({ filePath });
  } catch (error) {
    console.error('Error uploading image:', error);
    res.status(500).json({ message: 'Error uploading image.' });
  }
});

// Get all invitations
router.get('/get-style', async (req, res) => {
  try {
    const invitations = await Invitation.find();
    res.status(200).json(invitations);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ message: 'Error fetching data.' });
  }
});

// Get a single invitation by ID
router.get('/get-invitation/:id', async (req, res) => {
  try {
    const invitation = await Invitation.findById(req.params.id);
    if (!invitation) {
      return res.status(404).json({ message: 'Invitation not found' });
    }
    res.status(200).json(invitation);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ message: 'Error fetching data.' });
  }
});

module.exports = router;
