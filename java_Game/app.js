let userScore=0;
let compScore=0;
const choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const genCompChoice=()=>{
    const option=["rock","paper","scissor"];
    const randIdx=Math.floor(Math.random()*3);
    return option[randIdx];
};
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText =userScore;
        console.log("you win!");
        msg.innerText="you win! your "+userChoice+" beats "+compChoice;
        msg.style.backgroundColor ="green";
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        console.log("you lose");
        msg.innerText="you lose! com "+compChoice+" beats your "+userChoice;
        msg.style.backgroundColor ="red";
    }
};

const playGame=(userChoice) =>{
    console.log("userchoice is ",userChoice);
    //generate computer choice
    const compChoice =genCompChoice();
    console.log("compchoice is ",compChoice);
    
    if (userChoice == compChoice){
        console.log("game was draw...");
        msg.innerText="game was draw! paly again.";
        msg.style.backgroundColor= "#081b31";
        
    }
    else{
        let userWin =true;
        if(userChoice == "rock"){
            userWin=compChoice ==="paper"?false :true;
        }
        else if(userChoice=="paper"){
            userWin= compChoice ==="scissore"? false:true;
        }
        else{
            userWin= compChoice ==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice)
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice= choice.getAttribute("id");
        //console.log("choice was clicked ",userChoice)
        playGame(userChoice);
    });
});
