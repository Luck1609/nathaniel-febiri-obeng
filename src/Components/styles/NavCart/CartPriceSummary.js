import LinkItem from 'Components/Link'
import React, { Component } from 'react'
import styled from 'styled-components'
import Button from '../Button'

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
`

export default class CartPriceSummary extends Component {
  render() {
    return (
      <CheckoutContainer>
        <div className="total flex">
          <label className="grow">Total</label>
          <label>$200.00</label>
        </div>

        <div className="checkout-btn">
          <LinkItem url="/cart">
            <Button
              background="transparent"
              color="#1D1F22"
              style={{
                border: "1px solid black",
                textTransform: "uppercase",
                height: "43px",
                width: "155px",
              }}
            >
              View Bag
            </Button>
          </LinkItem>

          <Button
            background="#5ECE7B"
            style={{
              textTransform: "uppercase",
              height: "43px",
              width: "155px",
            }}
          >
            Checkout
          </Button>
        </div>
      </CheckoutContainer>
    )
  }
}
