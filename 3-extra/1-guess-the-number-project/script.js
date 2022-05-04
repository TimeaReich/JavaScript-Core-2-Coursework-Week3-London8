function generateRandomNum() {
  return Math.floor(Math.random() * 100 + 1);
}

let randomNumber = generateRandomNum();
console.log(randomNumber);

let tries = 0;

function guessNumber() {
  tries++;
  console.log(tries);
  if (tries === 7) {
    document.querySelector(
      ".final-output"
    ).innerHTML = `You Lose, the number was ${randomNumber}`;
    return;
  }

  let guess = document.querySelector(".inputs-Values").value;
  if (guess > 100 || guess < 0 || guess === "") {
    document.querySelector(".final-output").innerHTML =
      "Please enter a number between 1 and 100";
  }

  document.querySelector(
    ".Tries-output"
  ).innerHTML = `Number of tries: ${tries}`;

  if (guess > randomNumber) {
    document.querySelector(".final-output").innerHTML =
      "Number is too high, try again";
  } else if (guess < randomNumber) {
    document.querySelector(".final-output").innerHTML =
      "Number is too low, try again";
  } else {
    document.querySelector(
      ".final-output"
    ).innerHTML = `Guess is correct. You win!`;
  }

  //If the user inputs a bad input ie 0, empty string, number greater that 100, number less than zero Print "Please enter a number between 1 and 100"

  //If the users guess is higher than the random number print Number is too high, try again (hint use .final-out class to print)

  //If the users guess is lower than the random number print Number is too low, try again  (hint use .final-out class to print)

  //If the user has guessed the random number correctly print out the randomNumber with a message "Guess is correct. You win!"
}

// For this task we will be making a "New Game" button function which will reset our game,
// Once the user clicks on this button the user will have new random number to guess
// 1. Reset the values inside the body of the function
// 2. Attach our new game button using an event listener to the .btnNewGame button
function newGame() {
  tries = 0;
  randomNumber = generateRandomNum();
  console.log(tries);
  document.querySelector(".Tries-output").innerHTML = "";
  document.querySelector(".inputs-Values").value = "";
  document.querySelector(".final-output").innerHTML =
    "Guess a number between 1 and 100";
}

//keyboard exception
function keyBoardEvents(e) {
  if (e.keyCode === 13) {
    guessNumber();
  }
}

document.querySelector(".btnGuess").addEventListener("click", guessNumber);
document.addEventListener("keypress", keyBoardEvents);
document.querySelector(".btnNewGame").addEventListener("click", newGame);
