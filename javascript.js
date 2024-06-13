let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const minCeiled = Math.ceil(1);
    const maxFloored = Math.floor(3);
    let computerRoll = Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
    String.valueOf(computerRoll);
    if (computerRoll == 1) {
        computerRoll = "rock";
    } else if (computerRoll == 2) {
        computerRoll = "paper";
    } else if (computerRoll == 3) {
        computerRoll = "scissors";
   }
   return computerRoll;
}

function getHumanChoice() {
    const userInput = prompt("Enter 'Rock, Paper, or Scissors'");
    return userInput;
}

function playRound(computerSelection, humanSelection) {
    const humanSelectionSanitized = humanSelection.toLowerCase();
    if (humanSelectionSanitized == computerSelection) {
        console.log("Both players have chosen " + computerSelection + "! It's a tie!");
        return;
    }
    if (humanSelectionSanitized == "rock") {
        if (computerSelection == "paper") {
            console.log("You lose! " + computerSelection + " beats " + humanSelection);
            computerScore++;
        } else {
            console.log("You win! " + humanSelection + " beats " + computerSelection);
            humanScore++;
        }
    }
    if (humanSelectionSanitized == "paper") {
        if (computerSelection == "scissors") {
            console.log("You lose! " + computerSelection + " beats " + humanSelection);
            computerScore++;
        } else {
            console.log("You win! " + humanSelection + " beats " + computerSelection);
            humanScore++;
        }
    }
    if (humanSelection == "scissors") {
        if (computerSelection == "rock") {
            console.log("You lose! " + computerSelection + " beats " + humanSelection);
            computerScore++;
        } else {
            console.log("You win! " + humanSelection + " beats " + computerSelection);
            humanScore++;
        }
    }
}

const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice();

playRound(computerSelection, humanSelection);