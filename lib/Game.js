// const Gridline = require('./Gridlines.js');
// const horzLine = new Gridline(0,0,900,2);

class Game {
  constructor() {
    this.gameOn = false;
    // verticalGrid = [];
    // horizontalGrid = [];
  }

  gameBg(ctx) {
    ctx.fillRect(0,0,900,700);
    ctx.fillStyle = 'rgba(0,0,0,1)';
  }
  // gameGrid(ctx) {
  //   for (let i=0; i <= 15; i++) {
  //     if (i = 0) {
  //       horizontalGrid.push(new Gridline(i * 50,0,900,700))
  //     } else {
  //       horizontalGrid.push(new Gridline(0,))
  //     }

  //   }
  // }

}

module.exports = Game;
 