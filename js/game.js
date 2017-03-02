import Grid from './grid';
import Tile from './tile';

class Game {
  constructor() {
    this.score = 0;
    this.grid = new Grid;
    this.placeRandomTile();
    this.placeRandomTile();
  }

  placeRandomTile() {
    const pos = this.grid.randomEmptyPosition();
    const value = this.randomValue();
    const tile = new Tile(pos, value);
    this.grid.setTile(tile);
  }

  randomValue() {
    return [2, 2, 2, 4][Math.floor(Math.random() * 4)]
  }
}

export default Game;
