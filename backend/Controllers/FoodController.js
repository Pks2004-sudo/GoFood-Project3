const Food = require("../models/Food");

// GET all food items
exports.getAllFoods = async (req, res) => {
  try {
    const foods = await Food.find({});
    res.status(200).json(foods);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch food items" });
  }
};
