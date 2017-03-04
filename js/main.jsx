import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import Header from './components/header';
import Tiles from './components/tiles';
import Game from './game';

document.addEventListener('DOMContentLoaded', () => {
  const game = document.getElementById('game');
  ReactDOM.render(<GameContainer/>, game);

  const toggle = document.getElementById('toggle');
  toggle.addEventListener('click', () => {
    const html = document.getElementsByTagName('html')[0];
    html.classList.toggle('dark');
  });
});

class GameContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      game: new Game(0),
      modalIsOpen: false
    }
  }

  componentWillMount() {
    Modal.setAppElement(document.getElementById('game'));
  }

  componentDidMount() {
    document.addEventListener('keydown', event => {
      switch (event.key) {
        case 'ArrowUp': {
          event.preventDefault();
          this.state.game.move('up');
          break;
        }
        case 'ArrowDown': {
          event.preventDefault();
          this.state.game.move('down');
          break;
        }
        case 'ArrowLeft': {
          event.preventDefault();
          this.state.game.move('left');
          break;
        }
        case 'ArrowRight': {
          event.preventDefault();
          this.state.game.move('right');
          break;
        }
      }
      this.updateGame(this.state.game);
    });
  }

  updateGame(game) {
    if (game.over()) {
      this.setState({ modalIsOpen: true });
    } else {
      this.setState({ game });
    }
  }

  resetGame() {
    let game;
    if (this.state.game.score > this.state.game.bestScore) {
      game = new Game(this.state.game.score);
    } else {
      game = new Game(this.state.game.bestScore);
    }
    this.setState({ game, modalIsOpen: false });
  }

  getParent () {
    return document.querySelector('.tiles');
  }

  render () {
    return (
      <div className="game-container">
        <Modal
          isOpen={ this.state.modalIsOpen }
          contentLabel="Modal"
          className="modal-content"
          overlayClassName="modal-overlay"
          parentSelector={ this.getParent }
        >
          <h1>Game over!</h1>
          <button onClick={ this.resetGame.bind(this) }>Try again</button>
          <nav>
            <ul className="links">
              <li>
                <a href="https://github.com/toddkblake/"><i className="fa fa-github fa-2x" aria-hidden="true"></i></a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/toddkblake/"><i className="fa fa-linkedin fa-2x" aria-hidden="true"></i></a>
              </li>
              <li>
                <a href="http://toddkblake.com/"><i className="fa fa-folder-o fa-2x" aria-hidden="true"></i></a>
              </li>
            </ul>
          </nav>
        </Modal>
        <Header game={ this.state.game } resetGame={ this.resetGame.bind(this) } />
        <Tiles game={ this.state.game } />
      </div>
    );
  }
}
