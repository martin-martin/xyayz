import React, { Component } from 'react'

class ThoughtfulThoughts extends Component {

  state = {
    opacity: 0,
    currentThought: "ai!",
    thoughts:
      [
        "live and let leave",
        "just pee yourself",
        "who knows what 'laf' is?"
      ]
  }

  /**
   * Calls shuffleArray() to mix the thought items in the array,
   * then updates the state.
   */
  componentWillMount = () => {
    const shuffledThoughts = this.shuffleArray(this.state.thoughts)
    this.setState((prevState) => ({
      thoughts: shuffledThoughts
    }))
  }

  /**
   * Shuffles the items in an array. Code from stackoverflow, thanks!
   * https://stackoverflow.com/a/38103853/5717580
   */
  shuffleArray = (array) => {
    let i = array.length - 1
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      const temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }
    return array
  }

  /**
   * Increases the opacity variable in state by 0.1
   */
  makeAppear = () => {
    // TODO: include fun stuff like: when clicked 50 times text turns red : )
    if(this.state.opacity < 1) {
      this.setState((prevState) => ({
          opacity: prevState.opacity + 0.1
      }))
    }
  }

  /**
   * Serves a new thought until they run out
   * (propping it into this.state.currentThought)
   * then drops a highly motivational line for the highly motivated clicker
   */
  seedNextThought = () => {
    if(this.state.thoughts.length > 0) {
      this.setState((prevState) => ({
        currentThought: prevState.thoughts.shift(),
        opacity: 0
      }))
    } else {
      // TODO: could also add a fun changing msg at many clicks...
      this.setState({
        currentThought: "ok... now think and focus without clicking",
        opacity: 0
      })
    }
  }

  render() {
    return (
      <div className="thoughtful-thoughts">
        <p className="current-thought" style={{opacity: this.state.opacity}}>
          {this.state.currentThought}
        </p>
        <button onClick={this.makeAppear}>Focus!</button>
        <button onClick={this.seedNextThought}>Think...</button>
      </div>
    )

  }
}

export default ThoughtfulThoughts
