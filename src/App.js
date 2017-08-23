import React, { Component } from 'react';
import MovingBubble from './MovingBubble';
import './App.css';

class App extends Component {

  state = {
    multiplier: 1,
    bubbles: [
      {
        title: 'imageinations',
        link: '',
        color: 'red',
        size: 2,
        speed: 0
      },
      {
        title: 'notes',
        link: '',
        color: 'blue',
        size: 1,
        speed: 0
      }
    ]
  }

  render() {
    return (
      <div className="App">
        <MovingBubble
          bubbles={this.state.bubbles}
        />
      </div>
    );
  }
}

export default App;
