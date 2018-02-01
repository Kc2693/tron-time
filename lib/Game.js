const Bikes = require('./Bikes.js');

class Game {
  constructor(canvasWidth, canvasHeight) {
    this.gameOver = false;
    this.gameOn = false;
    this.level = 'easy';
    this.bike1trail = [];
    this.bike2trail = [];
    this.player1 = {};
    this.player2 = {};
    this.gameBorderXmin = 0;
    this.gameBorderXmax = canvasWidth;
    this.gameBorderYmin = 0;
    this.gameBorderYmax = canvasHeight;
  }

  difficulty(ctx) {
    if (this.level === 'easy') {
      this.player1 = new Bikes(850, 351, 10, 10, '#FF0066', 'left');
      this.player2 = new Bikes(51, 351, 10, 10, '#F7FF01', 'right');
    } else if (this.level === 'medium' || this.level === 'hard') {
      this.player1 = new Bikes(752, 351, 10, 10, '#FF0066', 'left');
      this.player2 = new Bikes(151, 351, 10, 10, '#F7FF01', 'right');
      this.drawLevelBorder(ctx);
    } 
  }

  startGame(ctx) {
    if (this.gameOn === true) {
      this.collideBikes();
      this.player1.draw(ctx);
      this.player1.drive();
      this.bike1trail.push({x: this.player1.x, y: this.player1.y});
      this.player2.draw(ctx);
      this.player2.drive();
      this.bike2trail.push({x: this.player2.x, y: this.player2.y});
      this.endGame(ctx);
    }
  }

  collideBikeTrails() {
    this.bike1trail.forEach((bike) => {
      let topCol = bike.y - 15;
      let leftCol = bike.x + -16;
      let btmCol = bike.y + 15;
      let rightCol = bike.x + 14;

      if (topCol === this.player2.y && 
          leftCol === this.player2.x) {
        this.player2.bikeCrashed = true;
      } else if (btmCol === this.player2.y &&
          rightCol === this.player2.x) {
        this.player2.bikeCrashed = true;
      }
    });

    this.bike2trail.forEach((bike) => {
      let topCol = bike.y - 15;
      let leftCol = bike.x - 14;
      let btmCol = bike.y + 15;
      let rightCol = bike.x + 16;

      if (topCol === this.player1.y &&
          leftCol === this.player1.x) {
        this.player1.bikeCrashed = true;
      } else 
      if (btmCol === this.player1.y &&
          rightCol === this.player1.x) {
        this.player1.bikeCrashed = true;
      }
    });
  }

  collideBikes() {
    let p2xmax = this.player2.x + 12;
    let p2ymax = this.player2.y + 10;
    let p1ymax = this.player1.y + 10;

    if (this.player1.x >= this.player2.x && 
        this.player1.x <= p2xmax &&
        this.player1.y <= p2ymax &&
        this.player1.y >= this.player2.y 
    ) {
      this.player1.headOnCollision = true;
    } else if (this.player1.x >= this.player2.x && 
        this.player1.x <= p2xmax &&
        this.player2.y <= p1ymax &&
        this.player2.y >= this.player1.y)  {
      this.player2.headOnCollision = true;
    } 
  }

  collideWithSelf() {
    for (let i = 0; i < this.bike1trail.length - 2; i++) {
      if (this.player1.x === this.bike1trail[i].x &&
          this.player1.y === this.bike1trail[i].y) {
        this.player1.bikeCrashed = true;
      }
    }
    for (let i = 0; i < this.bike2trail.length - 2; i++) {
      if (this.player2.x === this.bike2trail[i].x &&
          this.player2.y === this.bike2trail[i].y) {
        this.player2.bikeCrashed = true;
      }
    }
  }

  drawLevelBorder(ctx) {
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, 100, 700);
    ctx.fillRect(800, 0, 100, 700);
    this.gameBorderXmin = 105;
    this.gameBorderXmax = 785;

    if (this.level === 'hard') {
      ctx.fillRect(100, 0, 700, 150);
      ctx.fillRect(100, 500, 700, 200);
      this.gameBorderYmin = 155;
      this.gameBorderYmax = 485;
    }
  }

  win(ctx) {
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 15, 900, 55);
    ctx.font = 'bold 48px serif';

    if (this.player2.lives <= 0) {
      ctx.fillStyle = '#ff0066';
      ctx.fillText('PLAYER 1 WINS', 250, 60);
    } else if (this.player1.lives <= 1) {
      ctx.fillStyle = 'rgba(247, 255, 0, 1)';
      ctx.fillText('PLAYER 2 WINS', 250, 60);
    }
  }

  draw(ctx) {
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 15, 900, 55);
    ctx.font = 'bold 48px serif';
    ctx.fillStyle = '#ff0066';
    ctx.fillText('DRAW', 380, 60);
  }

  endGame(ctx) {
    this.player1.collideWalls(this.gameBorderXmin, this.gameBorderXmax, 
      this.gameBorderYmin, this.gameBorderYmax);
    this.player2.collideWalls(this.gameBorderXmin, this.gameBorderXmax, 
      this.gameBorderYmin, this.gameBorderYmax);
    this.collideBikeTrails();
    this.collideWithSelf();

    if (this.player1.bikeCrashed) {
      if (this.player1.lives > 0) {
        this.player1.lives--;
      } else {
        this.win(ctx);
        this.gameOver = true;
      }
      
    } else if (this.player2.bikeCrashed) {
      if (this.player2.lives > 0) {
        this.player2.lives--;
      } else {
        this.win(ctx);
        this.gameOver = true;
      }
    } else if (this.player1.headOnCollision) {
      this.draw(ctx);
      this.gameOver = true;
    }
  }
}

module.exports = Game;
 