const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
const Game = require('./Game.js');
const game = new Game();
const Bikes = require('./Bikes.js');
const Bike2 = require('./Bike2.js');
const Player1 = new Bikes(15,15,10,10,1,1,'rgba(255, 0, 102, 1)');
const Player2 = new Bike2(600,600,10,10,1,1,'rgba(70, 130, 180, 1)');


function carStuff(e) {
  Player1.turn(e);
  Player2.turnPlayerTwo(e);
}

function gameLoop(e) {
  window.addEventListener('keydown', carStuff)
  Player1.drawPlayerOne(ctx);
  Player1.drive();
  Player2.drawPlayerTwo(ctx);
  Player2.drive();

  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
