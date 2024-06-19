const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const buttons = document.querySelectorAll("button");

rockButton.addEventListener("click", () => playRound("rock"));
paperButton.addEventListener("click", () => playRound("paper"));
scissorsButton.addEventListener("click", () => playRound("scissors"));

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomRoll = Math.floor(Math.random() * 4);
    if (randomRoll === 1) {
        computerChoice = "rock";
    } else if (randomRoll === 2) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
   }
   return computerChoice;
};

function playRound(humanSelection) {
    const computerSelection = getComputerChoice();
    if (humanSelection == computerSelection) {
        console.log("Both players have chosen " + 
        computerSelection + "! It's a tie!");
    } else if (humanSelection == "rock") {
        if (computerSelection == "paper") {
            console.log("You lose! " + computerSelection + " beats " + 
            humanSelection);
            computerScore++;
        } else {
            console.log("You win! " + humanSelection + " beats " + 
            computerSelection);
            humanScore++;
        }
    } else if (humanSelection == "paper") {
        if (computerSelection == "scissors") {
            console.log("You lose! " + computerSelection + " beats " + 
            humanSelection);
            computerScore++;
        } else {
            console.log("You win!", humanSelection, " beats ", 
            computerSelection);
            humanScore++;
        }
    } else if (humanSelection == "scissors") {
        if (computerSelection == "rock") {
            console.log("You lose! " + computerSelection + " beats " + 
            humanSelection);
            computerScore++;
        } else {
            console.log("You win! " + humanSelection + " beats " + 
            computerSelection);
            humanScore++;
        }
    }
    console.log("Human score:", humanScore);
    console.log("Computer score:", computerScore);
    if ((humanScore === 5) || (computerScore === 5)) {
        let winner = gameWinner(humanScore, computerScore);
        return;
    }
};

function gameWinner(humanScore, computerScore) {
    if (humanScore == computerScore) {
        console.log("It's a tie for the game! The score was " + 
        humanScore + " each");
    } else if (humanScore > computerScore) {
        console.log("Congrats! You win the game with a score of " + 
        humanScore + " to " + computerScore);
    } else {
        console.log("You lost the game! The score was " + 
        computerScore + " to " + humanScore);
    }
    restartGame();
};

function restartGame() {
    humanScore = 0;
    computerScore = 0;
}