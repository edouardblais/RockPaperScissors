

function ComputerPlay() {
    const choices = ["rock", "paper", "scissors"];

    let computerchoice = choices[Math.floor(Math.random()*choices.length)];
    
    return computerchoice;
}

function PlayRound(playerSelection, computerSelection) {

    const container = document.querySelector('#container');
    const result = document.createElement('div');
    result.classList.add('result');


    if (playerSelection === computerSelection) {
        result.textContent="It's a tie!";
        container.appendChild(result);
        return 0;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        result.textContent="You win! Rock beats scissors!";
        container.appendChild(result);
        return 1;
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        result.textContent="You lose! Paper beats rock!";
        container.appendChild(result);
        return 2;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        result.textContent="You win! Paper beats rock!";
        container.appendChild(result);
        return 1;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        result.textContent="You Lose! Scissors beat paper!";
        return 2;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        result.textContent="You lose! Rock beats scissors!";
        container.appendChild(result);
        return 2;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        result.textContent="You win! Scissors beat paper!";
        container.appendChild(result);
        return 1;
    } else {
        result.textContent="Oups! I think you mispelled your choice!";
        container.appendChild(result);
        return 0;
    };

}

function game() {

    let YourScore = 0;
    let ComputerScore = 0;
    let Ties = 0;

    const btnrock = document.querySelector('#rock');
    const btnpaper = document.querySelector('#paper');
    const btnscissors = document.querySelector('#scissors');

    btnrock.addEventListener('click', (event) => {
        let x = PlayRound("rock", ComputerPlay());
        if (x==1) {
            YourScore++;
        } else if (x==2) {
            ComputerScore++
        } else if (x==0) {
            Ties++
        };
        
        if (YourScore == 5) alert ("You win the game!");
        if (ComputerScore==5) alert ("You lose the game!");
    });

    btnpaper.addEventListener('click', (event) => {
        let x = PlayRound("paper", ComputerPlay());
        if (x==1) {
            YourScore++;
        } else if (x==2) {
            ComputerScore++
        } else if (x==0) {
            Ties++
        };
        
        if (YourScore == 5) alert ("You win the game!");
        if (ComputerScore==5) alert ("You lose the game!");
    });

    btnscissors.addEventListener('click', (event) => {
        let x = PlayRound("scissors", ComputerPlay());
        if (x==1) {
            YourScore++;
        } else if (x==2) {
            ComputerScore++
        } else if (x==0) {
            Ties++
        };
        
        if (YourScore == 5) alert ("You win the game!");
        if (ComputerScore==5) alert ("You lose the game!");
    });
        
};

game();





