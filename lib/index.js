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
  // console.log(canvasWidth)
  game.startGame(ctx, canvas.width, canvas.height)
  if (game.gameOver === false) {
    requestAnimationFrame(gameLoop);
  }
}

requestAnimationFrame(gameLoop);
