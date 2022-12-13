import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class NavLinkItem extends Component {
  render() {

    return (
      <NavLink 
        to={this.props.url} 
        state={this.props.state} 
        style={({ isActive }) =>
          isActive ? {color: "#5ECE7B", borderBottom: "3px solid #5ECE7B", ...this.props.style} : {...this.props.style}
          
        }  
        className={this.props.className}
      >
        { this.props.children }
      </NavLink>
    )
  }
}
