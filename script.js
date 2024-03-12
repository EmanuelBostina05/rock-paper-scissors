function getComputerChoice() {
    
    //Get a random number between 1 and 3
    var randomNumber = Math.floor(Math.random() * (4 - 1) + 1);

    //The variable where the computer choice is stored
    var computerChoice;

    switch(randomNumber) {
        case 1: 
            computerChoice = "rock";
            break;
        case 2:
            computerChoice = "paper";
            break;
        case 3:
            computerChoice = "scissors";
            break;
        default:
            alert("Error occured");
    }

    return computerChoice;
}

function playRound(playerSelection, computerSelection) {

    //player picks rock 
    if(playerSelection === "rock" && computerSelection === "scissors") {
        return "You win!"
    }

    if(playerSelection === "rock" && computerSelection === "paper") {
        return "Computer wins!";
    }

    //player picks paper
    if(playerSelection === "paper" && computerSelection === "rock") {
        return "You win!"
    }

    if(playerSelection === "paper" && computerSelection === "scissors") {
        return "Computer wins!";
    }

    //player picks scissors
    if(playerSelection === "scissors" && computerSelection === "paper") {
        return "You win!"
    }
    if(playerSelection === "scissors" && computerSelection === "rock") {
        return "Computer wins!";
    }
}

//Main kind of func. 
function playGame() {
    alert("Play a round of rock, paper, scissors. Who gets 5 wins first, wins");
    let computerWins = 0, playerWins = 0;

    while(computerWins < 5 || playerWins < 5) {

        //As far as I remember this is broken
        let round = 1;
        alert("Round: " + round);
        round++;

        let selection = prompt("Please enter 'rock', 'paper' or 'scissors': ");

        while(selection.toLowerCase() !== "rock" && selection.toLowerCase() !== "paper" 
            && selection.toLocaleLowerCase() !== "scissors") 
        {
            selection = prompt("Please enter a valid choice between 'rock', 'paper' or 'scissors' ");
        }
        
        const compChoice = getComputerChoice();

        alert("Your choice: " + selection + " | Computer choice: " + compChoice)
        alert(playRound(selection, compChoice));

        //if computer wins, increment...
        
    }

    if(computerWins === 5) {
        alert("Computer wins the game! Congrats!")
    } else if (playerWins === 5) {
        alert("Player wins the game! Congrats!")
    }

}

playGame();