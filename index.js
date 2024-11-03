
let humanscore = 0;
let computerscore = 0; 

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

function gethumanchoice() {
    let choice = prompt("Enter a choice").toLowerCase();
    console.log("human: " + choice);
    return choice;
}

function playround(humanchoice,computerchoice) {
    
    if (humanchoice === computerchoice) {
        console.log("IT is a tie");
    }
    else if ((humanchoice === "rock" && computerchoice === "scissors") ||
              (humanchoice === "paper" && computerchoice === "rock") ||
              (humanchoice === "scissors" && computerchoice === "paper")
    ) {
            humanscore++;    
            console.log("You win");
    }
    else {
        computerscore++;
        console.log("you lose");
    }

}

function playgame() {
    for (let i = 0; i < 5; i++)
    {
        let humanchoice = gethumanchoice();
        let computerchoice = getcomputerchoice();

        playround(humanchoice,computerchoice);
        
    }
    
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
}

playgame();