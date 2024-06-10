let gameSeq = [];
let userSeq = [];

let button = ["yellow","red","purple","green"];

let isStart = false;
let level = 0;
let highScore = 0;

let h2 = document.querySelector('h2');
let h3 = document.querySelector('h3');

document.addEventListener("keypress", function(){
    if(isStart == false){
        isStart = true;

        levelUp();
    }
});

function levelUp(){
    userSeq = [];
    level++;

    h2.innerText = `Level ${level}`;

    let random = Math.floor(Math.random()*3);

    let randonCol = button[random];

    let randomBtn = document.querySelector(`.${randonCol}`);
    gameSeq.push(randonCol);
    // console.log(gameSeq);

    btnFlash(randomBtn);
    
}

function btnFlash(btn){

    btn.classList.add("flash");

    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);
}
function userFlash(btn){

    btn.classList.add("userFlash");

    setTimeout(function(){
        btn.classList.remove("userFlash");
    }, 250);
}



let btns = document.querySelectorAll(".btn");

for(btn of btns){
    btn.addEventListener("click", btnPress);
}
function btnPress(){
    let btn = this;
    
    userFlash(btn);
    userCol = btn.getAttribute("id");
    userSeq.push(userCol);
    
    checkBtn(userSeq.length-1);
}
function checkBtn(idx){

    if(userSeq[idx] == gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        h2.innerHTML  =`Game Over! Your score was ${level} <br>Press any key to start`;
        let body = document.querySelector("body");
        highScore = Math.max(highScore,level);
        body.classList.add("gameOver");
        setTimeout(function(){
            body.classList.remove("gameOver");
        },200);
        h3.innerText = `Highest Score ${highScore}`;
        reset();
    }
}

function reset(){
    isStart = false;
    userSeq = [];
    gameSeq = [];
    level = 0;
}