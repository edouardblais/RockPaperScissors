const container = document.querySelector('#container');

const result = document.createElement('div');
result.classList.add('result');
container.appendChild(result);

const score = document.createElement('div');
score.classList.add('score');
container.appendChild(score);

const winner = document.createElement('div');
winner.classList.add('winner');
container.appendChild(winner);

function ComputerPlay() {
    const choices = ["rock", "paper", "scissors"];

    let computerchoice = choices[Math.floor(Math.random()*choices.length)];
    
    return computerchoice;
}

function PlayRound(playerSelection, computerSelection) {


    if (playerSelection === computerSelection) {
        result.textContent="It's a tie!";
        return 0;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        result.textContent="You win! Rock beats scissors!";
        return 1;
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        result.textContent="You lose! Paper beats rock!";
        return 2;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        result.textContent="You win! Paper beats rock!";
        return 1;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        result.textContent="You Lose! Scissors beat paper!";
        return 2;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        result.textContent="You lose! Rock beats scissors!";
        return 2;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        result.textContent="You win! Scissors beat paper!";
        return 1;
    } else {
        result.textContent="Oups! I think you mispelled your choice!";
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

        score.textContent=`Your score = ${YourScore} / Computer's score = ${ComputerScore}`;
        
        if (YourScore == 5) winner.textContent= "You win the game!";
        if (ComputerScore==5) winner.textContent="You lose the game!";
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

        score.textContent=`Your score = ${YourScore} / Computer's score = ${ComputerScore}`;
        
        if (YourScore == 5) winner.textContent= "You win the game!";
        if (ComputerScore==5) winner.textContent="You lose the game!";
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

        score.textContent=`Your score = ${YourScore} / Computer's score = ${ComputerScore}`;
        
        if (YourScore == 5) winner.textContent= "You win the game!";
        if (ComputerScore==5) winner.textContent="You lose the game!";
    });
        
};

game();





