import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import ProductCard from "Components/ProductCard";
import { withRouter } from "Hooks/CustomHooks";
import { fetchCategoryDetails } from "queries";
import { updateProducts } from "Redux/index";

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
    row-gap: 3pc;
    place-items: end;
    margin-bottom: 6pc;
  }
`

class ProductListing extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      products: []
    }
  }
  
  componentDidMount() {
  
    const data = async () => {
      const results = await this.props.client.query({
        query: fetchCategoryDetails,
        variables: {input: {title: this.props.location.pathname.split('/')[1]}}
      })
      
      this.props.dispatch(updateProducts(results.data.category.products))
    };
    data()
  }

  render() {
    const title = this.props.location.pathname.split('/')[1];

    const { products } = this.props

    // console.log('Product list', products)

    return (
      <Container>
        <h1>{ title.charAt(0).toUpperCase() }{ title.substring(1) }</h1>

        <div className="main">
          {
            products.map((product, index) => <ProductCard data={product} key={index.toString()} />)
          }
        </div>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({products: state.appActions.products})

export default connect(mapStateToProps)(withRouter(ProductListing));
