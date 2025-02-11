import mongoose from "mongoose";

const responseSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    questionId: { type: mongoose.Schema.Types.ObjectId, ref: "Question", required: true },
    answer: { type: String, required: true },
    isCorrect: { type: Boolean, required: true },
  },
  { timestamps: true }
);

// ✅ Prevent Model Overwrite
const Response = mongoose.models.Response || mongoose.model("Response", responseSchema);

export default Response; // ✅ Correct Export
