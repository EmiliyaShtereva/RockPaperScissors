function rockPaperScissors(player) {
    const rock = "Rock";
    const paper = "Paper";
    const scissors = "Scissors";
    pointsForPlayer = 0;
    pointsForComputer = 0;
    
    if (player == "rock" || player == "Rock") {
        player = rock;
    } else if (player == "paper" || player == "Paper") {
        player = paper;
    } else if (player == "scissors" || player == "Scissors") {
        player = scissors;
    } else {
        console.log("\x1b[3;93m Invalid Input. Try again. \x1b[0m"); 
    }
    console.log(`\x1b[3;95m You chose ${player}. \x1b[0m`)

    let randomNumber = Math.floor(Math.random()*3) + 1;
    let computer = 0;

    if (randomNumber === 1) {
        computer = rock;
    } else if (randomNumber === 2) {
        computer = paper;
    } else if (randomNumber === 3) {
        computer = scissors
    }
    console.log(`\x1b[3;95m The computer chose ${computer}. \x1b[0m`);

    if ((player === rock && computer === scissors) || 
    (player === paper && computer === rock) || (player === scissors && computer === paper)) {
        console.log("\x1b[4;92m You win! \x1b[0m");
    } else if ((player === rock && computer === paper) || 
    (player === paper && computer === scissors) || (player === scissors && computer === rock)) {
        console.log("\x1b[4;91m You lose! \x1b[0m");
    } else {
        console.log("\x1b[4;97m A draw! \x1b[0m");
    }
}

rockPaperScissors("rock");