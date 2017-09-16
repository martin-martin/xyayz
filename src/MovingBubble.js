import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class MovingBubble extends Component {

state = {
    borderStylez : ['dotted', 'dashed', 'solid', 'double'],
    multiplier: 1,
    bubbles: [
      {
        title: 'imageination',
        link: 'https://www.xyayz/photography',
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
        title: 'textings',
        link: 'https://www.xyayz/writing',
        color: '#ADFF2F',
        size: 1,
        speed: 0
      },
      {
        title: 'drawings',
        link: 'https://www.xyayz/drawing',
        color: 'lavender',
        size: 3,
        speed: 0
      },
      {
        title: 'me',
        link: 'https://www.xyayz/me',
        color: 'lightgreen',
        size: 0.5,
        speed: 0
      },
      {
        title: '¯\\_(ツ)_/¯',
        link: 'https://www.xyayz/qa',
        color: '#ff6347',
        size: 2.5,
        speed: 0
      },
      {
        title: 'soundings',
        link: 'https://www.xyayz/music',
        color: '#ffd700',
        size: 1,
        speed: 0
      },
      {
        title: '/\\ °',
        link: 'https://www.xyayz/travels',
        color: 'pink',
        size: 2,
        speed: 0
      },
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
