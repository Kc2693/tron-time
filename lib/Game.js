const Bikes = require('./Bikes.js');

class Game {
  constructor() {
    this.gameOver = false;
    this.gameOn = false;
    this.level = 'easy'
    this.bike1trail = [];
    this.bike2trail = [];
    this.player1 = {}
    this.player2 = {}
  }

  difficulty() {
    if (this.level === 'easy') {
      this.player1 = new Bikes(850,351,10,10,'rgba(255, 0, 102, 1)', 'left');
      this.player2 = new Bikes(51,351,10,10,'rgba(247, 255, 0, 1)', 'right');
      console.log(this.player2.lives)
    }
  }

  startGame(ctx, canvasWidth, canvasHeight) {
    if (this.gameOn === true) {
      this.collideBikes();
      this.collidebike1();
      this.player1.draw(ctx);
      this.player1.drive();
      this.bike1trail.push({x: this.player1.x, y: this.player1.y})
      this.player2.draw(ctx);
      this.player2.drive();
      this.bike2trail.push({x: this.player2.x, y: this.player2.y});
      this.endRound(canvasWidth, canvasHeight)
      // this.endGame();
    }
  }

  collideBikeTrails() {
    this.bike1trail.forEach((bike) => {
      if (this.level === 'easy') {
        var topCol = bike.y - 15
        var leftCol = bike.x + -16
        var btmCol = bike.y + 15
        var rightCol = bike.x + 14
      }


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
  }
  collidebike1() {
    this.bike2trail.forEach((bike) => {
      if (this.level === 'easy') {
        var topCol = bike.y - 18
        var leftCol = bike.x - 17
        var btmCol = bike.y + 18
        var rightCol = bike.x + 16
    }

      if (topCol === this.player1.y &&
          leftCol === this.player1.x) {
            this.player1.bikeCrashed = true;
            console.log('bike 1 has hit trail')
      } else if (btmCol === this.player1.y &&
          rightCol === this.player1.x) {
            this.player1.bikeCrashed = true;
            console.log('bike 1 has hit trail')
      }
    })
  }

  collideBikes() {
    let p2xmax = this.player2.x + 10;
    let p2xmin = this.player2.x + 9;
    let p2ymax = this.player2.y + 10;

    let p1ymax = this.player1.y + 10;
    let p1xmax = this.player1.x - 3;
    let p1xmin = this.player1.x ;

    if (this.player1.x >= this.player2.x && 
        this.player1.x <= p2xmax &&
        this.player1.y <= p2ymax &&
        this.player1.y >= this.player2.y 
        ) {
      this.player1.bikeCrashed = true;
    } else if (this.player1.x >= this.player2.x && 
        this.player1.x <= p2xmax &&
        this.player2.y <= p1ymax &&
        this.player2.y >= this.player1.y)  {
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
    for (let i = 0; i < this.bike2trail.length - 2; i++) {
      if (this.player2.x === this.bike2trail[i].x &&
          this.player2.y === this.bike2trail[i].y) {
        this.player2.bikeCrashed = true;
      }
    }
  }

  endRound(canvasWidth, canvasHeight) {
    this.player1.collideWalls(canvasWidth, canvasHeight);
    this.player2.collideWalls(canvasWidth, canvasHeight);
    this.collideBikeTrails();
    this.collideWithSelf();

    if (this.player1.bikeCrashed === true) {
      if (this.player1.lives > 0) {
        this.player1.lives--
        // NEW ROUND PARAMS
      } else {
        // append loss msg
        console.log('player 1 has lost')
        this.gameOver = true;
      }
      
    } else if (this.player2.bikeCrashed === true) {
      if (this.player2.lives > 0) {
        this.player2.lives--
        // NEW ROUND PARAMS
      } else {
        // append loss msg
        console.log('player 2 has lost')
        this.gameOver = true;
        console.log(this.player2.lives)
      }
    }
  }

  // endGame(canvasWidth, canvasHeight) {
  //   if () {
  //     this.gameOver = true;
  //   console.log('endgame function triggered')
  //   }
  // }


}

module.exports = Game;
 