import LinkItem from "Components/Link";
import { getActiveCurrency } from "helper";
import { withRouter } from "Hooks/CustomHooks";
import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Button from "../styles/Button";

const CheckoutContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  .total {
    padding: 2pc 0;

    label {
      font-weight: 600;
    }
  }

  div {
    display: flex;
    justify-content: space-between;
  }
`;

class CartPriceSummary extends Component {
  render() {
    const {
      cart,
      currency,
      location: { pathname },
    } = this.props;

    return (
      <CheckoutContainer>
        <div className="total flex">
          <label className="grow">Total</label>
          <label>
            {currency.symbol}
            {cart
              ?.reduce((total, { product: { prices }, quantity }) => {
                const activeCurrencyIndex = getActiveCurrency(
                  prices,
                  currency.label
                );
                let price = quantity * prices[activeCurrencyIndex].amount;
                return (price += total);
              }, 0)
              .toFixed(2)}
          </label>
        </div>

        <div className="">
          <LinkItem url={`${pathname}/cart`}>
            <Button
              background="transparent"
              color="#1D1F22"
              border="1px solid black"
              width="155px"
            >
              View Bag
            </Button>
          </LinkItem>

          <Button background="#5ECE7B" width="155px">
            Checkout
          </Button>
        </div>
      </CheckoutContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart.cart,
  currency: state.appActions.activeCurrency,
});

export default connect(mapStateToProps)(withRouter(CartPriceSummary));
