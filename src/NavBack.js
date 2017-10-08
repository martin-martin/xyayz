import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NavBack extends Component {
  render() {
    return (
      <div className="navback">
        <Link to="/">back</Link>
      </div>
    )
  }
}

export default NavBack
