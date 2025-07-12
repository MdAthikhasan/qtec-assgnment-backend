import express from "express";
import { getProducts } from "../controllers/productController.js";

const router = express.Router();

// Products API
router.get("/products", getProducts);

export default router;
