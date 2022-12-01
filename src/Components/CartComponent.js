import React, { Component } from "react";
import { connect } from "react-redux";
import CartPriceSummary from "./styles/NavCart/CartPriceSummary";
import Cart from "./styles/NavCart/Cart";
import styled from "styled-components";

const NavCart = styled.div`
  width: 325px;
  position: relative;
  right: 4pc;
  background: #fff;
  padding: 10px;
`

const CartTitle = styled.label`
  display: block;
  margin-bottom: 1.5pc;
`

class CartComponent extends Component {
  render() {

    return (
      <NavCart>
        <div className="">
          <CartTitle className="font-medium">
            <span className="font-semibold">My Bag,</span> 3 items
          </CartTitle>

          <Cart />

          <CartPriceSummary />
        </div>
      </NavCart>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart
})

export default connect(mapStateToProps)(CartComponent)