import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { CartIcon } from '../Assets/svg'
import AddToCartModal from './styles/AddToCartModal'
import { success } from './styles/colors.styles'

const ProductCardContainer = styled.div`
  position: relative;

  .product-card {
    padding: 10px;

    img {
      width: 100%;
    }

    &:hover {
      box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
    }

    .cart-details {
      font-size: 18px;
      line-height: 29px;
    }

    .cart-icon {
      width: 55px;
      height: 55px;
      border-radius: 50%;
      background: ${success};
      position: absolute;
      bottom: 4pc;
      right: 2.5pc;
      display: flex;
      align-items: center;
      justify-content: center;
      visibility: hidden;
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
  
  

  .product-card:hover .cart-icon {
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
    color: #8D8F9A;
    font-weight: normal;
  }
`

class ProductCard extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      item: null
    }

    this.showCart = this.showCart.bind(this)
  }

  showCart = (item)  => () => this.setState({item})

  render() {
    const data = this.props.data, currency = this.props.currency

    const activePrice = data.prices.indexOf(data.prices.filter(price => price.currency.label === currency.label)[0])



    return (
      <>
        <ProductCardContainer>
          {
            this.props.out && <div className="out-of-stock">
              <span className="">OUT OF STOCK</span>
            </div>
          }
          <div className="product-card">
            
            <img src={data.gallery[0]} alt="" className="" />

            <div className="cart-icon" onClick={this.showCart(data)}>
              <CartIcon className="cart" width="27"  height="26" color="#fff" />
            </div>

            <div className="card-details">
              <label className="">{ data.name }</label>
              <p className="">{currency.symbol} { data.prices[activePrice].amount }</p>
            </div>
          </div>
        </ProductCardContainer>

        {
          this.state.item && <AddToCartModal showCart={this.showCart} item={this.state.item} />
        }
      </>
    )
  }
}

const mapStateToProps = (state) => ({ currency: state.appActions.activeCurrency })

export default connect(mapStateToProps)(ProductCard)