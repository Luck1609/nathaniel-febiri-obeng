import React, { Component, Fragment } from "react";
import { connect } from 'react-redux';
import CartCard from "./CartCard";

class Cart extends Component {

  render() {
    const { cart, currency } = this.props

    return (
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
      </>
    );
  }
}

const mapStateToProps = (state) => ({cart: state.cart.cart, currency: state.appActions.activeCurrency})

export default connect(mapStateToProps)(Cart)