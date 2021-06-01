const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    min: 6,
    max: 100,
  },
  content: {
    type: String,
    required: true,
    max: 1024,
    min: 6,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: String,
    required: true,
    max: 255,
    min: 6,
  }
});

module.exports = mongoose.model("Note", noteSchema);