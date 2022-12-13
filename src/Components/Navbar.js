import React, { Component } from "react";
import { withRouter } from "Hooks/CustomHooks";
import { connect } from "react-redux";
import { switchCurrency } from "Redux/index";
import { CaretLeftOutline, CartIcon, Logo, Menu } from "../Assets/svg";
import CartComponent from "./CartComponent";
import NavLinkItem from "./NavLink";
import Button from "./styles/Button";
import {
  Navbar,
  LogoContainer,
  NavActions,
  PageLinks,
  PageLinksContainer,
  NavLogo,
  NavOpener,
  Overlay
} from "./styles/navbar.styles";
import CurrencyCoverter from "./CurrencyCoverter";

const defaultState = {
      showNavAction: null,
      navOpened: false,
      activeScroll: false
    };

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = defaultState

    this.toggleCart = this.toggleCart.bind(this)
    this.updateCurrency = this.updateCurrency.bind(this)
  }


  toggleCart = (field) => () =>{
  console.log('Toggle cart field name =>', field ? "yes" : "no")
    this.setState((prev) => ({ ...prev, showNavAction: field ?? null }));
}
  updateCurrency = (currency) => {
    this.setState(defaultState)
    this.props.dispatch(switchCurrency(currency));
  }
  render() {

    const toggleNav = () => this.setState(prev => ({...prev, navOpened: !prev.navOpened}))
    const request = (item) => () => this.props.request(item)

    window?.addEventListener("scroll", (e) => {
      if (window.pageYOffset > 10 && this.state.showNavAction === "cart") this.setState(prev => ({...prev, activeScroll: true}))
      else this.setState(prev => ({...prev, activeScroll: false}))
      console.log('Scroll length', window.pageYOffset)
    });

    return (
      <Navbar className="container">
        <PageLinksContainer active={this.state.navOpened} ref={el => this.navbar = el} onClick={toggleNav}>
          <PageLinks>
            
            <NavLogo
              onClick={() => this.props.request("/all")}
            >
              <NavLinkItem
                url="/"
              >
                <Logo /> <span className="font-bold" style={{paddingLeft: "5px" }}>ScandiShop</span>
              </NavLinkItem>
            </NavLogo>

            {this.props?.navLinks
              ? this.props.navLinks.map((item, index) => {
                  return (
                    <li
                      className=""
                      key={index.toString()}
                      onClick={request(item.name.toLowerCase())}
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
          </PageLinks>
        </PageLinksContainer>

        <NavOpener>
          <Button background="transparent" onClick={toggleNav}>
            <Menu /> 
          </Button>

          <LogoContainer
            onClick={() => {
              this.props.navigate("/");
              this.props.request("all");
            }}
          >
            <Logo />
          </LogoContainer>
        </NavOpener>

        <NavActions>
          <li className="" onClick={this.toggleCart("currency")}>
            <span>{this.props.currency?.symbol}</span>
            <CaretLeftOutline color="#1D1F22" style={{ rotate: "-90deg" }} />

            {this.state.showNavAction === "currency" && this.props.currencies && (
              <CurrencyCoverter 
                close={this.toggleCart} 
                currencies={this.props.currencies}  
                updateCurrency={this.updateCurrency}
              />
            )}
          </li>
          <li
            className=""
            style={{ position: "relative" }}
            onClick={this.toggleCart("cart")}
          >
            <CartIcon className="cart" width="27" height="26" color="#43464E" />
            {this.props.cart.cart.length > 0 && (
              <span className="badge">{this.props.cart.cart.length}</span>
            )}

            {this.state.showNavAction === "cart" && <Overlay active={this.state.activeScroll}>
                <CartComponent toggle={this.toggleCart} />
              </Overlay>
            }
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
