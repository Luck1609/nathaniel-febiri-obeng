import { getActiveCurrency } from "helper";
import React, { Component } from "react";
import { connect } from "react-redux";
import { toggleCart } from "Redux/cartReducer";
import styled from "styled-components";
import { CartIcon } from "../Assets/svg";
import LinkItem from "./Link";
import { success } from "./styles/colors.styles";

const ProductCardContainer = styled.div`
  position: relative;
  /* background-color: red; */
  display: inline-flex;
  /* max-width: calc(100% / 3); */

  .product-card {
    padding: 10px;

    img {
      width: 100%;
    }

    &:hover {
      box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
    }

    .card-details {
      font-size: 18px;
      line-height: 29px;
      position: relative;
    }

    label {
      font-size: 20px;
      display: block;
      margin-top: 10px;
      padding: 8px 0;
    }

    p {
      font-size: 20px;
      display: block;
      font-weight: bold;
      margin: 0;
    }
  }

  .cart-icon {
    width: 55px;
    height: 55px;
    border-radius: 50%;
    background: ${success};
    position: absolute;
    bottom: 70px;
    right: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: hidden;
    z-index: 30;
  }

  &:hover .cart-icon {
    visibility: visible;
    cursor: pointer;
  }

  .out-of-stock {
    background: #fff;
    opacity: 0.5;
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    color: #8d8f9a;
    font-weight: normal;
  }
`;

class ProductCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: null,
    };

    this.showCart = this.showCart.bind(this);
  }

  showCart = (item) => () => this.props.dispatch(toggleCart(item));

  render() {
    const{ currency, data } = this.props;

    const activePriceindex = getActiveCurrency(data?.prices, currency?.label);

    return (
      <>
        <ProductCardContainer>
          {this.props.out && (
            <div className="out-of-stock">
              <span className="">OUT OF STOCK</span>
            </div>
          )}

          <LinkItem url="product-details" state={{ id: data.id }}>
            <div className="product-card">
              <img src={data.gallery[0]} alt="" className="" />

              <div className="card-details">
                <label className="">{data.name}</label>
                <p className="">
                  {currency?.symbol} {data.prices[activePriceindex]?.amount}
                </p>
              </div>
            </div>
          </LinkItem>

          <div className="cart-icon" onClick={this.showCart(data)}>
            <CartIcon className="cart" width="27" height="26" color="#fff" />
          </div>
        </ProductCardContainer>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  currency: state.appActions.activeCurrency,
});

export default connect(mapStateToProps)(ProductCard);
