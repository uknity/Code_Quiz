var mainSec = document.querySelector("main");

var instructionsSec = document.querySelector("#instructions");
var questionsSec = document.getElementById("questions-screen");

var startBtn = document.querySelector("#start");

var quizEl = document.querySelector("#quiz");

var pagesEl = document.querySelector(".pages");

var messageCorrect = document.querySelector(".correct");

var messageIncorrect = document.querySelector(".wrong");

var finalScorePageEl = document.querySelector("#finalScorePage");

var finalScoreOutputEl = document.querySelector("#finalScoreOutput");

var initialsInput = document.querySelector("#initials");

var highScoresPage = document.querySelector("#highScores");



var questions = [
    {
        question: "Commonly used data types DO NOT include:",
        answerChoices: {
            1: "1. strings",
            2: "2. booleans",
            3: "3. alerts",
            4: "4. numbers"
        },

        correctAnswer: 2,
    },
    {
        question: "The condition in an if / else statement is enclosed within _____.",
        answerChoices: {
            1: "1. quotes",
            2: "2. curly brackets",
            3: "3. parenthesis",
            4: "4. square brackets"
        },
        correctAnswer: 3,
    },
    {
        question: "Arrays in JavaScript can be used to store ____.",
        answerChoices: {
            1: "1. numbers and strings",
            2: "2. other arrays",
            3: "3. booleans",
            4: "4. all of the above"
        },
        correctAnswer: 4,
    },
    {
        question: "String values must be enclosed within ____ when being assigned to variables.",
        answerChoices: {
            1: "1. commas",
            2: "2. curly brackets",
            3: "3. quotes", 
            4: "4. parenthesis"
        },
        correctAnswer: 3,
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answerChoices: {
            1: "1. JavaScript",
            2: "2. terminal / bash",
            3: "3. for loops",
            4: "4. console log",
        },
        correctAnswer: 4,
    }
]



var score = 0;

startBtn.addEventListener("click", startQuiz);


function startQuiz(){
    instructionsSec
}
// console.log(questions);

// console.log(questions[0]);

// console.log(questions[0].answerChoices);

// console.log(questions[0].answerChoices[1]);


