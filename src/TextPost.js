import React, { Component } from 'react'
import NavBack from './NavBack'
import notes from './data/notes.json'

class TextPost extends Component {

  state = notes

  render() {
    return (
        <div className="notebook">
          <NavBack/>
          <div className="padding"></div>
        {this.state.notes.map((note, i) => (
          <div className="text-note" key={i}>
            <h1>{note.title}</h1>
            <div dangerouslySetInnerHTML={{__html: note.body}}></div>
          </div>
        ))}
        </div>
    )
  }
}

export default TextPost
