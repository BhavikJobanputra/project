import mongoose from "mongoose";

const QuestionSchema = new mongoose.Schema({
  question: String,
  options: [String],
  answer: String,  // The actual question
});

const Question = mongoose.model("Question", QuestionSchema);

export default Question;
