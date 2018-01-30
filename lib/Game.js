const Bikes = require('./Bikes.js');

class Game {
  constructor() {
    this.gameOn = false;
    this.bike1trail = [];
    this.bike2trail = [];
    this.player1 = new Bikes(50,350,10,10,2,2,'rgba(255, 0, 102, 1)', 'right');
    this.player2 = new Bikes(750,350,10,10,2,2,'rgba(247, 255, 0, 1)', 'left');
  }
  startGame(ctx) {
    this.player1.draw(ctx);
    this.player1.drive();
    this.bike1trail.push({x: this.player1.x, y: this.player1.y})
    // console.log(this.bike1trail)
    this.player2.draw(ctx);
    this.player2.drive();
    this.collideBikes();
    this.bike2trail.push({x: this.player2.x, y: this.player2.y})
    console.log(this.bike2trail.length)
  }

  captureTrail() {
    this.bike1trail.push(this.player1)
    console.log(this.bike1trail)
  }

  collideBikes() {
    this.bike1trail.forEach((bike) => {
      if (bike.x === this.player2.x && bike.y === this.player2.y) {
      console.log('BAM')
      }
    })
    this.bike2trail.forEach((bike) => {
      if (bike.x === this.player1.x && bike.y === this.player1.y) {
        // console.log('WAABAM')
      }
    })
  }

}

module.exports = Game;
 