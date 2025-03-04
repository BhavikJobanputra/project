import mongoose from 'mongoose';
import Question from './models/Question.js'; // Ensure the file extension is .js

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/yourdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("MongoDB Connection Error:", err));

// Fetch and display all questions
async function testQuestions() {
    try {
        const questions = await Question.find();
        console.log("Fetched Questions:", questions);
    } catch (err) {
        console.error("Error fetching questions:", err);
    } finally {
        await mongoose.connection.close();
    }
}

testQuestions();
