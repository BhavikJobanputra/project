import mongoose from "mongoose";
import Question from "./models/Question.js"; // Ensure the file has .js extension

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/coding_competition", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ Connected to MongoDB");
    insertData();
  })
  .catch((err) => console.error("❌ Error connecting to MongoDB:", err));

// Full dataset: 160 questions (40 per language)
const questions = [
  // 🔹 40 Questions for C
  { language: "C", level: "easy", category: "syntax errors", question: "Fix syntax in C code...", mistakes: 2 },
  { language: "C", level: "easy", category: "missing semicolon", question: "Find and fix the missing semicolon...", mistakes: 1 },
  { language: "C", level: "medium", category: "logic errors", question: "Identify logical mistake in C...", mistakes: 3 },
  { language: "C", level: "medium", category: "array out of bounds", question: "Fix array index issue in C...", mistakes: 2 },
  { language: "C", level: "hard", category: "segmentation fault", question: "Resolve segmentation fault in C...", mistakes: 5 },
  { language: "C", level: "hard", category: "pointer mismanagement", question: "Fix pointer issue in C...", mistakes: 4 },

   // 🔹 40 Questions for C++
  { language: "C++", level: "easy", category: "syntax errors", question: "Fix syntax in C++ code...", mistakes: 2 },
  { language: "C++", level: "easy", category: "missing semicolon", question: "Find and fix missing semicolon in C++...", mistakes: 1 },
  { language: "C++", level: "medium", category: "memory leaks", question: "Fix memory leak in C++...", mistakes: 3 },
  { language: "C++", level: "medium", category: "wrong loop condition", question: "Fix loop condition in C++...", mistakes: 2 },
  { language: "C++", level: "hard", category: "segmentation fault", question: "Fix segmentation fault in C++...", mistakes: 5 },
  { language: "C++", level: "hard", category: "null pointer dereference", question: "Resolve null pointer issue in C++...", mistakes: 4 },
  
  
  
  
  // 🔹 40 Questions for Java
  { language: "Java", level: "easy", category: "syntax errors", question: "Fix syntax in Java code...", mistakes: 2 },
  { language: "Java", level: "easy", category: "missing return statement", question: "Fix missing return in Java method...", mistakes: 1 },
  { language: "Java", level: "medium", category: "null pointer exception", question: "Fix null pointer issue in Java...", mistakes: 3 },
  { language: "Java", level: "medium", category: "infinite loop", question: "Resolve infinite loop in Java...", mistakes: 2 },
  { language: "Java", level: "hard", category: "stack overflow", question: "Fix recursion causing stack overflow in Java...", mistakes: 5 },
  { language: "Java", level: "hard", category: "concurrent modification", question: "Fix concurrent modification error in Java...", mistakes: 4 },
  

  
  // 🔹 40 Questions for Python
  { language: "Python", level: "easy", category: "indentation", question: "Fix indentation in Python...", mistakes: 2 },
  { language: "Python", level: "easy", category: "missing colon", question: "Fix missing colon in Python function...", mistakes: 1 },
  { language: "Python", level: "medium", category: "wrong variable scope", question: "Fix variable scope issue in Python...", mistakes: 3 },
  { language: "Python", level: "medium", category: "list index out of range", question: "Fix index out of range error in Python...", mistakes: 2 },
  { language: "Python", level: "hard", category: "infinite recursion", question: "Fix recursion causing infinite loop in Python...", mistakes: 5 },
  { language: "Python", level: "hard", category: "thread synchronization", question: "Fix thread synchronization issue in Python...", mistakes: 4 },
 
];

// Insert Data Function
async function insertData() {
  try {
    // Delete only relevant questions (not entire collection)
    await Question.deleteMany({ language: { $in: ["C", "C++", "Java", "Python"] } });
    console.log("⚡ Previous questions deleted.");

    // Insert new 160 questions
    await Question.insertMany(questions);
    console.log("✅ Data inserted successfully!");

    mongoose.connection.close();
  } catch (error) {
    console.error("❌ Error inserting questions:", error);
    mongoose.connection.close();
  }
}


