import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import MovingBubble from './MovingBubble'
import TextPost from './TextPost'
import ImagePost from './ImagePost'
import ThoughtfulThoughts from './ThoughtfulThoughts'
import './App.css'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Route exact path="/" render={() => (
          <MovingBubble/>
        )}/>
        <Route path="/notes" render={() => (
          <ThoughtfulThoughts/>
        )}/>
        <Route path="/me" render={() => (
          <TextPost/>
        )}/>
        <Route path="/imageinations" render={() => (
          <ImagePost/>
        )}/>
      </div>
    );
  }
}

export default App;
