import dotenv from "dotenv";
import mongoose from "mongoose";
import Product from "./models/Product.js";
dotenv.config();
const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/qtec_assignment";
console.log("MONGODB_URI:", MONGODB_URI);
const products = [
  {
    name: "Wireless Headphones",
    price: 59.99,
    description: "High-quality wireless headphones with noise cancellation.",
    image: "https://placehold.co/200x200?text=Headphones",
    category: "Electronics",
    stock: 20,
  },
  {
    name: "Smart Watch",
    price: 99.99,
    description: "Feature-rich smart watch with health tracking.",
    image: "https://placehold.co/200x200?text=Smart%20Watch",
    category: "Wearables",
    stock: 15,
  },
  {
    name: "Bluetooth Speaker",
    price: 39.99,
    description: "Portable Bluetooth speaker with deep bass.",
    image: "https://placehold.co/200x200?text=Speaker",
    category: "Audio",
    stock: 25,
  },
  {
    name: "Fitness Tracker",
    price: 29.99,
    description: "Track your daily activity and sleep patterns.",
    image: "https://placehold.co/200x200?text=Fitness%20Tracker",
    category: "Wearables",
    stock: 30,
  },
  {
    name: "Laptop Stand",
    price: 19.99,
    description: "Adjustable laptop stand for better ergonomics.",
    image: "https://placehold.co/200x200?text=Laptop%20Stand",
    category: "Accessories",
    stock: 40,
  },
  {
    name: "USB-C Hub",
    price: 24.99,
    description: "Multi-port USB-C hub for laptops and tablets.",
    image: "https://placehold.co/200x200?text=USB-C%20Hub",
    category: "Accessories",
    stock: 50,
  },
];

mongoose
  .connect(MONGODB_URI)
  .then(async () => {
    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log("Database seeded with products!");
    mongoose.disconnect();
  })
  .catch((err) => {
    console.error("Seeding error:", err);
    mongoose.disconnect();
  });
