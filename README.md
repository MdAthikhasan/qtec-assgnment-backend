# Qtec Assignment - Backend

This is the backend for the Qtec Mini E-Commerce SPA, built with Node.js, Express, and MongoDB (Mongoose).

## Features

- REST API for products
- MongoDB product storage
- ES module syntax

## Tech Stack

- Node.js
- Express
- MongoDB + Mongoose
- CORS

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Set up environment variables 

You can use a `.env` file to set your MongoDB URI:

```
MONGODB_URI=.......
```

### 3. Seed the database with products

```bash
node seed.js
```

### 4. Start the server

```bash
npm start
```


## API Endpoints

- `GET /api/products` - List all products


## Deployment

You can deploy this backend to Render, Railway, or any Node.js hosting. Make sure to set the `MONGODB_URI` environment variable in production.

## Project Structure

- `index.js` - Main server file
- `models/Product.js` - Product schema
- `controllers/productController.js` - API logic
- `routes/productRoutes.js` - API routes
- `seed.js` - Seed script for products

## Author

- [Md Athik Hasan]

---


