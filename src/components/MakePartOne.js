import React, { Component } from 'react'

export class MakePartOne extends Component {
  render() {
    return (
      <li>
        <img src={this.props.imageUrl} />
      </li>
    )
  }
}

export default MakePartOne
