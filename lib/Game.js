const Bikes = require('./Bikes.js');

class Game {
  constructor() {
    this.gameOn = false;
    this.gameOver = false;
    this.bike1trail = [];
    this.bike2trail = [];
    this.player1 = new Bikes(750,350,10,10,'rgba(255, 0, 102, 1)', 'left');
    this.player2 = new Bikes(50,350,10,10,'rgba(247, 255, 0, 1)', 'right');
  }

  startGame(ctx, canvasWidth, canvasHeight) {
    this.collideBikes();
    this.collideWithSelf();
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
      let topCol = bike.y - this.player1.collEdge
      let btmCol = bike.y + this.player1.collEdge
      let rightCol = bike.x + this.player1.collEdge
      let leftCol = bike.x - this.player1.collEdge

      if (topCol === this.player2.y && 
          rightCol === this.player2.x) {
            this.player2.bikeCrashed = true;
            console.log('bike 2 has crashed')
      } else if (btmCol === this.player2.y &&
          leftCol === this.player2.x) {
            this.player2.bikeCrashed = true;
            console.log('bike 2 has crashed')
      }
    })

    this.bike2trail.forEach((bike) => {
      let topCol = bike.y - this.player1.collEdge
      let btmCol = bike.y + this.player1.collEdge
      let rightCol = bike.x + this.player1.collEdge
      let leftCol = bike.x - this.player1.collEdge

       if (topCol === this.player1.y && 
          rightCol === this.player1.x) {
            this.player1.bikeCrashed = true;
            console.log('bike 1 has crashed')
      } else if (btmCol === this.player1.y &&
          leftCol === this.player1.x) {
            this.player1.bikeCrashed = true;
            console.log('bike 1 has crashed')
      }
    })
  }
  collideBikes() {
    let car2xmin = this.player2.x + 10
    let car2xmax = this.player2.x - 10
    let car2ymin = this.player2.y - 10
    let car2ymax = this.player2.y + 10
    // console.log(car2xmin, car2xmax)

    if (this.player1.x >= car2xmin && this.player1.x <= this.player2.x) {
      console.log('please work')
    }
    // if (this.player1.x <= car2x && this.player1.y <= car2y) {
    //   console.log('you just HIT someone')
    //   this.player1.bikeCrashed = true
    // }
  }

  collideWithSelf() {
    this.bike1trail.forEach((bike) => {
      let topCol = bike.y - 4
      let btmCol = bike.y + 4
      let rightCol = bike.x + 4
      let leftCol = bike.x - 4

      if (topCol === this.player1.y && 
          rightCol === this.player1.x) {
            this.player1.bikeCrashed = true;
            console.log('bike 1 has crashed')
      } 
      // else if (btmCol === this.player1.y &&
      //     leftCol <= this.player1.x) {
      //       this.player1.bikeCrashed = true;
      //       console.log('bike 1 has crashed')
      // }
    })
  }
  endGame(canvasWidth, canvasHeight) {
    this.player1.collideWalls(canvasWidth, canvasHeight);
    this.player2.collideWalls(canvasWidth, canvasHeight);
    this.collideBikeTrails();
    // this.collideWithSelf();

    if (this.player1.bikeCrashed === true ||
        this.player2.bikeCrashed === true) {
      this.gameOver = true;
    console.log('endgame function triggered')
    }
  }


}

module.exports = Game;
 