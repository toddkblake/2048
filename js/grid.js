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

  eachPos(callback) {
    this.grid.forEach((row, x) => {
      row.forEach((tile, y) => {
        callback(tile, x, y);
      });
    });
  }

  // if down, it should iterate grid backwards
  eachPosDown(callback) {
    for (let i = 3; i >= 0; i--) {
      let row = this.grid[i];
      row.forEach((tile) => {
        callback(tile);
      });
    }

  }

  // if right, it should iterate rows backwards
  eachPosRight(callback) {
    this.grid.forEach((row) => {
      for (let i = 3; i >= 0; i--) {
        let tile = row[i];
        callback(tile);
      }
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

  rotate90DegreesClockwise() {
    const rotated = this.emptyGrid();
    this.grid.forEach((row, x) => {
      row.forEach((tile, y) => {
        rotated[y][3 - x] = tile;
      });
    });
    this.grid = rotated;
  }

  updateTilePositions() {
    this.eachPos((tile, x, y) => {
      tile.updatePos([x, y]);
    });
  }

  move(vector) {
    const dx = vector[0];
    const dy = vector[1];

    let enumerator;
    if (dx === 1) {
      // if down, it should iterate backwards
      enumerator = this.eachPosDown.bind(this);
    } else if (dy === 1 ) {
      // if right, it should iterate rows backwards
      enumerator = this.eachPosRight.bind(this);
    } else {
      // if up or left, normal iteration
      enumerator = this.eachPos.bind(this);
    }

    let movePoints = 0;

    enumerator((tile) => {
      if (tile) {
        while(this.inBounds([tile.row + dx, tile.col + dy])) {
          if (this.empty([tile.row + dx, tile.col + dy])) {
            this.grid[tile.row][tile.col] = null;
            tile.updatePos([tile.row + dx, tile.col + dy]);
            this.grid[tile.row][tile.col] = tile;
          } else if (this.equalValue([tile.row + dx, tile.col + dy], tile)) {
            this.grid[tile.row][tile.col] = null;
            tile.updatePos([tile.row + dx, tile.col + dy]);
            tile.updateVal(tile.value * 2);
            movePoints += tile.value;
            this.grid[tile.row][tile.col] = tile;
            break;
          } else {
            break;
          }
        }
      }
    });
    return movePoints;
  }

  availableMerges() {

  }
}

export default Grid;
