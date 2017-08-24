import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MovingBubble extends Component {

  // add to return() fun for debugging:
  // {JSON.stringify(this.props)}

  state = {
    borderStylez : ['dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset']
  }

  render() {
    return (
      <div className="all-things">
        {this.props.bubbles.map((bubble) => (
          <div className="bubble" style={{
              color: `${bubble.color}`, // maybe better later backgroundColor instead
              fontSize: `${bubble.size}em`,
              borderStyle: `${this.state.borderStylez.sort(function() {return 0.5 - Math.random()})[0]}`
            }}>
            <span>{bubble.title}</span>
          </div>
        ))}
      </div>
    )
  }

}

export default MovingBubble;
