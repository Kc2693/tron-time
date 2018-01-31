const Bikes = require('./Bikes.js');

class Game {
  constructor() {
    this.gameOn = false;
    this.gameOver = false;
    this.bike1trail = [];
    this.bike2trail = [];
    this.player1 = new Bikes(50,350,10,10,'rgba(255, 0, 102, 1)', 'right');
    this.player2 = new Bikes(750,350,10,10,'rgba(247, 255, 0, 1)', 'left');
  }
  startGame(ctx, canvasWidth, canvasHeight) {
    this.player1.draw(ctx);
    this.player1.drive();
    this.bike1trail.push({x: this.player1.x, y: this.player1.y})
    this.player2.draw(ctx);
    this.player2.drive();
    this.bike2trail.push({x: this.player2.x, y: this.player2.y});
    this.collideBikes();
    this.endGame();
    this.player1.collideWalls(canvasWidth, canvasHeight);
    this.player2.collideWalls(canvasWidth, canvasHeight);
  }

  captureTrail() {
    this.bike1trail.push(this.player1)
  }

  collideBikes() {
    this.bike1trail.forEach((bike) => {
      // console.log(this.player1.collEdge)
      if (bike.x + this.player1.collEdge === this.player2.x && 
          bike.y + this.player1.collEdge === this.player2.y) {
            this.player2.bikeCrashed = true;
            console.log('bike 2 has crashed')
      }
      if (bike.x === this.player2.x + 2.7) {
      console.log('BAM')
      console.log(bike.x)
      this.gameOver = true;
      }
    })
    this.bike2trail.forEach((bike) => {
      if (bike.x === this.player1.x && bike.y === this.player1.y) {
        // console.log('WAABAM')
      }
    })
  }

  endGame() {
    if (this.player1.bikeCrashed === true ||
        this.player2.bikeCrashed === true) {
      this.gameOver = true;
    console.log('endgame function triggered')
    }
  }


}

module.exports = Game;
 