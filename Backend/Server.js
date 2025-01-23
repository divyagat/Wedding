const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb://localhost:27017/lagnaPatrika", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Schema and Model
const patrikaSchema = new mongoose.Schema({
  ganeshaText: String,
  invitationTitle: String,
  brideName: String,
  groomName: String,
  brideParents: String,
  groomParents: String,
  weddingDate: String,
  weddingTime: String,
  weddingVenue: String,
  invitationBy: String,
  couplePhoto: String, // Base64 encoded
});

const Patrika = mongoose.model("Patrika", patrikaSchema);

// Add Data
app.post("/add-patrika", async (req, res) => {
  const newPatrika = new Patrika(req.body);
  await newPatrika.save();
  res.send({ message: "Data saved successfully!" });
});

// Get Data
app.get("/get-patrika", async (req, res) => {
  const data = await Patrika.find();
  res.send(data);
});

// Start Server
app.listen(5000, () => console.log("Server running on port 5000"));
