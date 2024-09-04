let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScoreDisplay=document.querySelector("#user-score");
const compScoreDisplay=document.querySelector("#comp-score");

let msgContainer=document.querySelector(".msg-contain");
let msg1=document.querySelector("#msg1");
let finish=document.querySelector("#finish");

const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};

const finishGame=()=>{
    if(userScore>compScore){
        msg1.innerText="Congratulations! You won the game.";
        msgContainer.classList.remove("hide");
    }else if(userScore<compScore){
        msg1.innerText="Alas! You Lost. Come back Again.";
        msgContainer.classList.remove("hide");
    }else{
        msg1.innerText="Game is Drawn. Come back Again.";
        msgContainer.classList.remove("hide");
    }
};

const drawGame=()=>{
    msg.innerText="It is a Draw. Play again";
    msg.style.backgroundColor="#081b31";
};

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScoreDisplay.innerText=userScore;
        msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScoreDisplay.innerText=compScore;
        msg.innerText=`You Lose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
};

const playGame=(userChoice)=>{
    console.log("user choice:",userChoice);
    const compChoice=genCompChoice();
    console.log("comp choice:",compChoice);

    if(userChoice===compChoice){
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }else if(userChoice==="scissors"){
            userWin = compChoice === "rock"? false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
});

finish.addEventListener("click",(finishGame));