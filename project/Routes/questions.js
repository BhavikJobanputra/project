import express from "express";
import Question from "../models/Questions.js"; // Import the model

const router = express.Router();

// Route to get all questions
router.get("/", async (req, res) => {
  try {
    const questions = await Question.find(); // Fetch all questions
    res.json(questions);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
});

export default router;
