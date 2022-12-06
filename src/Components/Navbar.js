import { withRouter } from "Hooks/CustomHooks";
import React, { Component } from "react";
import { connect } from "react-redux";
import { switchCurrency } from "Redux/index";
import { CaretLeftOutline, CartIcon, Loading, Logo } from "../Assets/svg";
import CartComponent from "./CartComponent";
import NavLinkItem from "./NavLink";
import {
  Navbar,
  LogoContainer,
  Overlay,
  NavActions,
  AppLoader,
} from "./styles/navbar.styles";

class Nav extends Component {
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
        <AppLoader>
          <Loading />
        </AppLoader>
      );
    }
  }

  render() {
    const toggleCart = (field) => () =>
      this.setState((prev) => ({ ...prev, [field]: !prev[field] }));

    const updateCurrency = (currency) => () =>
      this.props.dispatch(switchCurrency(currency));

    return (
      <Navbar className="container">
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

        <LogoContainer
          onClick={() => {
            this.props.navigate("/");
            this.props.request("all");
          }}
        >
          <Logo />
        </LogoContainer>

        <NavActions>
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
                    <li
                      className=""
                      key={index.toString()}
                      onClick={updateCurrency({ label, symbol })}
                    >
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
            {this.props.cart.cart.length > 0 && (
              <span className="badge">{this.props.cart.cart.length}</span>
            )}

            {this.state.showCart && (
              <Overlay>
                <CartComponent />
              </Overlay>
            )}
          </li>
        </NavActions>
      </Navbar>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart,
  currency: state.appActions.activeCurrency,
});

export default connect(mapStateToProps)(withRouter(Nav));
