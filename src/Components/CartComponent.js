import React, { Component, forwardRef, Fragment } from "react";
import { connect } from "react-redux";
import CartPriceSummary from "./NavCart/CartPriceSummary";
import Cart from "./NavCart/Cart";
import styled from "styled-components";
import { media, success } from "./styles/colors.styles";
import ClickAwayListener from "./ClickAwayListener";

const NavCart = styled.div`
  width: 95%;
  position: relative;
  top: 3px;
  margin: auto;
  background: #fff;
  max-height: 500px;
  ${media.md} {
    margin: 0 auto;
  }

  ${media.md} {
    right: 4pc;
    top: 0;
    width: 325px;
    margin: 0;
  }

  >div {
    padding: 16px;
  }
`;

const CartTitle = styled.label`
  display: block;
  margin-bottom: 1.5pc;
`;

const CartDisplay = styled.div`
  display: grid;
  grid-row-gap: 1.5pc;
  max-height: 300px;
  ${media.md} {
    max-height: 250px;
  }
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

    const { toggle } = this.props;

    return (
      <ClickAwayListener 
        close={toggle(null)}
        content={
          forwardRef((props, ref) => <NavCart ref={ref}>
              <div className="">
                <CartTitle className="font-medium">
                  <span className="font-semibold">My Bag,</span>
                  {this.props.cart.length} item(s)
                </CartTitle>

                <CartDisplay>
                  {this.props.cart.length > 0 &&
                    this.props.cart.map((item, index) => (
                      <Fragment key={index.toString()}>
                        <Cart item={item} index={index} />
                      </Fragment>
                    ))}
                </CartDisplay>

                <CartPriceSummary toggle={toggle(null)} />
              </div>
            </NavCart>
          )
        }
      />
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart.cart,
});

export default connect(mapStateToProps)(CartComponent)