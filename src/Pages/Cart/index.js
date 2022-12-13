import React, { Component } from "react";
import { connect } from 'react-redux';
import { CartIcon } from "Assets/svg";
import CartCard from "./CartCard";
import { NoProducts } from "Components/styles/add_to_cart.styles";
import { border, media, success, textColor } from "Components/styles/colors.styles";
import styled from "styled-components";
import Button from "Components/styles/Button";
import { getActiveCurrency } from "helper";

const Title = styled.h1`
  margin-top: 2pc;
  padding-left: 10px;

  ${media.md} {
    margin-top: 5pc;
  }
`

const CheckoutSummary = styled.div`
  padding: 30px 40px;
  ${media.md} {
    padding: 0;
    padding: 30px 0;
  }
  margin-bottom: 3pc 0 5pc 0;
  border-top: 1px solid ${border};


  div {
    font-size: 24px;
    margin-bottom: 8px;


    label {
      display: inline-block;
      margin-right: 10px;
      padding-left: 30px;
      ${media.md} {
        padding-left: 0;
      }
    }

  }
  button {
    width: 279px;
    margin-top: 8px;
  }
`

class Cart extends Component {

  render() {
    const { cart, currency } = this.props
    // const activePriceIndex = getActiveCurrency(prices, currency?.label);
    const total = cart.reduce((total, {quantity, product: { prices }}) => (total += (quantity * prices[getActiveCurrency(prices, currency?.label)]?.amount)), 0).toFixed(2)
    const tax = (total * (5/100)).toFixed(2)
    return (
      <>
        <Title>CART</Title>

        {
          cart.length > 0 ? (
            <>
              {
                cart.map(({product, ...items}, index) => (<CartCard 
                    key={index.toString()} 
                    product={product} 
                    items={items} 
                    currency={currency}
                    index={index}
                  />
                ))
              }

              <CheckoutSummary>
                <div className="">
                  <label>Tax 3%:</label>
                  <span className="font-bold">{currency?.symbol}{tax}</span>
                </div>
                <div className="">
                  <label>Quantity:</label>
                  <span className="font-bold">{ cart.reduce((total, {quantity}) => (total += quantity), 0) }</span>
                </div>
                <div className="">
                  <label>Total:</label>
                  <span className="font-bold">{currency?.symbol}{ ((+total) + (+tax)).toFixed(2) }</span>
                </div>
                <Button background={success}>Order</Button>
              </CheckoutSummary>
            </>
          ) : (
            <NoProducts>
              <CartIcon color={textColor} width={50} />
              <p>No items found</p>
            </NoProducts>
          )
        }
      </>
    );
  }
}

const mapStateToProps = (state) => ({cart: state.cart.cart, currency: state.appActions.activeCurrency})

export default connect(mapStateToProps)(Cart)