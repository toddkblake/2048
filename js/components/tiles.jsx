import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Tile from './tile';

class Tiles extends React.Component {
  constructor(props) {
    super(props);
  }

  handleAdd() {

  }

  handleRemove() {

  }

  render() {
    const { game } = this.props;
    return (
      <div className="tiles">
        <ReactCSSTransitionGroup
          transitionName="tile"
          transitionEnterTimeout={100}
          transitionLeaveTimeout={100}
        >
          {
            game.grid.tiles().map((tile, idx) => <Tile tile={ tile } key={ tile.id } />)
          }
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default Tiles;
