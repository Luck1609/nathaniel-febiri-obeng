import React, { Component, Fragment } from 'react'
import { Attributes, CounterBtn } from 'Components/styles/cart_page.styles';
import { getActiveCurrency } from 'helper';
import styled from 'styled-components';
import { CaretLeft, CaretRight, Minus, Plus } from 'Assets/svg';
import Button from 'Components/styles/Button';
import { changeAttribute, decrement, increment } from 'Redux/cartReducer';
import { connect } from 'react-redux';
import { media } from 'Components/styles/colors.styles';


const CartPageComponent = styled.div`
  position: relative;
  /* display: flex; */
  padding: 10px;

  ul.cart-item {
    padding-left: 0;
    display: block;
    width: 100%;

    .product-details-info {
      list-style-type: none;
      display: flex;
      ${media.sm} {
        flex-flow: column;
      }
      border-top: 1px solid $border;
      padding: 2pc 0;

      .details {
        flex-basis: 75%;
        width: auto;

        .labels {
          font-size: 26px;

          h3 {
            margin-bottom: 5px;
          }

          label {
            margin-bottom: 10px;
            display: inline-block;
          }

          span {
            font-size: 20px;
            font-weight: bold;
            display: block;
            margin: 14px 0;
          }
        }

        div {
          margin-bottom: 10px;
        }

        .sizes {
          ul {
            display: inline-block;

            li {
              margin-right: 8px;
            }
          }
        }
      }
    }
  }
`

const AttributeContainer = styled(Attributes)`
  ul {
    padding-left: 0;
    display: block;
    width: 100%;

  }
  label {
    display: inline-block;
    margin-bottom: 3px;
  }

  &.size {
    li {
      width: 63px;
      height: 45px;
      padding: 0;
    }
  }
`

const Actions = styled.div`
  display: flex;
  flex-basis: 25%;

  .counter {
    margin-right: 1pc;
  }

  .action-buttons {
    position: relative;
    
    img {
      width: 200px;
      /* height: 288px; */
    }

    .btn-container {
      position: absolute;
      bottom: 5px; 
      right: 0;
    }
  }
`

class CartCard extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      imgStep: 0
    }
    this.handleNext = this.handleNext.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
  }

  handleNext = () => this.setState({imgStep:this.state.imgStep + 1})
  handlePrev = () => this.setState({imgStep: this.state.imgStep - 1})

  render() {
    const { product, currency, dispatch, index, ...info } = this.props;

    const switchAttrib = (data) => () => {
      dispatch(changeAttribute({index, data}))
    }

    const dispatchAction = (action) => dispatch(action);

    return (
      <CartPageComponent>
        <div className="cart-component">
          <ul className="cart-item">
            <li className="product-details-info">
              {/* {
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
              } */}

              <div className="details">
                <div className="labels">
                  <h3 className="">{ product.brand }</h3>
                  <label>{ product.name }</label>
                  <span>{currency?.symbol}{ product.prices[getActiveCurrency(product.prices, currency?.label)]?.amount }</span>
                </div>

                {product.attributes.map(({ name, items }) => {
                  return (
                    <AttributeContainer className={name.toLowerCase()} key={name}>
                      <label>{name}:</label>
                      <ul className="flex">
                        {items.map(({ value, displayValue }, index) => {
                          return (
                            <Fragment key={index.toString()}>
                              {name === "Color" ? (
                                <li
                                  className={
                                    info.items[name.toLowerCase()] === value
                                      ? "active"
                                      : ""
                                  }
                                  onClick={switchAttrib({
                                    product, ...info.items,
                                    [name.toLowerCase()]: value,
                                  })}
                                >
                                  <span
                                    style={{ background: displayValue }}
                                  ></span>
                                </li>
                              ) : (
                                <li
                                  className={
                                    info.items[name.toLowerCase()] === value
                                      ? "active"
                                      : ""
                                  }
                                  onClick={switchAttrib({
                                    product, ...info.items,
                                    [name.toLowerCase()]: value,
                                  })}
                                >
                                  {displayValue}
                                </li>
                              )}
                            </Fragment>
                          );
                        })}
                      </ul>
                    </AttributeContainer>
                  );
                })}
              </div>
              
              

              <Actions>
                <div className="counter flex flex-col">
                  <CounterBtn onClick={() => dispatchAction(increment({index, count: info.items.quantity + 1}))}>
                    <Plus width="15" height="15" />
                  </CounterBtn>

                  <span className="flex">1</span>

                  <CounterBtn onClick={() => dispatchAction(decrement({index, count: info.items.quantity - 1}))}>
                    <Minus width="15" height="15" />
                  </CounterBtn>
                </div>

                <div className="action-buttons">
                  <img src={product.gallery[this.state.imgStep]} alt="" className="" />

                  <div className="btn-container">
                    <Button
                      background="transparent"
                      disabled={this.state.imgStep === 0}
                      onClick={this.handlePrev}
                    >
                      <CaretLeft />
                    </Button>

                    <Button
                      background="transparent"
                      onClick={this.handleNext}
                      disabled={this.state.imgStep + 1 === product.gallery.length}
                    >
                      <CaretRight />
                    </Button>
                  </div>
                </div>
              </Actions>
            </li>
          </ul>
        </div>
      </CartPageComponent>
    )
  }
}

const mapStateToProps = (state) => ({})

export default connect(mapStateToProps)(CartCard)