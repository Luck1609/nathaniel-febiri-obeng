import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class LinkItem extends Component {
  render() {
    return (
      <Link to={this.props.url} state={this.props.state}>
        { this.props.children }
      </Link>
    )
  }
}
