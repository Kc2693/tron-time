 class Keyboard {
  constructor() {
    'key38': () => game.player1.drive('up'),
    'key40': () => game.player1.drive('down'),
    'key37': () => game.player1.drive('left'),
    'key39': () => game.player1.drive('right'),
    'key87': () => game.player2.drive('up'),
    'key83': () => game.player2.drive('down'),
    'key65': () => game.player2.drive('left'),
    'key68': () => game.player2.drive('right'),
  }
 
  evalInput(event) {
    if (keyboard[event]) {
      keyboard[`key${event}`]()
    }
  }
}

