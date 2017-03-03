import React from 'react';
import Tile from './tile';

const Tiles = ({ game }) => {
  return (
    <div className="tiles">
      {
        game.grid.tiles().map((tile, idx) => <Tile tile={ tile } key={ idx } />)
      }
    </div>
  );
}

export default Tiles;
