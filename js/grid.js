class Grid {
  constructor() {
    this.grid = this.emptyGrid();
  }

  emptyGrid() {
    const grid = []
    for (let i = 0; i < 4; i++) {
      const row = [];
      for (let j = 0; j < 4; j++) {
        row.push(null);
      }
      grid.push(row);
    }
    return grid;
  }

  getTile(pos) {
    let row;
    let col;
    [row, col] = pos;
    return this.grid[row][col];
  }

  setTile(tile) {
    this.grid[tile.row][tile.col] = tile;
  }

  eachTile(callback) {
    this.tiles().forEach((tile) => {
      callback(tile);
    })
  }

  eachPos(callback) {
    this.grid.forEach((row) => {
      row.forEach((tile) => {
        callback(tile);
      });
    });
  }

  tiles() {
    const tiles = [];
    this.eachPos((tile) => {
      if (tile) {
        tiles.push(tile);
      }
    });
    return tiles;
  }

  emptyPositions() {
    const emptyPositions = [];
    this.grid.forEach((row, rowIdx) => {
      row.forEach((tile, colIdx) => {
        if (!tile) {
          emptyPositions.push([rowIdx, colIdx]);
        }
      });
    });
    return emptyPositions;
  }

  randomEmptyPosition() {
    const emptyPositions = this.emptyPositions();
    return emptyPositions[Math.floor(Math.random() * emptyPositions.length)];
  }

  inBounds(pos) {
    let row = pos[0];
    let col = pos[1];
    return (row >= 0 && row < 4 && col >= 0 && col < 4);
  }

  empty(pos) {
    let row = pos[0];
    let col = pos[1];
    return (this.grid[row][col] === null);
  }

  equalValue(pos, tile) {
    let row = pos[0];
    let col = pos[1];
    return (this.grid[row][col].value === tile.value);
  }

  move(vector) {
    const dx = vector[0];
    const dy = vector[1];
    this.eachPos((tile) => {
      if (tile) {
        while(this.inBounds([tile.row + dx, tile.col + dy])) {
          if (this.empty([tile.row + dx, tile.col + dy])) {
            this.grid[tile.row][tile.col] = null;
            tile.update([tile.row + dx, tile.col + dy]);
            this.grid[tile.row][tile.col] = tile;
          } else {
            break;
          }
        }
      }
    });
  }

  availableMerges() {

  }
}

export default Grid;
