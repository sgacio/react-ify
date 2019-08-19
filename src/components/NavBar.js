import React, { Component } from 'react'

class NavBar extends Component {
  render() {
    return (
      <nav className="nav-bar-main">
        <nav className="nav-bar-one">
          <h3 className="test">Octodex</h3>
          <h5>Home</h5>
          <h5>FAQ</h5>
        </nav>
        <nav className="nav-bar-two">
          <h5 className="test2">Follow us on Twitter</h5>
          <h5>Back to GitHub.com</h5>
        </nav>
      </nav>
    )
  }
}

export default NavBar
