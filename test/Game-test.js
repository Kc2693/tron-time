const {assert} = require('chai');
const Game = require('../lib/Game.js');
const Bikes = require('../lib/Bikes.js');
const canvas = {width: 900, height: 700};
// const ctx = canvas.getContext('2d');

describe('Game', function() {
  let game;

  beforeEach(function() {
    game = new Game(canvas.width, canvas.height)
  });

  it('should be a function', function() {
    assert.isFunction(Game)
  });

  it('should create an instance of game', function() {
    assert.isObject(game)
  });

  it('should start with gameover & gameon both being false', function() {
    assert.equal(game.gameOver, false);
    assert.equal(game.gameOn, false);
  });

  it('should have easy as its default level', function() {
    assert.equal(game.level, 'easy');
  })

  it('should start out with empty arrays for player bike trails', function() {
    assert.isArray(game.bike1trail);
    assert.isArray(game.bike2trail);
    assert.equal(game.bike1trail.length, 0)
    assert.equal(game.bike1trail.length, 0)
  })

  it.skip('should have player bikes that spawn x/y relative to a selected game level', function() {
    game.level = 'easy'
    game.difficulty(ctx);

    assert.equal(game.player1.x, 850)

    game.level = 'medium' 
    game.difficulty(ctx);

    assert.equal(game.player1.x, 752)
    assert.equal(game.player2.x, 151)
  });

  it('should turn player.bikecrashed to true if bike collides with bike trail', function() {
    game.player2 = new Bikes(850, 351, 10, 10, '#FF0066', 'left');

    assert.equal(game.player2.bikeCrashed, false)

    game.player2.x = 28
    game.player2.y = 30
    game.bike1trail = [{x: 14, y: 15}]

    game.collideBikeTrails();

    assert.equal(game.player2.bikeCrashed, true)
  });

  it('should turn player headOnCollision to true if bikes collide with each other', function() {
    game.player1 = new Bikes(752, 351, 10, 10, '#FF0066', 'left');
    game.player2 = new Bikes(151, 351, 10, 10, '#F7FF01', 'right');

    assert.equal(game.player1.headOnCollision, false)

    game.player1.x = 81
    game.player1.y = 50
    game.player2.x = 80
    game.player2.y = 50

    game.collideBikes();

    assert.equal(game.player1.headOnCollision, true)
  });

  it('should crash player if they run into their own bike trail', function() {
    game.player1 = new Bikes(752, 351, 10, 10, '#FF0066', 'left');
    game.bike1trail = [{x:752, y:351}, {x:755, y:351}, {x:757, y:351}];

    assert.equal(game.player1.bikeCrashed, false);

    game.collideWithSelf();

    assert.equal(game.player1.bikeCrashed, true)
  });


}) 