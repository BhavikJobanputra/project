import { fetchQuestions, addQuestion, saveAnswer } from './FetchApi.js';

// Example: Fetch Questions
const getQuestions = async () => {
    const questions = await fetchQuestions("python"); // Change to C, C++, Java as needed
    console.log(questions);
};

// Example: Submit an Answer
const submitAnswer = async () => {
    const response = await saveAnswer({
        userId: "123",
        questionId: "abc",
        answer: "Fixed code",
    });
    console.log(response);
};

// Call functions
getQuestions();
submitAnswer();
