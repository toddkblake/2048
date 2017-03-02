import React from 'react';
import ReactDOM from 'react-dom';
import Game from './game';

document.addEventListener('DOMContentLoaded', () => {
  const game = document.getElementById('game');
  ReactDOM.render(<Tiles game={ new Game }/>, game);
});

const Tiles = ({ game }) => {
  return (
    <div className="tiles">
      {
        game.grid.tiles().map((tile, idx) => <Tile tile={ tile } key={ idx } />)
      }
    </div>
  );
}

const Tile = ({ tile }) => (
  <div className={ `tile pos-${tile.row()}-${tile.col()} value-${tile.value}` }>
    <span>{ tile.value }</span>
  </div>
);
