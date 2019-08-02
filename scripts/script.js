const canv = document.querySelector('canvas');
const ctx = canv.getContext('2d');

// Moje zmienne
canv.width = 1400;
canv.height = 600;

const cw = canv.width;
const ch = canv.height;

const ballSize = 20;
let ballX = cw / 2 - ballSize / 2;
let ballY = ch / 2 - ballSize / 2;

const paddelHeight = 100;
const paddelWidth = 10;

const playerX = 70;
const aiX = 1310;

let playerY =  200;
let aiY = 200;

const lineWidth = 6;
const lineHeight = 16;

let ballSpeedX = 1;
let ballSpeedY = 1;
// Moje zmienne

function player() {
  ctx.fillStyle = 'lightgreen';
  ctx.fillRect(playerX, playerY, paddelWidth , paddelHeight);
}

function ai() {
  ctx.fillStyle = 'red';
  ctx.fillRect(aiX, aiY, paddelWidth , paddelHeight);
}

function ball() {
  ctx.fillStyle = 'black';
  ctx.fillRect(ballX, ballY, ballSize , ballSize);

  // dwa rozne zapisy dla testow
  ballX = ballX + ballSpeedX;
  ballY += ballSpeedY;

  if (ballY <= 0 || ballY + ballSize >= ch)
  {
    ballSpeedY = -ballSpeedY;
  }
  if (ballX <=0 || ballX + ballSize >= cw)
  {
    ballSpeedX = -ballSpeedX;
  }
}

function table() {
  // plaża
  ctx.fillStyle = "lightyellow";
  ctx.fillRect(0 ,0 ,cw ,ch );

  for(let linePosition = 10; linePosition < ch; linePosition +=35) {
    ctx.fillStyle = "grey";
    ctx.fillRect(cw/2 -lineWidth/2, linePosition, lineWidth, lineHeight)
  }
}

function playerPosition(e){
  console.log(e)
}

canv.addEventListener("mousemove", playerPosition)

function game() {
table()
ball()
player()
ai()
}
setInterval(game, 1000/100)
