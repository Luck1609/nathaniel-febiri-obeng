import React, { Component } from 'react'
import { img } from 'Assets/img'
import { Minus, Plus } from '../Assets/svg'

export default class CartComponent extends Component {
  render() {
    return (
      <div className="cart-component">
        <label><span>My Bag,</span>  3 items</label>

        <div className="cart-item">
          <div className="info">
            <label>Apollo Running Short</label>
            <p>$50.00</p>
            <div className="sizes">
              <label>Size:</label>
              <ul>
                <li className="">XS</li>
                <li className="">S</li>
                <li className="">M</li>
                <li className="">L</li>
              </ul>
            </div>
            <div className="colors">
              <label>Color:</label>
              <ul>
                <li className=""></li>
                <li className="">S</li>
                <li className="">M</li>
              </ul>
            </div>
          </div>
          <div className="counter">
            <Plus width="35" height="35" />
            <span>1</span>
            <Minus width="35" height="35" />
          </div>
          <img src={img.sweater} alt="" className="" />
        </div>
      </div>
    )
  }
}
