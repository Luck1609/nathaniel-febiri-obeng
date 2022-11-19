import { img } from 'Assets/img/index'
import { Minus, Plus } from 'Assets/svg'
import Button from 'Components/Button'
import React, { Component } from 'react'

export default class Cart extends Component {
  render() {
    return (
      <div className="cart-component">
        <label>
          <span>My Bag,</span>  3 items
        </label>

        <div className="cart-item">
        
          <div className="remove-item">
            <p className="">Remove item from cart?</p>
            <div className="">
              <Button className="" style={{background: "#e54d4d", display: "inline-block", padding: "8px", width: "50px"}} onClick={() => alert('Yes')}>
                Yes
              </Button>
              <Button className="" style={{background: "#5ECE7B", display: "inline-block", padding: "8px", width: "50px", marginLeft: "10px"}} onClick={() => alert('No')}>
                No
              </Button>
            </div>
          </div>


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
                {/* <li className=""></li> */}
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

        <div className="cart-item">

          <div className="remove-item">
            <p className="">Remove item from cart?</p>
            <div className="">
              <Button className="" style={{background: "#e54d4d", display: "inline-block", padding: "8px", width: "50px"}} onClick={() => alert('Yes')}>
                Yes
              </Button>
              <Button className="" style={{background: "#5ECE7B", display: "inline-block", padding: "8px", width: "50px", marginLeft: "10px"}} onClick={() => alert('No')}>
                No
              </Button>
            </div>
          </div>


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
                {/* <li className=""></li> */}
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
