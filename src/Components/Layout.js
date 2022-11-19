import React, { Component } from 'react'
import Navbar from './Navbar'

export default class Layout extends Component {
  

  render() {
  
    // console.log('Product listin props', this.props)
    return (
      <div>
        <Navbar />

        <main className="container">{ this.props.children }</main>
      </div>
    )
  }
}
