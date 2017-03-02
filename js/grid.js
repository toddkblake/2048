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
    [row, col] = pos;
    return this.grid[row][col];
  }

  setTile(pos, tile) {
    [row, col] = pos;
    this.grid[row][col] = tile;
  }
}

export default Grid;
