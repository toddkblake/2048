class Tile {
  constructor(pos, value) {
    this.pos = pos;
    this.value = value;
  }

  updateTile(pos) {
    this.pos = pos;
  }

  row() {
    return this.pos[0];
  }

  col() {
    return this.pos[1];
  }
}

export default Tile;
