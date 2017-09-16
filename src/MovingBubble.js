import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class MovingBubble extends Component {

state = {
    borderStylez : ['dotted', 'dashed', 'solid', 'double'],
    multiplier: 1,
    bubbles: [
      {
        title: 'imageinations',
        link: 'https://www.xyayz/imageinations',
        color: 'orange',
        size: 1,
        speed: 0
      },
      {
        title: 'notes',
        link: 'https://www.xyayz/notes',
        color: 'lightblue',
        size: 2,
        speed: 0
      },
      {
        title: 'me',
        link: 'https://www.xyayz/me',
        color: 'lightgreen',
        size: 0.5,
        speed: 0
      }
    ]
  }

  render() {
    return (
      <div className="all-things">
        {this.state.bubbles.map((bubble, i) => (
          <div
            className="bubble"
            key={i}
            style={{
              color: `${bubble.color}`,
              fontSize: `${bubble.size}em`,
              borderStyle: `${this.state.borderStylez.sort(() => {return 0.5 - Math.random()})[0]}`
            }}>
            <Link to={"/" + bubble.title} style={{color: `${bubble.color}`}}>
              {bubble.title}
            </Link>
          </div>
        ))}
      </div>
    )
  }

}

export default MovingBubble;
