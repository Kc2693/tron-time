const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
const Game = require('./Game.js');
const game = new Game();


function carStuff(e) {
  game.player1.turn(e);
  game.player2.turnPlayerTwo(e);
}

function gameLoop(e) {
  window.addEventListener('keydown', carStuff)
  game.startGame(ctx)
  // game.collideBikes();

  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
