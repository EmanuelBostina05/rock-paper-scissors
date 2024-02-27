function getComputerChoice() {
    
    //Get a random number between 1 and 3
    var randomNumber = Math.floor(Math.random() * (4 - 1) + 1);

    //The variable where the computer choice is stored
    var computerChoice;

    switch(randomNumber) {
        case 1: 
            computerChoice = "Rock".toLowerCase();
            break;
        case 2:
            computerChoice = "Paper".toLowerCase();
            break;
        case 3:
            computerChoice = "Scissors".toLowerCase();
            break;
        default:
            alert("Error occured");
    }

    return computerChoice;
}