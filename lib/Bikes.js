class Bikes {
  constructor(x,y,width,height,dx,dy,color,direction) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.dx = dx;
    this.dy = dy;
    this.color = color;
    this.direction = direction;
  }

  draw(ctx) {
    ctx.fillStyle = this.color
    ctx.fillRect(this.x,this.y,this.width,this.height)
  }

  drive() {
    if (this.direction === 'down') {
      this.x = this.x
      this.y += this.dy
    } else if (this.direction === 'up') {
      this.x = this.x
      this.y -= this.dy
    } else if (this.direction === 'left') {
      this.y = this.y
      this.x -= this.dx
    } else if (this.direction === 'right') {
      this.y = this.y
      this.x += this.dx
    } else {
      this.x += this.dx
    }  
  }

  turn(e) {
    // e.preventDefault();
    if (e.keyCode === 40) {
      this.direction = 'down'
    } else if (e.keyCode === 38) {
      this.direction = 'up'
    } else if (e.keyCode === 37) {
      this.direction = 'left'
    } else if (e.keyCode === 39) {
      this.direction = 'right'
    }
  }

  turnPlayerTwo(e) {
    // e.preventDefault();
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

module.exports = Bikes;