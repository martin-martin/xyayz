import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MovingBubble extends Component {

  // add to return() fun for debugging:
  // {JSON.stringify(this.props)}
  static propTypes = {
    bubbles: PropTypes.array.isRequired
  }

  state = {
    borderStylez : ['dotted', 'dashed', 'solid', 'double']
  }

  render() {
    return (
      <div className="all-things">
      {console.log(JSON.stringify(0.5 - Math.random()))}
        {this.props.bubbles.map((bubble, i) => (
          <div
            className="bubble"
            key={i}
            style={{
              color: `${bubble.color}`,
              fontSize: `${bubble.size}em`,
              borderStyle: `${this.state.borderStylez.sort(() => {return 0.5 - Math.random()})[0]}`
            }}>
            <a href={bubble.link} style={{color: `${bubble.color}`}}>
              {bubble.title}
            </a>
          </div>
        ))}
      </div>
    )
  }

}

export default MovingBubble;
