import React from 'react';

const Tile = ({ tile }) => (
  <div className={ `tile pos-${tile.row}-${tile.col} value-${tile.value}` }>
    <span>{ tile.value }</span>
  </div>
);

export default Tile;
