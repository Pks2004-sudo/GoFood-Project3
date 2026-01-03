const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
  name: String,
  description: String,
  image: String,
  price: {
    half: Number,
    full: Number
  },
  category: String
});

module.exports = mongoose.model("Food", foodSchema);
