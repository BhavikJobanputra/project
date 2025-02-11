const mongoose = require('mongoose');
require('dotenv').config();  // Load environment variables

const mongoURI = process.env.MONGO_URI; // Use the .env file for security

const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("✅ MongoDB connected successfully");
    } catch (error) {
        console.error("❌ MongoDB connection error:", error);
        process.exit(1); // Stop the app if connection fails
    }
};

module.exports = connectDB;
