var mainSec = document.querySelector("main");

var instructionsSec = document.querySelector(".instructions");

var questionsSec = document.querySelector("#questions-section");

var quesEl = document.querySelector("#ques");
var ansEl = document.querySelector("#ans");

var startBtn = document.querySelector("#start");

var quizEl = document.querySelector("#quiz");

var pagesEl = document.querySelector(".pages");

var message = document.querySelector("message");

var finalScorePageEl = document.querySelector(".finalScorePage");

var finalScoreOutputEl = document.querySelector(".finalScoreOutput");

var initialsInput = document.querySelector(".initials");

var highScoresPage = document.querySelector(".highScores");

var highScoresInitialsEl = document.querySelector(".highScoresInitials");

var currentQuestionIndex = 0;

var score = 0;

// function nextQuestion (currentQuestionIndex) {
//     for (i=0); i < 5; i++) {
//         var displayQuestion = document.createElement("questions[i]");
//         displayQuestion[0]
//     }
// }

var questions = [
  {
    question: "Commonly used data types DO NOT include:",
    answerChoices: ["strings", "booleans", "alerts", "numbers"],
    correctAnswer: "alerts",
  },
  {
    question:
      "The condition in an if / else statement is enclosed within _____.",
    answerChoices: {
      1: "1. quotes",
      2: "2. curly brackets",
      3: "3. parenthesis",
      4: "4. square brackets",
    },
    correctAnswer: 3,
  },
  {
    question: "Arrays in JavaScript can be used to store ____.",
    answerChoices: {
      1: "1. numbers and strings",
      2: "2. other arrays",
      3: "3. booleans",
      4: "4. all of the above",
    },
    correctAnswer: 4,
  },
  {
    question:
      "String values must be enclosed within ____ when being assigned to variables.",
    answerChoices: {
      1: "1. commas",
      2: "2. curly brackets",
      3: "3. quotes",
      4: "4. parenthesis",
    },
    correctAnswer: 3,
  },
  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    answerChoices: {
      1: "1. JavaScript",
      2: "2. terminal / bash",
      3: "3. for loops",
      4: "4. console log",
    },
    correctAnswer: 4,
  },
];

// function showNextQuestion() {

//     //clear out the last question
//     //load the next question
// }

// questionDiv.value = question1
// var one = 0;
// var question1 = questions[one];

function evaluate(event) {
  console.log(event.target.value);
  if (event.target.value == questions[0].correctAnswer) {
    document.getElementById("message").innerHTML = "Correct!";
  } else {
    document.getElementById("message").innerHTML = "Wrong!";
    //take away time
  }
}
// function answers(questions[]) {
//     for (var i = 0; i < questions[i].answerChoices.length; i++) {
//         var answerButton = document.createElement("button");
//         answerButton.textContent = i + 1 + ". " + questions[0].answerChoices[i];
//         answerButton.setAttribute("value", questions[0].answerChoices[i]);
//         answerElement.append(answerButton);
//         answerButton.onclick = evaluate;
//       }
// }

var answerElement = document.getElementById("ans");

function displayQuestion() {
  for (i = 0; i < questions.length; i++) {
    document.getElementById("ques").innerHTML = questions[i].question;
    function answers() {
        for (var i = 0; i < questions[i].answerChoices.length; i++) {
            var answerButton = document.createElement("button");
            answerButton.textContent = i + 1 + ". " + questions[0].answerChoices[i];
            answerButton.setAttribute("value", questions[0].answerChoices[i]);
            answerElement.append(answerButton);
            answerButton.onclick = evaluate;
          }
    };
    
  }

  //   document.getElementById("ans").innerHTML =
  //     questions[0].answerChoices.choice1 +
  //     questions[0].answerChoices.choice2 +
  //     questions[0].answerChoices.choice3 +
  //     questions[0].answerChoices.choice4;
  // ques1ans1.addEventListener("click", evaluate() {alert("click is working");});
}

function startQuiz() {
  alert("start button activated");
  instructionsSec.classList.add("hidden");
  questionsSec.classList.remove("hidden");
  displayQuestion();
}

startBtn.addEventListener("click", startQuiz);
