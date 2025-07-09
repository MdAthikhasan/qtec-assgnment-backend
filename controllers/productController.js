const Product = require("../models/Product");

// Get all products
const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: "Failed to load products from database." });
  }
};

// In-memory cart (simulate persistence)
let cart = [];

// Get cart
const getCart = (req, res) => {
  res.json(cart);
};

// Add to cart
const addToCart = (req, res) => {
  const { productId, quantity } = req.body;
  const existing = cart.find((item) => item.productId === productId);
  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({ productId, quantity });
  }
  res.json(cart);
};

// Remove from cart
const removeFromCart = (req, res) => {
  const { productId } = req.params;
  cart = cart.filter((item) => item.productId !== productId);
  res.json(cart);
};

// Place order (simulate)
const placeOrder = (req, res) => {
  const order = { items: cart, createdAt: new Date() };
  cart = [];
  res.json({ success: true, order });
};

module.exports = {
  getProducts,
  getCart,
  addToCart,
  removeFromCart,
  placeOrder,
};
