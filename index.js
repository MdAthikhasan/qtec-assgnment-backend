const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

const PORT = process.env.PORT || 5000;

const productRoutes = require("./routes/productRoutes");

app.use(cors());
app.use(express.json());
app.use("/api", productRoutes);

// MongoDB connection
mongoose
  .connect(
    process.env.MONGODB_URI || "mongodb://localhost:27017/qtec_assignment",
    // {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    // }


  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
