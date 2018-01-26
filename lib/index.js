const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
const Game = require('./Game.js');
const game = new Game();
const Bikes = require('./Bikes.js');
const Player1 = new Bikes(15,15,10,10,1,1,'rgba(255, 0, 102, 1)');

// window.addEventListener('keydown', function(e) {
  // event.preventDefault();
  // Player1.drive(e)
  // if (e.keyCode === 40) {
  //   Player1.x = Player1.x;
  //   Player1.y = Player1.y+5;
  //   console.log('marco!')
  // } else if (e.keyCode === 38) {
  //   Player1.y= Player1.y-5;
  // } else if (e.keyCode === 37) {
  //   Player1.x = Player1.x-5;
  // } else if (e.keyCode === 39) {
  //   Player1.x = Player1.x+5
  // }
// })
function carStuff(e) {
  Player1.turn(e)
}

function gameLoop(e) {
  window.addEventListener('keydown', carStuff)
  // game.gameBg(ctx);
  Player1.draw(ctx);
  Player1.drive(e)
  // game.gameGrid(ctx);

  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
