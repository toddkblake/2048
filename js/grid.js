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
    let row;
    let col;
    [row, col] = tile.pos;
    this.grid[row][col] = tile;
  }

  eachTile(callback) {
    this.grid.forEach((row) => {
      row.forEach((tile) => {
        callback(tile);
      });
    });
  }

  tiles() {
    const tiles = [];
    this.eachTile((tile) => {
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
}

export default Grid;
