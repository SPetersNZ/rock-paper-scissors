let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    //Return min possible number to map to rock, paper, scissors
    const minRoll = Math.ceil(1);
    //Return max possible number to map to rock, paper, scissors
    const maxRoll = Math.floor(3);
    let computerChoice = Math.floor(Math.random() 
    * (maxRoll - minRoll + 1) + minRoll);
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
}

function playRound(computerSelection, humanSelection) {
    const humanSelectionSanitized = humanSelection.toLowerCase();
    if (humanSelectionSanitized == computerSelection) {
        console.log("Both players have chosen " + 
        computerSelection + "! It's a tie!");
    } else if (humanSelectionSanitized == "rock") {
        if (computerSelection == "paper") {
            console.log("You lose! " + computerSelection + " beats " + 
            humanSelection);
            computerScore++;
        } else {
            console.log("You win! " + humanSelection + " beats " + 
            computerSelection);
            humanScore++;
        }
    } else if (humanSelectionSanitized == "paper") {
        if (computerSelection == "scissors") {
            console.log("You lose! " + computerSelection + " beats " + 
            humanSelection);
            computerScore++;
        } else {
            console.log("You win! " + humanSelection + " beats " + 
            computerSelection);
            humanScore++;
        }
    } else if (humanSelectionSanitized == "scissors") {
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
    return humanScore, computerScore;
}

playGame(5);