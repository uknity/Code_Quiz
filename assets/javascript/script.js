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

var initialsInput = document.getElementById("initials");



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

function createHighScoresList() {
  var winners = JSON.parse(localStorage.getItem("winners")) || [];
  console.log(winners);
  console.log(winners[0]);
  // var listHtml = "";
  for (i = 0; i < winners.length; i++) {
    var listItem = document.createElement("div");
    console.log(winners[i].initials + " " + winners[i].score);
    listItem = winners[i].initials + " " + winners[i].score + " ";
    console.log(listItem);
    listOfHighScoresEl.append(listItem);
    i++;
    
  }



  // createList();


  // function createList() {
  //   listHtml += "<li>" + listItem + "</li>";

  //   listOfHighScoresEl.innerHTML = listHTML;
  //   console.log(listHTML);
  //   i++;
  // }






}





var finalScoreEl = document.getElementById("finalScore");

var timerOutputEl = document.getElementById("timerOutput");

var counter = 75;
var intervalId;

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
var currentQuestionIndex = 0;

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

  advanceButton.addEventListener("click", displayQuestion);
}

// function evalEnd() {
//   console.log(currentQuestionIndex);

//   // if (currentQuestionIndex = 4) {
//     // quesEl.classList.add("hidden");
//     // ansEl.classList.add("hidden");
//     // finalScorePageEl.classlist.remove("hidden");
//     // finalScoreOutputEl.textContent = counter;
//   // }
//   // else {
//     displayQuestion;
//   // }
// }

function startQuiz() {
  startTimer();
  instructionsSec.classList.add("hidden");
  questionsSec.classList.remove("hidden");
  displayQuestion();
}

startBtn.addEventListener("click", startQuiz);