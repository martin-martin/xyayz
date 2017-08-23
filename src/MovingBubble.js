import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MovingBubble extends Component {

  // add to return() fun for debugging:
  // {JSON.stringify(this.props)}

  render() {
    return (
      <div className="all-things">
        {this.props.bubbles.map((bubble) => (
          <div className="bubble" style={{
              color: `${bubble.color}`, // maybe better later backgroundColor instead
              fontSize: `${bubble.size}em`
            }}>
            <span>{bubble.title}</span>
          </div>
        ))}
      </div>
    )
  }

}

export default MovingBubble;
