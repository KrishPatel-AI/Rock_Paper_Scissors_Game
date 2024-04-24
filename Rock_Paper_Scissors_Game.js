// Rock-Paper-Scissor:

// Declaration:

let choices = document.querySelectorAll(".choice");

const msgBox = document.querySelector(".messages");

const msgContainer = document.querySelector(".messagesec");

const userScoreDisplay = document.querySelector("#userscore");

const computerScoreDisplay = document.querySelector("#computerscore");

let userScore = 0;

let computerScore = 0;

// Computer Choice Generator Funciton:

const geneComputerChoice = () => {
  const options = ["rock", "paper", "scissor"];

  compChoiceIdx = Math.floor(Math.random() * 3);

  return options[compChoiceIdx];
};

// User Choice Function:

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");

    playGame(userChoice);
  });
});

// Result Declaration Function:

const playGame = (userChoice) => {
  const compChoice = geneComputerChoice();

  console.log("user choice = ", userChoice);

  console.log("comp choice = ", compChoice);

  if (userChoice === compChoice) {
    msgBox.innerHTML = `DRAW! You both select ${compChoice.toUpperCase()}`;

    msgContainer.style.backgroundColor = "black";

    console.log(msgBox.innerHTML);
  } else {
    let userWin = true;

    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissor" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }

    msgBox.innerHTML = userWin
      ? `You Win! ${userChoice.toUpperCase()} beats ${compChoice.toUpperCase()}`
      : `You Lost! ${compChoice.toUpperCase()} beats ${userChoice.toUpperCase()}`;

    msgBoxColorandScore(userWin);
  }
};

// Message Box Color and Score Function:

const msgBoxColorandScore = (userWin) => {
  if (userWin === true) {
    userScore++;

    userScoreDisplay.innerHTML = `${userScore}`;

    msgContainer.style.backgroundColor = "green";
  } else {
    computerScore++;

    computerScoreDisplay.innerHTML = `${computerScore}`;

    msgContainer.style.backgroundColor = "red";
  }
};
