import { img } from "Assets/img/index";
import { CaretLeft, CaretRight, Minus, Plus } from "Assets/svg";
import Button from "Components/styles/Button";
import { CounterBtn } from "Components/styles/cart_page.styles";
// import Button from 'Components/Button'
// import Button from 'Components/Button'
import React, { Component } from "react";

export default class Cart extends Component {
  render() {
    return (
      <div className="cart-page">
        <div className="cart-component">
          <ul className="cart-item">
            <li className="product-details-info">
              {/* <div className="remove-item">
                <p className="">Remove item from cart?</p>
                <div className="">
                  <Button className="" style={{background: "#e54d4d", display: "inline-block", padding: "8px", width: "50px"}} onClick={() => alert('Yes')}>
                    Yes
                  </Button>
                  <Button className="" style={{background: "#5ECE7B", display: "inline-block", padding: "8px", width: "50px", marginLeft: "10px"}} onClick={() => alert('No')}>
                    No
                  </Button>
                </div>
              </div> */}
              <div className="details">
                <div className="labels">
                  <h3 className="">Apollo</h3>
                  <label>Running Short</label>
                  <span>$50.00</span>
                </div>

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
                    <li className="">S</li>
                    <li className="">M</li>
                  </ul>
                </div>
              </div>

              <div className="actions">
                <div className="counter flex flex-col">
                  <CounterBtn>
                    <Plus width="15" height="15" />
                  </CounterBtn>

                  <span className="flex">1</span>

                  <CounterBtn>
                    <Minus width="15" height="15" />
                  </CounterBtn>
                </div>

                <div className="action-buttons">
                  <img src={img.sweater} alt="" className="" />

                  <div className="btn-container">
                    <Button
                      background="transparent"
                      onClick={() => alert("Left")}
                    >
                      <CaretLeft />
                    </Button>

                    <Button
                      background="transparent"
                      onClick={() => alert("Right")}
                    >
                      <CaretRight />
                    </Button>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
