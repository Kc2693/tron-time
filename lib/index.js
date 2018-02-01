const canvas = document.getElementById('game');
const startButton = document.getElementById('start-btn');
const newGameButton = document.getElementById('new-game-btn');
const level1 = document.getElementById('level1');
const level2 = document.getElementById('level2');
const level3 = document.getElementById('level3');
const ctx = canvas.getContext('2d');
const Game = require('./Game.js');
const game = new Game(canvas.width, canvas.height);

function bikeStuff(e) {
  game.player1.turn(e);
  game.player2.turnPlayerTwo(e);
}

level1.addEventListener('click', function(e) {
  event.preventDefault();
  game.level = 'easy';
  startButton.classList.toggle('no-btn');
  level1.classList.toggle('no-btn');
  level2.classList.toggle('no-btn');
  level3.classList.toggle('no-btn');
});

level2.addEventListener('click', function(e) {
  event.preventDefault();
  game.level = 'medium';
  startButton.classList.toggle('no-btn');
  level1.classList.toggle('no-btn');
  level2.classList.toggle('no-btn');
  level3.classList.toggle('no-btn');
});

level3.addEventListener('click', function(e) {
  event.preventDefault();
  game.level = 'hard';
  startButton.classList.toggle('no-btn');
  level1.classList.toggle('no-btn');
  level2.classList.toggle('no-btn');
  level3.classList.toggle('no-btn');
});


startButton.addEventListener('click', function(e) {
    game.difficulty(ctx);
    game.gameOn = true;
    startButton.classList.toggle('no-btn');
  })

newGameButton.addEventListener('click', function(e) {
  e.preventDefault();
  window.location.reload(true)
})

function gameLoop(e) {
  window.addEventListener('keydown', bikeStuff)
  game.startGame(ctx, canvas.width, canvas.height)
  if (game.gameOver === false) {
    requestAnimationFrame(gameLoop);
  } else if (game.gameOver) {
    newGameButton.classList.toggle('no-btn');
  }
}

requestAnimationFrame(gameLoop);
