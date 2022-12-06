import { addToCartErrors } from "helper";
import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart, toggleCart } from "Redux/cartReducer";
import {
  Modal,
  ModalContainer,
  ErrorDisplay,
  CartFooter,
} from "./styles/add_to_cart.styles";
import Button from "./styles/Button";
import { danger, success } from "./styles/colors.styles";
import Cart from "./NavCart/Cart";

const initialState = {
  quantity: 1,
  cartErrors: [],
};

class AddToCartModal extends Component {
  constructor(props) {
    super(props);

    this.state = initialState;

    this.updateState = this.updateState.bind(this);
    this.pushToCart = this.pushToCart.bind(this);
    this.showCart = this.showCart.bind(this);
  }

  updateState(params) {
    this.setState((prev) => ({
      ...prev,
      ...params,
      cartErrors: [],
    }));
  }

  pushToCart = () => {
    let cartErrors = [];

    cartErrors = addToCartErrors(
      this.state,
      this.props.modal.attributes,
      cartErrors
    );
    this.setState((prev) => ({ ...prev, cartErrors }));

    if (cartErrors.length === 0) {
      const { cartErrors, ...state } = this.state;
      this.props.dispatch(
        addToCart({
          product: this.props.modal,
          ...state,
        })
      );
      this.setState(() => initialState);
      this.showCart();
    }
  };

  showCart = () => this.props.dispatch(toggleCart(null));

  render() {
    // console.log('Cart modal state =>', this.state)

    return (
      <>
        {!this.props.modal ? (
          <></>
        ) : (
          <Modal>
            <ModalContainer>
              <Cart
                update={this.updateState}
                item={this.props.modal}
                state={this.state}
              />

              {this.state.cartErrors.length > 0 && (
                <ErrorDisplay>
                  {this.state.cartErrors.map(({ message }, index) => (
                    <li key={index.toString()}>{message}</li>
                  ))}
                </ErrorDisplay>
              )}

              <CartFooter>
                <Button
                  background={success}
                  width="150px"
                  onClick={this.pushToCart}
                >
                  Add to Cart
                </Button>
                <Button
                  background={danger}
                  width="150px"
                  disabled={
                    this.state.size && !this.state.color && !this.state.quantity
                  }
                  onClick={this.showCart}
                >
                  Close
                </Button>
              </CartFooter>
            </ModalContainer>
          </Modal>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => ({ modal: state.cart.modal });

export default connect(mapStateToProps)(AddToCartModal);
