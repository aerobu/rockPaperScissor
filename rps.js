// computer's choice
function getComputerChoice() {
    let choice = Math.random()*10;
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

// play game
function playGame () {
    // increase round number
    roundNum++;

    // if round number > 1, remove previous html elements
    if (roundNum > 1) {
        let body = document.querySelector('body');
        let selectionRem = document.querySelector('.selection');
        body.removeChild(selectionRem);
    }

    // computer selection
    let computerSelection = getComputerChoice();

    // create a div element for displaying selections
    let selectionDiv = document.createElement('div');
    selectionDiv.className = 'selection';
    document.body.appendChild(selectionDiv);

    // choose the selection class div element to store choices
    let selection = document.querySelector('.selection');

    // append round number info
    let roundNumberText = document.createElement('h1');
    roundNumberText.textContent = "Round " + roundNum;
    selection.appendChild(roundNumberText);

    // append computer selection
    let computerSelectionText = document.createElement('h2');
    computerSelectionText.textContent = "Computer chose: " + computerSelection;
    selection.appendChild(computerSelectionText);

    // append player selection
    let playerSelectionText = document.createElement('h2');
    playerSelectionText.textContent = "You chose: " + playerSelection;
    selection.appendChild(playerSelectionText);

    // append winner of round
    let roundWinner = document.createElement('h1');

    // append winner of round
    let score = document.createElement('h1');
    
    if (computerSelection === "rock") {
        if (playerSelection === "rock") {
            roundWinnerFunction ("draw");
        }
        else if (playerSelection === "paper") {
            roundWinnerFunction ("player");
        }
        else if (playerSelection === "scissor") {
            roundWinnerFunction ("computer");
        }
    }
    else if (computerSelection === "paper") {
        if (playerSelection === "rock") {
            roundWinnerFunction ("computer");
        }
        else if (playerSelection === "paper") {
            roundWinnerFunction ("draw");
        }
        else if (playerSelection === "scissor") {
            roundWinnerFunction ("player");
        }
    }
    else if (computerSelection === "scissor") {
        if (playerSelection === "rock") {
            roundWinnerFunction ("player");
        }
        else if (playerSelection === "paper") {
            roundWinnerFunction ("computer");
        }
        else if (playerSelection === "scissor") {
            roundWinnerFunction ("draw");
        }
    }
    else {
        alert ("Something wrong happened");
    }

    function roundWinnerFunction (winner) {
        if (winner === "computer") {
            roundWinner.textContent = "Computer won!";
            selection.appendChild(roundWinner);
            computerScore++;
        }
        else if (winner === "player") {
            roundWinner.textContent = "Player won!";
            selection.appendChild(roundWinner);
            playerScore++;
        }
        else {
            roundWinner.textContent = "DRAW!";
            selection.appendChild(roundWinner);
        }
    }
    score.textContent = "Computer Score: " + computerScore + " Player Score: " + playerScore;
    selection.appendChild(score);

    //Check if players have reached a score of 5! If so, declare winner
    if (playerScore === 5 || computerScore === 5) {
        let announcement = document.createElement('h1');
        if (playerScore === 5) {
            announcement.textContent = "Player wins!";
        }
        else {
            announcement.textContent = "Computer wins!";
        }
        selection.appendChild (announcement);
        roundNum = 0;
        playerScore = 0;
        computerScore = 0;
    }
}

// player's selection
/*playerSelection = prompt("Enter your selection");
playerSelection = playerSelection.toLowerCase();
console.log ("You selected: " + playerSelection);*/
let playerSelection;
let roundNum = 0;
let computerScore = 0;
let playerScore = 0;

const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorButton = document.querySelector(".scissor");
const buttons = document.querySelectorAll('button');
buttons.forEach((button)=>{
    button.addEventListener('click',(e)=>{
    playerSelection = button.textContent.toLowerCase();
    console.log("You chose: " + playerSelection);
    playGame();
    });
});