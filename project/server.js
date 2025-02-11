import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import questionRoutes from "./routes/questions.js"; // Adjust path if needed

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Use Questions API
app.use("/api", questionRoutes);

// Start Server & Connect to MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/coding_competition", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("✅ Connected to MongoDB");
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));
