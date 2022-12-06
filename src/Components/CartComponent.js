import React, { Component } from "react";
import { connect } from "react-redux";
import CartPriceSummary from "./NavCart/CartPriceSummary";
import Cart from "./NavCart/Cart";
import styled from "styled-components";
import { success } from "./styles/colors.styles";

const NavCart = styled.div`
  width: 325px;
  position: relative;
  right: 4pc;
  background: #fff;
  padding: 10px;
`;

const CartTitle = styled.label`
  display: block;
  margin-bottom: 1.5pc;
`;
const CartDisplay = styled.div`
  display: grid;
  grid-row-gap: 1.5pc;
  max-height: 340px;
  overflow-y: scroll;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    width: 3px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${success};
    border-radius: 10px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }
`;

class CartComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cart: this.props.cart,
    };
  }
  render() {
    return (
      <NavCart>
        <div className="">
          <CartTitle className="font-medium">
            <span className="font-semibold">My Bag,</span>{" "}
            {this.state.cart.length} item(s)
          </CartTitle>

          <CartDisplay>
            {this.state.cart.length > 0 &&
              this.state.cart.map((item, index) => (
                <Cart item={item} key={index.toString()} state={item} />
              ))}
          </CartDisplay>

          <CartPriceSummary />
        </div>
      </NavCart>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart.cart,
});

export default connect(mapStateToProps)(CartComponent)