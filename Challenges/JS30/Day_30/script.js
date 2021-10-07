const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let lastIdx;
let points = 0;
let timeUp = false;

function startGame(){
    scoreBoard.textContent = 0;
    points = 0;
    timeUp = false;
    peep();
    setTimeout(()=>{
        timeUp = true;
    },10000)
}

function bunk(e){
    console.log(e);
    if(!e.isTrusted) return;
    points++;
    this.classList.remove('up');
    scoreBoard.textContent = points;
}

moles.forEach(mole => mole.addEventListener('click',bunk));



function peep(){
    const time = randomTime(500,1000);
    const hole = randomHole();
    hole.classList.add('up');
    console.log(time,hole)
    setTimeout(()=>{
        hole.classList.remove('up');
        if(!timeUp) peep();
    },time)
}

function randomTime(min,max){
    const time = Math.floor(Math.random()*(max-min))+min;
    return time;
}

function randomHole(){
    // console.dir(holes.length);
    const idx = Math.floor(Math.random()*holes.length);
    if(idx == lastIdx) 
    {
        console.log('Got the same one')
        randomHole();
    }
    lastIdx = idx;
    return holes[idx];
}