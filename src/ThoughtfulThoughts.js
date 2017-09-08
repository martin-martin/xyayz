import React, { Component } from 'react'

class ThoughtfulThoughts extends Component {

  state = {
    opacity: 0,
    thoughts:
      [
        "live and let leave",
        "just pee yourself",
        "who knows what 'laf' is?"
      ]
  }

  makeAppear = () => {
    this.setState((prevState) => ({
        opacity: prevState.opacity + 0.1
    }))
  }

  render() {
    return (
      <div className="thoughtful-thoughts">
        <div className="current-thought" style={{opacity: this.state.opacity}}>
          {this.state.thoughts.map((thought, i) => (<p key={i}>{thought}</p>))}
        </div>
        <button onClick={this.makeAppear}>Think for me</button>
      </div>
    )

  }
}

export default ThoughtfulThoughts
