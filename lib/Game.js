const Bikes = require('./Bikes.js');

class Game {
  constructor() {
    this.gameOn = false;
    this.gameOver = false;
    this.bike1trail = [];
    this.bike2trail = [];
    this.player1 = new Bikes(850,351,10,10,'rgba(255, 0, 102, 1)', 'left');
    this.player2 = new Bikes(51,351,10,10,'rgba(247, 255, 0, 1)', 'right');
  }

  startGame(ctx, canvasWidth, canvasHeight) {
    this.collideBikes();
    this.player1.draw(ctx);
    this.player1.drive();
    this.bike1trail.push({x: this.player1.x, y: this.player1.y})
    this.player2.draw(ctx);
    this.player2.drive();
    this.bike2trail.push({x: this.player2.x, y: this.player2.y});
    this.endGame();
  }

  collideBikeTrails() {
    this.bike1trail.forEach((bike) => {
      let topCol = bike.y - 6
      let leftCol = bike.x + -7
      let btmCol = bike.y + 6
      let rightCol = bike.x + 5

      if (topCol === this.player2.y && 
          leftCol === this.player2.x) {
            this.player2.bikeCrashed = true;
            console.log('bike 2 has hit trail')
      } else if (btmCol === this.player2.y &&
          rightCol === this.player2.x) {
            this.player2.bikeCrashed = true;
            console.log('bike 2 has hit trail')
      }
    })

    this.bike2trail.forEach((bike) => {
      let topCol = bike.y - 6
      let leftCol = bike.x - 5
      let btmCol = bike.y + 6
      let rightCol = bike.x + 7

      if (topCol === this.player1.y &&
          leftCol === this.player1.x) {
            this.player1.bikeCrashed = true;
            console.log('bike 1 has crashed')
      } else 
      if (btmCol === this.player1.y &&
          rightCol === this.player1.x) {
            this.player1.bikeCrashed = true;
            console.log('bike 1 has crashed')
      }
    })
  }
  collideBikes() {
    let car2x = this.player2.x + 10;
    let car2xmin = this.player2.x + 9;
    let car2y = this.player2.y + 10;
    let car2ymin = this.player2.y + 10;
    let car1ymax = this.player1.y + 10;

    if (this.player1.x >= car2xmin && 
        this.player1.x <= car2x &&
        this.player1.y <= car2y &&
        this.player1.y >= this.player2.y 
        ) {
      this.player1.bikeCrashed = true;
    } else if (this.player1.x >= car2xmin && 
        this.player1.x <= car2x &&
        this.player2.y >= this.player1.y &&
        this.player2.y <= car1ymax)  {
      this.player2.bikeCrashed = true;
    }
  }

  collideWithSelf() {
    for (let i = 0; i < this.bike1trail.length - 2; i++) {
      if (this.player1.x === this.bike1trail[i].x &&
          this.player1.y === this.bike1trail[i].y) {
        this.player1.bikeCrashed = true;
      }
    }
  }
  endGame(canvasWidth, canvasHeight) {
    this.player1.collideWalls(canvasWidth, canvasHeight);
    this.player2.collideWalls(canvasWidth, canvasHeight);
    this.collideBikeTrails();
    this.collideWithSelf();

    if (this.player1.bikeCrashed === true ||
        this.player2.bikeCrashed === true) {
      this.gameOver = true;
    console.log('endgame function triggered')
    }
  }


}

module.exports = Game;
 