const Order = require("../models/Order");

// ADD TO CART / CREATE ORDER
exports.addToCart = async (req, res) => {
  try {
    const { userId, items, totalAmount } = req.body;

    const order = await Order.create({
      userId,
      items,
      totalAmount,
    });

    res.status(201).json({
      message: "Order added successfully",
      order,
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to add to cart" });
  }
};
