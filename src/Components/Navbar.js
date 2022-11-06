import React, { Component } from "react";
import { CartIcon, Logo } from "../Assets/svg";
import CartComponent from "./CartComponent";

class Navbar extends Component {
  state = {  } 
  render() { 
    return (
      <nav className="navbar">
        <ul className="">
          <li className="nav-link">WOMEN</li>
          <li className="nav-link">MEN</li>
          <li className="nav-link">KIDS</li>
        </ul>

        <Logo />

        <ul className="">
          <li className="nav-link">$ </li>
          <li className="nav-link">
            <CartIcon className="cart" width="27"  height="26" />

            <div className="cart-overlay">
              <CartComponent />
            </div>
          </li>
        </ul>
      </nav>
    );
  }
}
 
export default Navbar;