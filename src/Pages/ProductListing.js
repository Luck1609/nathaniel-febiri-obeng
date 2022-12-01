import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import ProductCard from "Components/ProductCard";
import { withRouter } from "Hooks/CustomHooks";

const Container = styled.div`
  h1 {
    margin: 60px 0;
    font-size: 35px;
  }

  .main {
    display: grid;
    width: 100%;
    grid-template-columns: auto auto auto;
    column-gap: 3pc;
    row-gap: 8pc;
    margin-bottom: 6pc;
  }
`

class ProductListing extends Component {
  render() {
    const title = this.props.location.pathname.split('/')[1];
    // console.log('Category title', this.props)

    return (
      <Container>
        <h1>{ title.charAt(0).toUpperCase() }{ title.substring(1) }</h1>

        <div className="main">
          {
            this.props.products.map((product, index) => <ProductCard data={product} key={index.toString()} />)
          }
        </div>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.appActions.products
})

export default connect(mapStateToProps)(withRouter(ProductListing));
