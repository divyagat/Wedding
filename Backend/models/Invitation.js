const mongoose = require('mongoose');

const textStylesSchema = new mongoose.Schema({
  color: { type: String, default: "#000000" },
  fontSize: { type: Number, default: 24 },
  margin: {
    top: { type: Number, default: 10 },
    bottom: { type: Number, default: 10 },
    left: { type: Number, default: 10 },
    right: { type: Number, default: 10 },
  },
  rotation: { type: Number, default: 0 },
  zoom: { type: Number, default: 100 },
  alignment: { type: String, default: "center" },
});

const imageStylesSchema = new mongoose.Schema({
  width: { type: Number, default: 300 },
  height: { type: String, default: "auto" },
  rotation: { type: Number, default: 0 },
  alignment: { type: String, default: "center" },
});

const invitationSchema = new mongoose.Schema({
  title: { type: String, required: true },
  boyName: { type: String, required: true },
  girlName: { type: String, required: true },
  boyDetails: { type: String, required: true },
  girlDetails: { type: String, required: true },
  haldiCeremony: { type: String, required: true },
  couplePhoto: { type: String, default: null },
  backgroundImage: { type: String, default: null },
  textStyles: { type: Object, default: {} },
  imageStyles: { type: Object, default: {} },
});

module.exports = mongoose.model('Invitation', invitationSchema);
