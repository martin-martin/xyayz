import React, { Component } from 'react';
import MovingBubble from './MovingBubble';
import './App.css';

class App extends Component {

  state = {
    multiplier: 1,
    bubbles: [
      {
        title: 'imageinations',
        link: 'https://xyayz/imageinations',
        color: 'orange',
        size: 1,
        speed: 0
      },
      {
        title: 'notes',
        link: 'https://xyayz/notes',
        color: 'lightblue',
        size: 2,
        speed: 0
      },
      {
        title: 'me',
        link: 'https://xyayz/me',
        color: 'lightgreen',
        size: 0.5,
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
