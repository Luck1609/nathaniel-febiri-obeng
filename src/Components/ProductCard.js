import React, { Component } from 'react'
import { CartIcon } from '../Assets/svg'

export default class ProductCard extends Component {
  render() {
    return (
      <div className="product-card">
        <img src={this.props.img} alt="" className="" />

        <div className="cart-icon">
          <CartIcon className="cart" width="27"  height="26" color="#fff" />
        </div>

        <div className="card-details">
          <label className="">Apollo Running Short</label>
          <p className="">$50.00</p>
        </div>
      </div>
    )
  }
}
