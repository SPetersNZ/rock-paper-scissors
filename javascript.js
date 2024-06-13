let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const minCeiled = Math.ceil(1);
    const maxFloored = Math.floor(3);
    let computerChoice = Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
    String.valueOf(computerChoice);
    if (computerChoice == 1) {
        computerChoice = "rock";
    } else if (computerChoice == 2) {
        computerChoice = "paper";
    } else if (computerChoice == 3) {
        computerChoice = "scissors";
   }
   return computerChoice;
}

function getHumanChoice() {
    const humanChoice = prompt("Enter 'Rock, Paper, or Scissors'");
    return humanChoice;
}

function playGame(numOfRounds) {
    for (let i = 0; i < numOfRounds; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(computerSelection, humanSelection);
    }
    if (humanScore > computerScore) {
        console.log("Congrats! You win the game with a score of " + humanScore + " to " + computerScore);
    } else {
        console.log("You lost the game! The score was " + computerScore + " to " + humanScore);
    }
}

function playRound(computerSelection, humanSelection) {
    const humanSelectionSanitized = humanSelection.toLowerCase();
    if (humanSelectionSanitized == computerSelection) {
        console.log("Both players have chosen " + computerSelection + "! It's a tie!");
        return
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
    return humanScore;
    return computerScore;
}

playGame(5);