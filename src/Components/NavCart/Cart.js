import React, { Component, Fragment } from "react";
import { Minus, Plus } from "Assets/svg";
import { connect } from "react-redux";
import { Attributes, CartItem, CounterBtn } from "../styles/cart_page.styles";
import { getActiveCurrency } from "helper";
import { decrement, increment } from "Redux/cartReducer";
import RemoveFromCart from "./RemoveFromCart";

class Cart extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      removeItem: false
    }
  }

  render() {

    const { dispatch, index } = this.props;
    const item = this.props.item?.product ?? this.props.item, { currency } = this.props;
    const activeCurrencyIndex = getActiveCurrency(item.prices, currency?.label);

    const updateAttributes = (attrib) => () => {
      if (this.props.update) {
        if (attrib === "increment")
          this.props.update({ quantity: (this.props.state.quantity += 1) });
        else if (attrib === "decrement")
          this.props.update({
            quantity:
              this.props.state.quantity === 1
                ? 1
                : (this.props.state.quantity -= 1),
          });
        else this.props.update(attrib);
      } else {
        if (attrib === "increment") dispatch(increment(index))
        else {
          if (this.props.item.quantity === 1) this.setState({removeItem: true}, console.log('Nav cart props', this.state))
          else dispatch(decrement(index))
        }
      }
    };
    
          // console.log('Nav cart props', this.state)

    return (
      <>
        {item && (
          <CartItem>
            {
              this.state.removeItem && (
                <RemoveFromCart 

                />
              )
            }
            <div className="info">
              <h3>{item.brand}</h3>
              <label>{item.name}</label>
              <span className="font-medium">{ currency?.symbol }{ item.prices[activeCurrencyIndex]?.amount }</span>
              {item.attributes.map(({ name, items }) => {
                return (
                  <Attributes className={name.toLowerCase()} key={name}>
                    <label>{name}:</label>
                    <ul className="flex">
                      {items.map(({ value, displayValue }, index) => {
                        return (
                          <Fragment key={index.toString()}>
                            {name === "Color" ? (
                              <li
                                className={
                                  this.props.item[name.toLowerCase()] === value
                                    ? "active"
                                    : ""
                                }
                                onClick={updateAttributes({
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
                                  this.props.item[name.toLowerCase()] === value
                                    ? "active"
                                    : ""
                                }
                                onClick={updateAttributes({
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
                  </Attributes>
                );
              })}
            </div>

            <div className="nav-cart-actions">
              <div className="counter">
                <CounterBtn onClick={updateAttributes("increment")}>
                  <Plus width={10} height={10} />
                </CounterBtn>

                <span className="flex">{this.props.item.quantity}</span>

                <CounterBtn onClick={updateAttributes("decrement")}>
                  <Minus width={10} height={10} />
                </CounterBtn>
              </div>
              <img src={item.gallery[0]} alt="" className="" />
            </div>
          </CartItem>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => ({ cart: state.cart, currency: state.appActions.activeCurrency });

export default connect(mapStateToProps)(Cart);
