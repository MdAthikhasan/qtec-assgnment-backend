const express = require("express");
const router = express.Router();
const {
  getProducts,
  getCart,
  addToCart,
  removeFromCart,
  placeOrder,
} = require("../controllers/productController");

// Products API
router.get("/products", getProducts);

// Cart API
router.get("/cart", getCart);
router.post("/cart", addToCart);
router.delete("/cart/:productId", removeFromCart);

// Order API
router.post("/order", placeOrder);

module.exports = router;
