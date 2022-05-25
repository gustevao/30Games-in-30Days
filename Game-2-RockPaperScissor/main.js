const   playerScoreboard = document.getElementById("player"),
        computerScoreboard = document.getElementById("computer"),
        movesLeft = document.getElementById("moves-left"),
        result = document.getElementById("result"),
        moveChoice = document.getElementById("move"),
        reloadBtn = document.getElementById("reload");

let formula;
    playerScore = 0,
    computerScore = 0,
    moves = 0;

const playGame = () => {
    const   rockBtn = document.querySelector('.rock'),
            paperBtn = document.querySelector('.paper'),
            scissorBtn = document.querySelector('.scissor'),
            playerOptions = [rockBtn,paperBtn,scissorBtn],
            computerOptions = ['rock','paper','scissor'];

    playerOptions.forEach(o => {
            o.addEventListener('click', () => {
            moves++;
            movesLeft.innerText = `Moves Left: ${10-moves}`;
            
            const choiceNum = Math.floor(Math.random()*3)
            const computerChoice = computerOptions[choiceNum]; 

            checkWinner(o.innerText, computerChoice);

            if(moves === 10)
                gameOver(playerOptions, movesLeft)
        })
        
    })
}

const checkWinner = (player,computer) => {
    player = player.toLowerCase();
    computer = computer.toLowerCase();

    if(player === computer){
        result.textContent = 'Tie';
        console.log(`Player chooses: ${player}`)
        console.log(`Computer chooses: ${computer}`)
    }
    else if(player == 'rock'){
        if(computer == 'paper'){
            console.log(`Player chooses: ${player}`)
            console.log(`Computer chooses: ${computer}`)
            computerSum();
        }
        else {
            console.log(`Player chooses: ${player}`)
            console.log(`Computer chooses: ${computer}`)
            playerSum();
        }
    }
    else if(player == 'paper'){
        if(computer == 'scissor'){
            console.log(`Player chooses: ${player}`)
            console.log(`Computer chooses: ${computer}`)
            computerSum();
        }
        else{
            console.log(`Player chooses: ${player}`)
            console.log(`Computer chooses: ${computer}`)
            playerSum();
        }
    }
    else if(player == 'scissor'){
        if(computer == 'rock'){
            console.log(`Player chooses: ${player}`)
            console.log(`Computer chooses: ${computer}`)
            computerSum();
        }
        else{
            console.log(`Player chooses: ${player}`)
            console.log(`Computer chooses: ${computer}`)
            playerSum();
        }   
    }
}


const playerSum = () => {
    result.textContent = 'Player Won';
    playerScore++;
    playerScoreboard.textContent = `Player: ${playerScore}`;
}

const computerSum = () => {
    result.textContent = 'Computer Won';
    computerScore++;
    computerScoreboard.textContent = `Computer: ${computerScore}`;   
}


const gameOver = (playerOptions, movesLeft) => {
    playerOptions.forEach(o => {
        o.style.display = 'none';
    })
    
    moveChoice.innerText = 'Game Over!';
    movesLeft.style.display = 'none';

    if(playerScore > computerScore){
        result.style.fontSize = '2rem';
        result.innerText = 'You Won The Game!!';
        result.style.color = '#6EFF33';
    }
    else if(playerScore < computerScore){
        result.style.fontSize = '2rem';
        result.innerText = 'You Lost The Game!!';
        result.style.color = 'red';
    }
    else {
        result.style.fontSize = '2rem';
        result.innerText = 'You Tied The Game!!';
        result.style.color = 'grey';
    }
        
    reloadBtn.innerText = 'Restart';
    reloadBtn.style.display = 'flex';
    reloadBtn.addEventListener('click', () => {
        window.location.reload();
    })

    playGame()
}

playGame()