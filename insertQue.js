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
  { language: "C", level: "easy", category: "array indexing", question: "Fix out-of-bounds array access error in C.", mistakes: 4 },
  { language: "C", level: "medium", category: "memory allocation", question: "Resolve memory leak issue in dynamically allocated arrays.", mistakes: 4 },
  { language: "C", level: "hard", category: "pointer mismanagement", question: "Fix segmentation fault caused by incorrect pointer arithmetic.", mistakes: 4 },
  { language: "C", level: "easy", category: "string manipulation", question: "Correct incorrect use of 'strcpy' leading to buffer overflow.", mistakes: 4 },
  { language: "C",level: "medium", category: "file handling", question: "Resolve file pointer mismanagement leading to read errors.", mistakes: 4 },
  { language: "C", level: "easy", category: "array indexing", question: "Fix out-of-bounds array access error in C.", mistakes: 4 },
  { language: "C", level: "medium", category: "memory allocation", question: "Resolve memory leak issue in dynamically allocated arrays.", mistakes: 4 },
   { language: "C", level:"easy", category: "string manipulation", question: "Correct incorrect use of 'strcpy' leading to buffer overflow.", mistakes: 4 },
 { language: "C",level: "medium", category: "file handling", question: "Resolve file pointer mismanagement leading to read errors.", mistakes: 4 },
 { language: "C", level: "hard", category: "multi-threading", question: "Fix deadlock occurring in a C program using pthreads.", mistakes: 4 },
 { language: "C", level: "hard", category: "buffer overflow", question: "Identify and resolve buffer overflow vulnerability in C.", mistakes: 4 },
 

   // 🔹 40 Questions for C++
  { language: "C++", level: "easy", category: "syntax errors", question: "Fix syntax in C++ code...", mistakes: 2 },
  { language: "C++", level: "easy", category: "missing semicolon", question: "Find and fix missing semicolon in C++...", mistakes: 1 },
  { language: "C++", level: "medium", category: "memory leaks", question: "Fix memory leak in C++...", mistakes: 3 },
  { language: "C++", level: "medium", category: "wrong loop condition", question: "Fix loop condition in C++...", mistakes: 2 },
  { language: "C++", level: "hard", category: "segmentation fault", question: "Fix segmentation fault in C++...", mistakes: 5 },
  { language: "C++", level: "hard", category: "null pointer dereference", question: "Resolve null pointer issue in C++...", mistakes: 4 },
  { language: "C++", level: "easy", category: "STL misuse", question: "Fix incorrect vector access causing out-of-range exception.", mistakes: 4 },
{ language: "C++", level: "medium", category: "memory management", question: "Resolve memory leak caused by missing 'delete' on heap allocation.", mistakes: 4 },
{ language: "C++", level: "hard", category: "pointer mismanagement", question: "Fix double deletion issue in dynamically allocated objects.", mistakes: 4 },
{ language: "C++", level: "easy", category: "function overloading", question: "Correct function overload ambiguity in C++.", mistakes: 4 },
{ language: "C++", level: "medium", category: "inheritance", question: "Resolve object slicing issue in polymorphic classes.",mistakes: 4 },
{ language: "C++", level: "hard", category: "thread safety", question: "Fix race condition issue in multi-threaded C++ program.", mistakes: 4 },
{ language: "C++", level: "hard", category: "dangling references", question: "Resolve dangling reference issue caused by returning local object.", mistakes: 4 },

  
  
  
  // 🔹 40 Questions for Java
  { language: "Java", level: "easy", category: "syntax errors", question: "Fix syntax in Java code...", mistakes: 2 },
  { language: "Java", level: "easy", category: "missing return statement", question: "Fix missing return in Java method...", mistakes: 1 },
  { language: "Java", level: "medium", category: "null pointer exception", question: "Fix null pointer issue in Java...", mistakes: 3 },
  { language: "Java", level: "medium", category: "infinite loop", question: "Resolve infinite loop in Java...", mistakes: 2 },
  { language: "Java", level: "hard", category: "stack overflow", question: "Fix recursion causing stack overflow in Java...", mistakes: 5 },
  { language: "Java", level: "hard", category: "concurrent modification", question: "Fix concurrent modification error in Java...", mistakes: 4 },
  { language: "Java", level: "easy", category: "null pointer exceptions", question: "Fix NullPointerException caused by uninitialized object reference.", mistakes: 4 },
 { language: "Java", level: "medium", category: "memory leaks", question: "Resolve memory leak caused by unintentional object retention in collections.", mistakes: 4 },
 { language: "Java", level: "hard", category: "thread safety", question: "Fix race condition issue in multi-threaded Java program.", mistakes: 4 },
 { language: "Java", level: "easy", category: "string handling", question: "Resolve string immutability issue in Java causing unexpected behavior.", mistakes: 4 },
 { language: "Java", level: "medium", category: "exception handling", question: "Fix uncaught exceptions causing program termination.", mistakes: 4 },
 { language: "Java", level: "hard", category: "garbage collection", question: "Fix excessive garbage collection issue causing performance problems.", mistakes: 4 },
 { language: "Java", level: "hard", category: "synchronization", question: "Resolve deadlock occurring in Java multithreading environment.", mistakes: 4 },
 { language: "Java", level: "medium", category: "database connections", question: "Fix JDBC connection leak causing resource exhaustion.", mistakes: 4 },


  
  // 🔹 40 Questions for Python
  { language: "Python", level: "easy", category: "indentation", question: "Fix indentation in Python...", mistakes: 2 },
  { language: "Python", level: "easy", category: "missing colon", question: "Fix missing colon in Python function...", mistakes: 1 },
  { language: "Python", level: "medium", category: "wrong variable scope", question: "Fix variable scope issue in Python...", mistakes: 3 },
  { language: "Python", level: "medium", category: "list index out of range", question: "Fix index out of range error in Python...", mistakes: 2 },
  { language: "Python", level: "hard", category: "infinite recursion", question: "Fix recursion causing infinite loop in Python...", mistakes: 5 },
  { language: "Python", level: "hard", category: "thread synchronization", question: "Fix thread synchronization issue in Python...", mistakes: 4 },
  { language: "Python", level: "easy", category: "list indexing", question: "Fix IndexError caused by out-of-range list access.", mistakes: 4 },
  { language: "Python", level: "medium", category: "memory management", question: "Resolve memory issue caused by inefficient use of large data structures.", mistakes: 4 },
  { language: "Python", level: "hard", category: "multi-threading", question: "Fix data race issue caused by improper thread synchronization.", mistakes: 4 },
  { language: "Python", level: "easy", category: "file handling", question: "Correct improper file closure leading to resource leaks.", mistakes: 4 },
 { language: "Python", level: "medium", category: "decorators", question: "Resolve unexpected behavior in function decorators due to incorrect argument handling.", mistakes: 4 },
 { language: "Python", level: "hard", category: "GIL issues", question: "Optimize Python program for multi-threading by handling Global Interpreter Lock (GIL).", mistakes: 4 },
 { language: "Python", level: "medium", category: "circular imports", question: "Fix circular import error causing module loading failure.", mistakes: 4 },
 { language: "Python", level: "hard", category: "async programming", question: "Resolve deadlock occurring in async/await operations in Python.", mistakes: 4 },

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


