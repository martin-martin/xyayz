import React, { Component } from 'react'

class ThoughtfulThoughts extends Component {

  state = {
    opacity: 0.5,
    thoughts:
      [
        "live and let leave",
        "be who you car",
        "who knows what laf is?"
      ]
  }

  makeAppear = () => {
    console.log(this.state.opacity)

    // TODO: currently this causes a "RangeError: Maximum call stack size exceeded"

    // this.setState(prevState => {
    //   opacity: prevState.opacity + 0.2
    // })
  }

  render() {
    return (
      <div className="thoughtful-thoughts">
        <div className="current-thought" style={{opacity: this.state.opacity}}>
          {this.state.thoughts.map((thought, i) => (<p>{thought}</p>))}
        </div>
        <button onClick={this.makeAppear()}>Think for me</button>
      </div>
    )

  }
}

export default ThoughtfulThoughts
