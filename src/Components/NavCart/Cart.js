import React, { Component, Fragment } from "react";
import { Minus, Plus } from "Assets/svg";
import { connect } from "react-redux";
import { Attributes, CartItem, CounterBtn } from "../styles/cart_page.styles";

class Cart extends Component {
  render() {
    // const { dispatch } = this.props.dispatch
    // const updateCart = (product) => () => {
    //   dispatch(addToCart(product))
    // }

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
      }
    };

    const item = this.props.item?.product ?? this.props.item;

    //  console.log("Items from cart page", this.props)

    return (
      <>
        {item && (
          <CartItem>
            <div className="info">
              <h3>{item.brand}</h3>
              <label>{item.name}</label>
              <span className="font-medium">$50.00</span>
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
                                  this.props.state[name.toLowerCase()] === value
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
                                  this.props.state[name.toLowerCase()] === value
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

                <span className="flex">{this.props.state.quantity}</span>

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

const mapStateToProps = (state) => ({ cart: state.cart });

export default connect(mapStateToProps)(Cart);
