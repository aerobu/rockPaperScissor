// computer's choice
function getComputerChoice() {
    let choice = Math.random()*10;
    console.log (choice);
    if (choice < 3) {
        return "rock";
    }
    else if (choice >=3 && choice <6) {
        return "paper";
    }
    else if (choice >6) {
        return "scissor";
    }
}
computerSelection = getComputerChoice();
console.log("Computer selected: " + computerSelection);

// player's selection
playerSelection = prompt("Enter your selection");
playerSelection = playerSelection.toLowerCase();
console.log ("You selected: " + playerSelection);

// play game
function playGame () {
    if (computerSelection === "rock") {
        if (playerSelection === "rock") {
            console.log ("DRAW!");
        }
        else if (playerSelection === "paper") {
            console.log ("YOU WIN!");
        }
        else if (playerSelection === "scissor") {
            console.log ("COMPUTER WINS!");
        }
    }
    else if (computerSelection === "paper") {
        if (playerSelection === "rock") {
            console.log ("COMPUTER WINS!");
        }
        else if (playerSelection === "paper") {
            console.log ("DRAW!");
        }
        else if (playerSelection === "scissor") {
            console.log ("YOU WIN!");
        }
    }
    else if (computerSelection === "scissor") {
        if (playerSelection === "rock") {
            console.log ("YOU WIN!");
        }
        else if (playerSelection === "paper") {
            console.log ("COMPUTER WINS!");
        }
        else if (playerSelection === "scissor") {
            console.log ("DRAW!");
        }
    }
    else {
        console.log ("Something wrong happened");
    }
}

playGame();