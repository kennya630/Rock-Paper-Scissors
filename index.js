
let humanscore = 0;
let computerscore = 0; 

let display = document.getElementById("display");

function getcomputerchoice() {
    let randomnumber = Math.floor(Math.random() * 3);
    let choice;
    if (randomnumber === 0) {
        choice = "rock";
    }
    else if(randomnumber === 1) {
        choice = "paper";
    }
    else if (randomnumber === 2) {
        choice = "scissors";
    }
    console.log("computer: " + choice);
    return choice;
}

// function gethumanchoice() {
//     let choice = prompt("Enter a choice").toLowerCase();
//     console.log("human: " + choice);
//     return choice;
// }

function playround(humanchoice) {
    
    let computerchoice = getcomputerchoice();
    if (humanchoice === computerchoice) {
        console.log("IT is a tie");
    }
    else if ((humanchoice === "rock" && computerchoice === "scissors") ||
              (humanchoice === "paper" && computerchoice === "rock") ||
              (humanchoice === "scissors" && computerchoice === "paper")
    ) {
            humanscore++;    
            // console.log("You win");
            document.getElementById("whoWins").textContent = "You win";
            document.getElementById("runningScore").textContent = humanscore;
    }
    else {
        computerscore++;
        // console.log("you lose");
        document.getElementById("whoWins").textContent = "You lose";
        document.getElementById("runningScore").textContent = computerscore;
    }

}

function playgame(humanchoice) {
    for (let i = 0; i < 5; i++)
    {
        // let humanchoice = gethumanchoice();
        // let computerchoice = getcomputerchoice();

        playround(humanchoice,computerchoice);
        
    }

    let computerchoice = getcomputerchoice();
    let result = playround(humanchoice,computerchoice)
    
    if (humanscore > computerscore) 
    {
        return "You are the winner";
    }
    else if (humanscore < computerscore)
    {
        return "You are the loser";
    }
    else if (humanscore === computerscore)
    {
        return "draw";
    }

    display.textContent = `You chose ${humanchoice}, computer chose ${computerchoice}.`;
    document.getElementById("result").textContent = result;
}

// document.getElementById("rock").addEventListener("onclick", () => playgame(rock));
// document.getElementById("paper").addEventListener("onclick", () => playgame(paper));
// document.getElementById("scissors").addEventListener("onclick", () => playgame(scissors));

// playgame();