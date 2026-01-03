const express = require("express");
const app = express();

app.use(express.json());

// Root test
app.get("/", (req, res) => {
  res.send("API is running");
});

/* ================= AUTH ROUTES ================= */

// REGISTER
app.post("/api/auth/register", (req, res) => {
  const { name, email, password } = req.body;

  res.json({
    success: true,
    message: "REGISTER ROUTE HIT",
    user: { name, email, password }
  });
});

// LOGIN
app.post("/api/auth/login", (req, res) => {
  const { email, password } = req.body;

  res.json({
    success: true,
    message: "LOGIN ROUTE HIT",
    credentials: { email, password }
  });
});

/* ================= CART ROUTES ================= */

// ADD TO CART ✅
app.post("/api/cart/add", (req, res) => {
  const { userId, items, totalAmount } = req.body;

  if (!userId || !items || !totalAmount) {
    return res.status(400).json({
      success: false,
      message: "Missing cart data"
    });
  }

  res.status(200).json({
    success: true,
    message: "Item added to cart",
    cart: {
      userId,
      items,
      totalAmount
    }
  });
});

// GET CART (OPTIONAL)
app.get("/api/cart/:userId", (req, res) => {
  const { userId } = req.params;

  res.json({
    success: true,
    message: "Cart fetched",
    userId,
    items: []
  });
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
