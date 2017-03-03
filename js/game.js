import Grid from './grid';
import Tile from './tile';

class Game {
  constructor(bestScore) {
    this.score = 0;
    this.bestScore = bestScore;
    this.grid = new Grid;
    this.newGame();
  }

  newGame() {
    for (let i = 0; i < 2; i++) {
      this.placeRandomTile();
    }
  }

  placeRandomTile() {
    const pos = this.grid.randomEmptyPosition();
    const value = this.randomValue();
    if (pos) {
      const tile = new Tile(pos, value);
      this.grid.setTile(tile);
    }
  }

  randomValue() {
    return [2, 2, 2, 2, 4][Math.floor(Math.random() * 5)]
  }

  move(dir) {
    const vector = this.vector(dir);
    this.score += this.grid.move(vector);
    this.placeRandomTile();
  }

  vector(dir) {
    const VECTORS = {
      'up': [-1, 0],
      'down': [1, 0],
      'left': [0, -1],
      'right': [0, 1]
    }

    return VECTORS[dir];
  }

  over() {
    return this.availableMove() ? false : true;
  }

  availableMove() {
    return (this.emptyPositions().length || this.availableMerges());
  }

  emptyPositions() {
    return this.grid.emptyPositions();
  }

  availableMerges() {
    return this.grid.availableMerges();
  }
}

export default Game;
