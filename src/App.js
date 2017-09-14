import React, { Component } from 'react';
import MovingBubble from './MovingBubble';
import TextPost from './TextPost'
import ThoughtfulThoughts from './ThoughtfulThoughts'
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <ThoughtfulThoughts/>
        <MovingBubble/>
        <TextPost/>
      </div>
    );
  }
}

export default App;
