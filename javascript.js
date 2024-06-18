const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const buttons = document.querySelectorAll("button");

//Event listener for starting a game
buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
        const humanFirstChoice = e.target.id;
        playGame(5, humanFirstChoice);
    });
});

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
};

//Event listener for continuing to play the game once started
function getHumanChoice() {
    rockButton.addEventListener("click", function (e) {
        humanSelection = e.target.id;
    });
    paperButton.addEventListener("click", function (e) {
        humanSelection = e.target.id;
    });
    scissorsButton.addEventListener("click", function (e) {
        humanSelection = e.target.id;
    });
    return humanSelection;
};

function playGame(numOfRounds, humanFirstChoice) {
    if (typeof i === 'undefined') {
        const humanSelection = humanFirstChoice;
        const computerSelection = getComputerChoice();
        playRound(computerSelection, humanSelection);
        let i = 1;
        console.log(i);
        //i ALWAYS EQUALS 1 SO THIS LOOP KEEPS GOING AROUND AND IT DOESN'T
        //MOVE TO NEXT LOOP
        //NEED TO NEST SCORE COMPARISONS WITHIN LAST LOOP?
    } else {
        for (let i = 1; i < numOfRounds; i++) {
            const humanSelection = getHumanChoice();
            const computerSelection = getComputerChoice();
            playRound(computerSelection, humanSelection);
        }
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
};

function playRound(computerSelection, humanSelection) {
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
            console.log("You win! " + humanSelection + " beats " + 
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
    return humanScore, computerScore;
};