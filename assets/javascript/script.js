var mainSec = document.querySelector("main");

var instructionsSec = document.querySelector(".instructions");

var questionsSec = document.querySelector("#questions-section");

var quesEl = document.querySelector("#ques");
var ansEl = document.querySelector("#ans");

var startBtn = document.querySelector("#start");

var quizEl = document.querySelector("#quiz");

var pagesEl = document.querySelector(".pages");

var messageEl = document.querySelector("#message");
var finalScorePageEl = document.getElementById("#finalScorePage");
var finalScoreOutputEl = document.querySelector(".finalScoreOutput");
var initialsInput = document.querySelector(".initials");
var highScoresPage = document.getElementById("#highScores");
var highScoresInitialsEl = document.querySelector(".highScoresInitials");
var answerElement = document.getElementById("ans");
var questionElement = document.getElementById("ques");

var questions = [
  {
    question: "Commonly used data types DO NOT include:",
    answerChoices: ["strings", "booleans", "alerts", "numbers"],
    correctAnswer: "alerts",
  },
  {
    question:
      "The condition in an if / else statement is enclosed within _____.",
    answerChoices: [
      "quotes",
      "curly brackets",
      "parenthesis",
      "square brackets",
    ],
    correctAnswer: "parenthesis",
  },
  {
    question: "Arrays in JavaScript can be used to store ____.",
    answerChoices: [
      "numbers and strings",
      "other arrays",
      "booleans",
      "all of the above",
    ],
    correctAnswer: "all of the above",
  },
  {
    question:
      "String values must be enclosed within ____ when being assigned to variables.",
    answerChoices: ["commas", "curly brackets", "quotes", "parenthesis"],
    correctAnswer: "quotes",
  },
  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    answerChoices: [
      "JavaScript",
      "terminal / bash",
      "for loops",
      "console log",
    ],
    correctAnswer: "console log",
  },
];

// function startTimer() {
//   var counter = 75;

//   var intervalId = setInterval(function () {
//     console.log(counter);
//     counter--;
//     if (counter === 0) {
//       alert("Time is up!");
//       clearInterval(counter);
//       quesEl.classList.add("hidden");
//       finalScorePageEl.remove("hidden");
//     }
//   }, 1000);
// }

var currentQuestionIndex = 0;

function evaluate(event) {
  console.log(event.target.value);
  if (event.target.value == questions[currentQuestionIndex].correctAnswer) {
    messageEl.textContent = "Correct!";
  } else {
    messageEl.textContent = "Wrong!";
    //take away time
  }

  currentQuestionIndex++;
  var advanceButton = document.createElement("button");
  advanceButton.textContent = "Click to advance to the next question";
  messageEl.append(advanceButton);
  
  if (currentQuestionIndex > 4) {
    quesEl.classList.add("hidden");
    ansEl.classList.add("hidden");
    finalScorePageEl.classlist.remove("hidden");
    // finalScoreOutputEl.textContent = counter;
  }
  
  advanceButton.addEventListener("click", displayQuestion);
}

function answers() {
  var answers = questions[currentQuestionIndex].answerChoices;
  console.log(answers);
  for (var i = 0; i < questions[currentQuestionIndex].answerChoices.length; i++) 
  {
    var answerButton = document.createElement("button");
    answerButton.textContent =
      i + 1 + ". " + questions[currentQuestionIndex].answerChoices[i];
    answerButton.setAttribute(
      "value",
      questions[currentQuestionIndex].answerChoices[i]
    );
    answerElement.append(answerButton);
    answerButton.onclick = evaluate;
  } 
}


function displayQuestion() {
  console.log(currentQuestionIndex);

  
    answerElement.innerHTML = "";
    messageEl.textContent = "";
    questionElement.innerHTML = "";
    questionElement.innerHTML = questions[currentQuestionIndex].question;
    answers();
  
}

function startQuiz() {
  alert("start button activated");
  // startTimer();
  instructionsSec.classList.add("hidden");
  questionsSec.classList.remove("hidden");
  displayQuestion();
}

startBtn.addEventListener("click", startQuiz);
