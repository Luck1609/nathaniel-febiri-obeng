import React, { Component, Fragment } from "react";
import { CartIcon, Minus, Plus } from "Assets/svg";
import { connect } from "react-redux";
import {
  Attributes,
  CartItem,
  CounterBtn,
} from "Components/styles/cart_page.styles";
import { NoProducts } from "Components/styles/add_to_cart.styles";
import { textColor } from "Components/styles/colors.styles";

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

    const products = this.props.cart;

    console.log("Cart page props", products);

    return (
      <>
        {products.length > 0 ? (
          <>
            {products.map(({ product, ...item }, index) => (
              <CartItem key={index.toString()}>
                <div className="info">
                  <h3>{product.brand}</h3>
                  {console.log("Available items", item, product)}
                  <label>{product.name}</label>
                  <span className="font-medium">$50.00</span>
                  {product.attributes.map(({ name, items }) => {
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
                                      item[name.toLowerCase()] === value
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
                                      item[name.toLowerCase()] === value
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

                    <span className="flex">{item.quantity}</span>

                    <CounterBtn onClick={updateAttributes("decrement")}>
                      <Minus width={10} height={10} />
                    </CounterBtn>
                  </div>
                  <img src={product.gallery[0]} alt="" className="" />
                </div>
              </CartItem>
            ))}
          </>
        ) : (
          <NoProducts>
            {/* <div> */}
            <CartIcon color={textColor} width={50} />
            <p>No items found</p>
            {/* </div> */}
          </NoProducts>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => ({ cart: state.cart.cart });

export default connect(mapStateToProps)(Cart);
