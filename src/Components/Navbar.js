import { withRouter } from "Hooks/CustomHooks";
import React, { Component } from "react";
import { connect } from "react-redux";
import { switchCurrency } from "Redux/index";
import styled from "styled-components";
import { CaretLeftOutline, CartIcon, Loading, Logo } from "../Assets/svg";
import CartComponent from "./CartComponent";
import NavLinkItem from "./NavLink";

export const Overlay = styled.div`
  position: fixed;
  left: 0;
  top: 80px;
  width: 100%;
  height: 100%;
  background: #39374838;
  z-index: 50;
  display: flex;
  justify-content: flex-end;
`
const LogoContainer = styled.div`
  cursor: pointer;
`   

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCart: false,
      showCurrency: false,
    };
  }

  displayProducts() {
    const data = this.props.data;

    if (data.loading) {
      return (
        <div className="app-loader">
          <Loading />
        </div>
      );
    }
  }

  render() {
    const toggleCart = (field) => () =>
      this.setState((prev) => ({ ...prev, [field]: !prev[field] }));

    const updateCurrency = (currency) => () => this.props.dispatch(switchCurrency(currency))


    // console.log('Nav cart options', this.props.cart)
    return (
      <nav className="navbar container">
        <ul className="">
          {this.props?.navLinks
            ? this.props.navLinks.map((item, index) => {
                return (
                  <li
                    className=""
                    key={index.toString()}
                    onClick={() => this.props.request(item.name.toLowerCase())}
                  >
                    <NavLinkItem
                      url={item.name.toLowerCase()}
                      className="nav-link"
                    >
                      {item.name.charAt(0).toUpperCase()}
                      {item.name.substring(1)}
                    </NavLinkItem>
                  </li>
                );
              })
            : null}
        </ul>

        <LogoContainer onClick={() => {
              this.props.navigate('/')
              this.props.request('all')
            }
          }
        >
          <Logo />
        </LogoContainer>

        <ul className="nav-actions">
          <li className="" onClick={toggleCart("showCurrency")}>
            <span>{this.props.currency?.symbol}</span>
            <CaretLeftOutline color="#1D1F22" style={{ rotate: "-90deg" }} />

            {this.state.showCurrency && this.props.currencies && (
              <ul className="currency-converter">
                {this.props.currencies
                  .filter(
                    (currency) => currency.label !== this.props.currency.label
                  )
                  .map(({ symbol, label }, index) => (
                    <li className="" key={index.toString()} onClick={updateCurrency({label, symbol})}>
                      {symbol} {label}
                    </li>
                  ))}
              </ul>
            )}
          </li>
          <li
            className=""
            style={{ position: "relative" }}
            onClick={toggleCart("showCart")}
          >
            <CartIcon className="cart" width="27" height="26" color="#43464E" />
            {this.props.cart.cart.length > 0 && <span className="badge">{ this.props.cart.cart.length }</span>}

            {this.state.showCart && (
              <Overlay>
                <CartComponent />
              </Overlay>
            )}
          </li>
        </ul>
      </nav>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart,
  currency: state.appActions.activeCurrency,
});

export default connect(mapStateToProps)(withRouter(Navbar));
