const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
  source: {
    type: String,
    required: true,
    max: 100,
  },
  title: {
    type: String,
    required: true,
    max: 100,
  },
  description: {
    type: String,
    max: 1024,
    min: 6,
  },
  url: {
    type: String,
    required: true,
    max: 100,
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
  },
});

module.exports = mongoose.model("Article", articleSchema);
