import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import MovingBubble from './MovingBubble'
import TextPost from './TextPost'
import ThoughtfulThoughts from './ThoughtfulThoughts'
import './App.css'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Route path="/" render={() => (
          <MovingBubble/>
        )}/>
        <Route path="/notes" render={() => (
          <ThoughtfulThoughts/>
        )}/>
        <Route path="/me" render={() => (
          <TextPost/>
        )}/>
      </div>
    );
  }
}

export default App;
