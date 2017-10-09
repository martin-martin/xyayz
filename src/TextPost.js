import React, { Component } from 'react'
import NavBack from './NavBack'
import notes from './data/notes.json'

class TextPost extends Component {

  state = notes

  render() {
    // how many characters a newline takes in the data
    var newlineOffset = 12
    // TODO: maybe make the char description next to the note only s-m-l
    //       depending on specific char count cut-offs

    return (
        <div className="notebook">
          <NavBack/>
          <div className="padding"></div>
        {this.state.notes.map((note, i) => (
          <details className="text-note" key={i}>
            <summary className="note-title">{note.title +
               " (+" + (note.body.length - note.title.length - newlineOffset) +
               "c)"}</summary>
            <div className="note-body" dangerouslySetInnerHTML={{__html: note.body}}></div>
          </details>
        ))}
        </div>
    )
  }
}

export default TextPost
