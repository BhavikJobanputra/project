import mongoose from 'mongoose';  // ✅ Correct way to import mongoose
import Question from './models/Question.js';  // ✅ Ensure the file has .js extension

const questions = [
  {
    language: 'C',
    level: 'easy',
    category: 'syntax errors',
    question: 'Find and fix syntax errors in the following C code:\n\nint main() {\n    printf("Hello World")\n    return 0;\n}',
    mistakes: 2,
  },
  {
    language: 'Python',
    level: 'medium',
    category: 'loops',
    question: 'Fix the errors in this Python loop:\n\nfor i in range(5)\n    print(i)\n',
    mistakes: 1,
  },
];

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/coding_competition', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('✅ Connected to MongoDB');
  insertData();
}).catch(err => console.error("❌ Error connecting to MongoDB:", err));

async function insertData() {
  try {
    await Question.deleteMany();
    console.log("⚡ Previous questions deleted.");
    
    await Question.insertMany(questions);
    console.log("✅ Data inserted successfully!");

    mongoose.connection.close();
  } catch (error) {
    console.error("❌ Error inserting questions:", error);
    mongoose.connection.close();
  }
}
