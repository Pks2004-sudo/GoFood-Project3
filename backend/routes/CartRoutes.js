const express = require("express");
const Order = require("../models/Order");
const router = express.Router();

router.post("/add", async (req, res) => {
  const { userId, items, totalAmount } = req.body;
  const order = await Order.create({ userId, items, totalAmount });
  res.json(order);
});

module.exports = router;
