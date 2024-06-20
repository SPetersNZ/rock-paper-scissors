const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const restartButton = document.querySelector("#restartButton");
const buttons = document.querySelectorAll("button");
const endGameModal = document.getElementById("endGameModal");

rockButton.addEventListener("click", () => playRound("Rock"));
paperButton.addEventListener("click", () => playRound("Paper"));
scissorsButton.addEventListener("click", () => playRound("Scissors"));

//add listener for the close button on the end game modal

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    var computerChoice = "";
    let randomRoll = Math.floor(Math.random() * 4);
    if (randomRoll === 1) {
        computerChoice = "Rock";
    } else if (randomRoll === 2) {
        computerChoice = "Paper";
    } else {
        computerChoice = "Scissors";
   }
   return computerChoice;
};

function playRound(playerChoice) {
    const computerChoice = getComputerChoice();
    if (playerChoice == computerChoice) {
        document.getElementById("introTextHeading").innerText = "It's a tie!"
        document.getElementById("introTextBody").innerText =
        "Both players have chosen " + playerChoice;
    } else if (
            (playerChoice === "Rock") && (computerChoice === "Paper") ||
            (playerChoice === "Paper") && (computerChoice === "Scissors") ||
            (playerChoice === "Scissors") && (computerChoice === "Rock")
        ) {
            document.getElementById("introTextHeading").innerText = "You lose!";
            document.getElementById("introTextBody").innerText =
            computerChoice + " beats " + playerChoice;
            computerScore++;
    } else {
        document.getElementById("introTextHeading").innerText = "You win!";
        document.getElementById("introTextBody").innerText =
        playerChoice + " beats " + computerChoice;
        playerScore++;
    }
    updateGameScoreBoard(playerScore, computerScore, playerChoice,
    computerChoice);
    if ((playerScore === 5) || (computerScore === 5)) {
        endGameScoreBoard(playerScore, computerScore);
    }
    return;
};

function updateGameScoreBoard(playerScore, computerScore, playerChoice,
computerChoice) {
    document.getElementById("playerScore").innerText = playerScore;
    document.getElementById("computerScore").innerText = computerScore;
    document.getElementById("playerChoice").innerText = playerChoice;
    document.getElementById("computerChoice").innerText = computerChoice;
}

function endGameScoreBoard(playerScore, computerScore) {
    gameWinnerString = gameWinner(playerScore, computerScore);
    document.getElementById("winnerDisplay").innerText = gameWinnerString;
    restartButton.addEventListener("click", () => restartGame());
    endGameModal.style.display = "block";
}

function gameWinner(playerScore, computerScore) {
    let gameWinnerVar = "";
    if (playerScore > computerScore) {
        gameWinnerVar = "Congrats! You win the game with a score of " + playerScore + 
        " vs " + computerScore + " to the computer.";
    } else {
        gameWinnerVar = "You lost the game! Your score was " + playerScore + 
        " vs " + computerScore + " to the computer.";
    }
    let gameWinnerString = String(gameWinnerVar);
    return gameWinnerString;
};

function restartGame() {
    playerScore = 0;
    computerScore = 0;
    updateGameScoreBoard(playerScore, computerScore);
    document.getElementById("playerChoice").innerText = "?";
    document.getElementById("computerChoice").innerText = "?";
    document.getElementById("introTextHeading").innerText = "Make your first choice";
    document.getElementById("introTextBody").innerText = "First to 5 points wins" +
    " - Good luck!";
    endGameModal.style.display = "none";
}