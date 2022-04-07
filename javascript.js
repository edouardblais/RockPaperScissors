function ComputerPlay() {
    const choices = ["rock", "paper", "scissors"];

    let computerchoice = choices[Math.floor(Math.random()*choices.length)];
    
    return computerchoice;
}

function PlayRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        alert ("It's a tie!");
        return 0;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        alert ("You win! Rock beats scissors!");
        return 1;
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        alert ("You lose! Paper beats rock!");
        return 2;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        alert ("You win! Paper beats rock!");
        return 1;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        alert ("You Lose! Scissors beat paper!");
        return 2;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        alert ("You lose! Rock beats scissors!");
        return 2;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        alert ("You win! Scissors beat paper!");
        return 1;
    } else {
        alert ("Oups! I think you mispelled your choice!");
        return 0;
    }

}

function game() {

    let YourScore = 0;
    let ComputerScore = 0;
    let Ties = 0;
    
    for (let i=0; i<5; i++) {
        
        let computerSelection = ComputerPlay();

        let playerSelection = (prompt("Choose between rock, paper or scissors!")).toLowerCase();

        result = PlayRound(playerSelection, computerSelection);

        if (result === 1) {
            YourScore++;
        } else if (result === 2) {
            ComputerScore++;
        } else {
            Ties++;
        }
        
        alert (`Your score is ${YourScore}, the computer's score is ${ComputerScore} and the number of ties is ${Ties}!`);
    }

    if (YourScore > ComputerScore) {
        alert ("Congrats! You won the game!");
    } else if (YourScore < ComputerScore) {
        alert ("Too bad! You lost the game!");
    } else {
        alert ("It's a tie game!");
    }   
}

console.log(game());

