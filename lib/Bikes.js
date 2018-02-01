class Bikes {
  constructor(x, y, width, height, color, direction) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.dx = 3;
    this.dy = 3;
    this.collEdge = height - 2;
    this.color = color;
    this.direction = direction;
    this.bikeCrashed = false;
    this.headOnCollision = false;
    this.lives = 3;
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  drive() {
    if (this.direction === 'down') {
      this.x = this.x;
      this.y += this.dy;
    } else if (this.direction === 'up') {
      this.x = this.x;
      this.y -= this.dy;
    } else if (this.direction === 'left') {
      this.y = this.y;
      this.x -= this.dx;
    } else if (this.direction === 'right') {
      this.y = this.y;
      this.x += this.dx;
    } else {
      this.x += this.dx;
    }  
  }

  turn(e) {
    // e.preventDefault();
    if (e.keyCode === 40 && this.direction !== 'up') {
      this.direction = 'down';
    } else if (e.keyCode === 38 && this.direction !== 'down') {
      this.direction = 'up';
    } else if (e.keyCode === 37 && this.direction !== 'right') {
      this.direction = 'left';
    } else if (e.keyCode === 39 && this.direction !== 'left') {
      this.direction = 'right';
    }
  }

  turnPlayerTwo(e) {
    if (e.keyCode === 83 && this.direction !== 'up') {
      this.direction = 'down';
    } else if (e.keyCode === 87 && this.direction !== 'down') {
      this.direction = 'up';
    } else if (e.keyCode === 65 && this.direction !== 'right') {
      this.direction = 'left';
    } else if (e.keyCode === 68 && this.direction !== 'left') {
      this.direction = 'right';
    }
  }

  collideWalls(xMin, xMax, yMin, yMax) {
    if (this.x > xMax || this.x < xMin) {
      this.bikeCrashed = true;
    } else if (this.y > yMax || this.y < yMin) {
      this.bikeCrashed = true;
    }
  }
}

module.exports = Bikes;