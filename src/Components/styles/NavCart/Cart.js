import React, { Component, Fragment } from 'react'
import { Minus, Plus } from 'Assets/svg'
import styled from 'styled-components'
import { Btn } from '../Button'
import { success, textColor } from '../colors.styles'
import { connect } from 'react-redux'

export const CartItem = styled.div`
  position: relative;
  display: flex;
  gap: 8px;
  font-size: large;
  position: relative;

  >label {
    font-size: 18px;
    margin-bottom: 1.5pc;
    padding: 8px;
  }
  

  .info {
    flex-grow: 1;
    h3 {
      margin: 0 5px 0 0;
      display: block;
      font-weight: normal;
    }
    
    >span {
      display: block;
      margin: 7px 0;
    }

    div {
      margin-bottom: 8px;

      label {
        margin-bottom: 4px;
        font-size: 14px;
        font-weight: 500;
      }
    }

    .size, .capacity {
      ul {
        li {
          border: 1px solid #000;
          /* width: 24px;
          height: 24px; */
          padding: 5px 10px;
          font-size: 14px;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          margin-right: 10px;
          cursor: pointer;
        }
        li.active {
          color: #fff;
          background: ${textColor};
        }
      }
    }

    .color {
      ul {
        display: flex;
        align-items: center;

        li {
          /* border: 1px solid #000; */
          margin-right: 5px;
          span {
            width: 20px;
            display: block;
            height: 20px;
          }
        }
        li.active {
          border: 1px solid ${success};
          padding: 1px;
        }
      }
    }
  }

  .nav-cart-actions {
    display: flex;

    .counter {
      margin-right: 8px;
    }
    img {
      width: 121px;
      height: 190px;
    }
  }
`

const CounterBtn = styled(Btn)`
  background: transparent;
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${textColor};
`

class Cart extends Component {

  render() {

    // const { dispatch } = this.props.dispatch
    // const updateCart = (product) => () => {
    //   dispatch(addToCart(product))
    // }

    

    const updateAttributes = (attrib) => () => {
      if (this.props.update) {
        
        if (attrib === 'increment') this.props.update({quantity: this.props.state.quantity += 1}) 
        else if (attrib === 'decrement')  this.props.update({quantity: this.props.state.quantity === 1 ? 1 : this.props.state.quantity -= 1})
        else this.props.update(attrib);
      }
      else {
        
      }
    }
    
    const item = this.props.item

    
    return (
      <>
        {
          this.props.item && (
            <CartItem>
              

              <div className="info">
                <h3>{ item.brand }</h3>
                <label>{ item.name }</label>
                <span className="font-medium">$50.00</span>

                {
                  item.attributes.map(({ name, items }) => {
                    return (
                      <div className={name.toLowerCase()} key={name} >
                        <label>{name}:</label>
                        <ul className="flex">
                          {
                            items.map(({value, displayValue}, index) => {
                              return <Fragment key={index.toString()}>
                                {
                                  name === 'Color' ? (
                                    <li className={this.props.state[name.toLowerCase()] === value ? "active" : ""} onClick={updateAttributes({[name.toLowerCase()]: value})}>
                                      <span style={{background: displayValue}}></span>
                                    </li>
                                  ) : (
                                    <li className={this.props.state[name.toLowerCase()] === value ? "active" : ""} onClick={updateAttributes({[name.toLowerCase()]: value})}>{ displayValue }</li>
                                  )
                                }
                              </Fragment>
                            })
                          }
                          {/* {
                            items.map(({value, displayValue}, index) => <li key={index.toString()} className={this.props.state[name] === displayValue ? "active" : ""} onClick={updateAttributes({[name.toLowerCase()]: value})}>{ displayValue }</li>)
                          } */}
                        </ul>
                      </div>
                    )
                  })
                }
              </div>

              <div className="nav-cart-actions">
                <div className="counter">
                  <CounterBtn onClick={updateAttributes('increment')}>
                    <Plus />
                  </CounterBtn>
                  
                  <span className="flex">{ this.props.state.quantity }</span>
                  
                  <CounterBtn onClick={updateAttributes('decrement')}>
                    <Minus />
                  </CounterBtn>
                </div>
                <img src={item.gallery[0]} alt="" className="" />
              </div>
            </CartItem>
          )
        }
      </>
    )
  }
}

const mapStateToProps = (state) => ({cart: state.cart});

export default connect(mapStateToProps)(Cart);