const linkedFile = 'JS file linked!';
const startGame = document.getElementById('startGame');
const welcomeScreen = document.getElementById('welcome');
const questionScreen = document.getElementById('questions');
const finishedScreen = document.getElementById('finished');
const timeCount = document.getElementById('timeCount');
const answerBoxes = document.getElementById('answers');
const feedbackEL = document.getElementById('feedback');

// question and answer blocks
const question = document.getElementById('question');
const answerA = document.getElementById('A');
const answerB = document.getElementById('B');
const answerC = document.getElementById('C');
const answerD = document.getElementById('D');

let ansIndex = 0;
let queAns = null;
let score = 0;

// lets dev know that js file is linked to index
console.log(linkedFile);

const question1 = {
  que: "What type of variable would you use for an 'if' condition?",
  ans: ['Number', 'String', 'Undefined', 'Boolean'],
  correctAns: 3,
};

const question2 = {
  que: 'What does an event listener do?',
  ans: ['Triggers a function upon an event', 'Triggers an event upon a function', 'Return the program', "Set's local storage"],
  correctAns: 1,
};

const question3 = {
  que: 'What is not a built in event?',
  ans: ['Click', 'Change', 'Keydown', 'Keychange'],
  correctAns: 3,
};

const allQuestions = [question1, question2, question3];

function start() {
  console.log('Quiz has started!');
  welcomeScreen.setAttribute('class', 'hide');
  questionScreen.classList.remove('hide');
  reset();
  timer();
  questions();
}

function reset() {
  console.log('Questions reset!');
  question.textContent = '';
  answerA.textContent = '';
  answerB.textContent = '';
  answerC.textContent = '';
  answerD.textContent = '';
}

function timer() {
  console.log('Timer starter!');
  timer = 10;
  timeCount.textContent = timer;
  setInterval(function () {
    if (timer > 0 && welcomeScreen.getAttribute('class') === 'hide') {
      timer--;
      timeCount.textContent = timer;
    } else {
      resetTime();
      endQuiz();
      return;
    }
  }, 1000);
}

function resetTime() {
  timeCount.textContent = '--';
}

function randomQuestion() {
  if (ansIndex < allQuestions.length) {
    ansIndex++;
  } else {
    endQuiz();
  }
}

function questions() {
  console.log('Questions started!');
  let abc = parseInt(randomQuestion());
  question.textContent = allQuestions[ansIndex].que;
  answerA.textContent = 'A) ' + allQuestions[ansIndex].ans[0];
  answerB.textContent = 'B) ' + allQuestions[ansIndex].ans[1];
  answerC.textContent = 'C) ' + allQuestions[ansIndex].ans[2];
  answerD.textContent = 'D) ' + allQuestions[ansIndex].ans[3];
  queAns = allQuestions[ansIndex].correctAns;
  console.log(queAns);
  randomQuestion();
}

function endQuiz() {
  console.log('Quiz has ended!');
  questionScreen.setAttribute('class', 'hide');
  finishedScreen.classList.remove('hide');
}

answerBoxes.addEventListener('click', function (e) {
  if (e.target.tagName.toLowerCase() === 'span') {
    if (e.target.dataset.index === 'queAns') {
      score++;
      feedbackEL.textContent = 'Correct!';
    } else {
      score--;
      feedbackEL.textContent = 'Wrong, try again.';
    }
  }
});

startGame.addEventListener('click', start);
