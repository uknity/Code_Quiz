// pulls in elements from HTML and creates a variable in JS
var mainSec = document.querySelector("main");
var instructionsSec = document.querySelector(".instructions");
var questionsSec = document.querySelector("#questions-section");
var quesEl = document.querySelector("#ques");
var ansEl = document.querySelector("#ans");
var startBtn = document.querySelector("#start");
var quizEl = document.querySelector("#quiz");
var pagesEl = document.querySelector(".pages");
var messageEl = document.querySelector("#message");
var finalScoreSec = document.getElementById("finalScorePage");
var initialsInput = document.getElementById("initials");
var highScoresSec = document.getElementById("highScores");
var highScoresInitialsEl = document.querySelector(".highScoresInitials");
var submitBut = document.getElementById("submit");
var answerElement = document.getElementById("ans");
var questionElement = document.getElementById("ques");
var listOfHighScoresEl = document.getElementById("listOfHighScores");
var initialsInput = document.getElementById("initials");
var finalScoreEl = document.getElementById("finalScore");
var timerOutputEl = document.getElementById("timerOutput");
var goBackBtnEl = document.getElementById("goBackBtn");
var clearScoresButtonEl = document.getElementById("clearScoresButton");

// JavaScript-created variables

// creates an array of objects for the questions and answers
var questions = [{
    question: "Commonly used data types DO NOT include:",
    answerChoices: ["strings", "booleans", "alerts", "numbers"],
    correctAnswer: "alerts",
  },
  {
    question: "The condition in an if / else statement is enclosed within _____.",
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
    question: "String values must be enclosed within ____ when being assigned to variables.",
    answerChoices: ["commas", "curly brackets", "quotes", "parenthesis"],
    correctAnswer: "quotes",
  },
  {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    answerChoices: [
      "JavaScript",
      "terminal / bash",
      "for loops",
      "console log",
    ],
    correctAnswer: "console log",
  },
];
var counter = 75;
var intervalId;
var currentQuestionIndex = 0;

//clear score button clears the high scores on the screen and in local storage
clearScoresButtonEl.addEventListener("click", function () {
  localStorage.clear();
  listOfHighScoresEl.innerHTML="";
})
//go back button allows the user to go back to the previous screen
goBackBtnEl.addEventListener("click", function() {
  finalScoreSec.classList.remove("hidden");
  highScoresSec.classList.add("hidden");
})

// submit button allows user to enter initials; they are stored in local storage and added to existing keys
submitBut.addEventListener("click", function (event) {
  var winners = JSON.parse(localStorage.getItem("winners")) || [];
  event.preventDefault();
  console.log(event);
  var ii = initialsInput.value;

  if (ii === "") {
    alert("Initials cannot be blank");
  }
  winners.push({
    initials: ii,
    score: counter,
  });
  localStorage.setItem("winners", JSON.stringify(winners));
  finalScoreSec.classList.add("hidden");
  highScoresSec.classList.remove("hidden");
  createHighScoresList();
});
// function to create the high scores list from the array of winners & their scores
function createHighScoresList() {
  var winners = JSON.parse(localStorage.getItem("winners")) || [];
  console.log(winners);
  console.log(winners[0]);
  for (i = 0; i < winners.length; i++) {
    var listItem = document.createElement("div");
    console.log(winners[i].initials + " " + winners[i].score);
    listItem = winners[i].initials + " " + winners[i].score + " ";
    console.log(listItem);
    listOfHighScoresEl.append(listItem);
    i++;
  }
}
// function to start the time when the user clicks start; timer output displays on the screen; if counter runs out, user is alerted, the clock is reset, and the score becomes 0
function startTimer() {
  intervalId = setInterval(function () {
    console.log(counter);
    timerOutputEl.textContent = counter;
    counter--;
    if (counter === 0) {
      alert("Time is up!");
      clearInterval(intervalId);
      questionsSec.classList.add("hidden");
      finalScoreSec.classList.remove("hidden");
      var finalScoreOutput = document.createElement("span");
      finalScoreOutput = counter;
      finalScoreEl.append(finalScoreOutput);
    }
  }, 1000);
}

//function loops through the questions array and pulls the answer choices for each question and displays them on buttons 
function answers() {
  var answers = questions[currentQuestionIndex].answerChoices;
  console.log(answers);
  for (
    var i = 0; i < questions[currentQuestionIndex].answerChoices.length; i++
  ) {
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
//function displays the questions 
function displayQuestion() {
  console.log(currentQuestionIndex);

  if (currentQuestionIndex > 4) {
    clearInterval(intervalId);
    questionsSec.classList.add("hidden");
    finalScoreSec.classList.remove("hidden");
    console.log(counter);
    var finalScoreOutput = document.createElement("span");
    finalScoreOutput = counter;
    finalScoreEl.append(finalScoreOutput);
  } else {
    answerElement.innerHTML = "";
    messageEl.textContent = "";
    questionElement.innerHTML = "";
    questionElement.innerHTML = questions[currentQuestionIndex].question;
    answers();
  }
}
//function evaluates whether the user clicked the correct or incorrect button and provides a message.  If user gets the wrong answer, the counter subtracts 10 seconds.
function evaluate(event) {
  console.log(event.target.value);

  if (event.target.value == questions[currentQuestionIndex].correctAnswer) {
    messageEl.textContent = "Correct!";
  } else {
    messageEl.textContent = "Wrong!";
    counter = counter - 10;
  }

  currentQuestionIndex++;

  var advanceButton = document.createElement("button");
  advanceButton.textContent = "Click to advance to the next question";
  messageEl.append(advanceButton);

  advanceButton.addEventListener("click", displayQuestion);
}
//function starts the quiz, hiding the instructions sections and calling the displayQuestion function
function startQuiz() {
  startTimer();
  instructionsSec.classList.add("hidden");
  questionsSec.classList.remove("hidden");
  displayQuestion();
}
//start button activates the game
startBtn.addEventListener("click", startQuiz);