let randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector(`#submit`);
const userInput = document.querySelector(`#guessField`);

const guessSlot = document.querySelector(`.guesses`);
const remaining = document.querySelector(`.lastResult`);
const lowOrHigh = document.querySelector(`.low_or_high`);
const startOver = document.querySelector(`.result`);

const para = document.createElement(`para`);

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert(`please enter a valid number`);
  } else if (guess < 1) {
    alert(`please enter a number more than 0`);
  } else if (guess > 100) {
    alert(`please enter a number less than 100`);
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game over, random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`you guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`oops! your number is too low`);
    endGame();
  } else if (guess > randomNumber) {
    displayMessage(`oops! your number is too high`);
    endGame();
  }
}

function displayGuess(guess) {
  userInput.value = "";
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = "";

  para.classList.add("buttton");
  para.innerHTML = `<h2 id="newGame">Start new game</h2>`;
  startOver.append(para);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector(`#newGame`);
  newGameButton.addEventListener("click", function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = ``;
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute(`disabled`);
    startOver.removeChild(para);

    playGame = true;
  });
}
