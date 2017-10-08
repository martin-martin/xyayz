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
          <details className="text-note" key={i}>
            <summary className="note-title">{note.title}</summary>
            <div className="note-body" dangerouslySetInnerHTML={{__html: note.body}}></div>
          </details>
        ))}
        </div>
    )
  }
}

export default TextPost
