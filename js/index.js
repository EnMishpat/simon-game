let order = [];
let playerOrder=[];
let flash;
let turn;
let good;
let compTurn;
let interalId;
let strict = false;
let noise = true;
let on = false;
let win;

const turnCounter = document.querySelector('#turn');
const topLeft = document.querySelector("#topLeft");
const topRight = documenet.querySelector("#topRight");
const bottomLeft = document.querySelector("bottomLeft");
const bottomRight = document.querySelector("#bottomRight");
const strictButton = document.querySelector("#stickt");
const onButton = document.querySelector("#on");
const startButton = document.querySelector("#start");

stricktButton.addEventListener('click', (event)=>{
  if(strictButton.checked == true){
    strict = true;
  } else{
    strict = false; 
  }
}); 

onButton.addEventListener('click', (event)=>{
  if(onButton.checked == true){
    on = true;
    turnCounter.innerHTML = "-";
  } else{
    on = false;
    turnCounter.innerHTML = "";
    clearColor();
    clearInterval(interalId);
  }
});

startButton.addEventListener('click', (event)=>{
  if(om||win){
    play();
  }
});

function play(){
  win =false;
  order = [];
  playerOrder = [];
  flash = 0;
  intervalId = 0;
  turn = 1;
  turnCounter.innerHTML= 1;
  good = true;
  for (var i = 0; i<20;i++){
    order.push(Math.floor(Math.random()*4)+1);
  }
  compTurn = true;
  interalId = setInterval(gameTurn(), 800);
};

// at 43.12 on the video

