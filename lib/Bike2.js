const Bikes = require('./Bikes.js');

class Bike2 extends Bikes {
	constructor(x,y,width,height,dx,dy,color) {
		super(x,y,width,height,dx,dy,color);
		this.direction = 'left'
	}

	drawPlayerTwo(ctx) {
    ctx.fillRect(this.x,this.y,this.width,this.height)
    ctx.fillStyle = this.color
  }

	turnPlayerTwo(e) {
    e.preventDefault();
    if (e.keyCode === 83) {
      this.direction = 'down'
    } else if (e.keyCode === 87) {
      this.direction = 'up'
    } else if (e.keyCode === 65) {
      this.direction = 'left'
    } else if (e.keyCode === 68) {
      this.direction = 'right'
    }
	}
	
}

module.exports = Bike2;