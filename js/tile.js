class Tile {
  constructor(pos, value) {
    this.row = pos[0];
    this.col = pos[1];
    this.value = value;
  }

  update(pos) {
    this.row = pos[0];
    this.col = pos[1]
  }
}

export default Tile;
