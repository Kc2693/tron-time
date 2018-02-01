const {assert} = require('chai');
const Bikes = require('../lib/Bikes.js');

describe('Bike', function() {
  let bike;

  beforeEach(function() {
    bike = new Bikes(850, 351, 10, 10, '#FF0066', 'left');
  })

  it('should be a function', function() {
    assert.isFunction(Bikes);
  });

  it('should create an instance of bike', function() {
    assert.isObject(bike)
  });

  it('should have x, y, width, height, color, and direction', function() {
    assert.equal(bike.x, 850)
    assert.equal(bike.y, 351)
    assert.equal(bike.width, 10)
    assert.equal(bike.height, 10)
    assert.equal(bike.color, '#FF0066')
  });

  it('should start off NOT crashed or collided', function() {
    assert.equal(bike.bikeCrashed, false);
    assert.equal(bike.headOnCollision, false);
  });

  it('should be able to move up', function() {
    assert.equal(bike.y, 351);

    bike.direction = 'up';
    bike.drive();

    assert.equal(bike.y, 348)
  });

  it('should be able to move down', function() {
    assert.equal(bike.y, 351);

    bike.direction = 'down';
    bike.drive();

    assert.equal(bike.y, 354)
  });

  it('should be able to move left', function() {
    assert.equal(bike.x, 850);

    bike.direction = 'left';
    bike.drive();

    assert.equal(bike.x, 847)
  });

  it('should be able to move right', function() {
    assert.equal(bike.x, 850);

    bike.direction = 'right';
    bike.drive();

    assert.equal(bike.x, 853)
  });

  it('should crash if it hits a wall', function() {
    assert.equal(bike.bikeCrashed, false);

    bike.x = 900;
    bike.collideWalls(0,900,0,700);

    assert.equal(bike.bikeCrashed, true)
  });

})