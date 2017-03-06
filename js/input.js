const bindInputEvents = ({ game, updateGame }) => {
  document.addEventListener('keydown', event => {
    switch (event.key) {
      case 'ArrowUp': {
        event.preventDefault();
        game.move('up');
        break;
      }
      case 'ArrowDown': {
        event.preventDefault();
        game.move('down');
        break;
      }
      case 'ArrowLeft': {
        event.preventDefault();
        game.move('left');
        break;
      }
      case 'ArrowRight': {
        event.preventDefault();
        game.move('right');
        break;
      }
    }
    updateGame();
  });
}

export default bindInputEvents;
