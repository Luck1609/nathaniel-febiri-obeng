import React, { Component } from 'react'
import Layout from 'Components/Layout'
import ProductCard from 'Components/ProductCard'
import { img } from 'Assets/img'

export default class ProductListing extends Component {


  render() {
    
    return (
      <Layout>
        <h1 className="header">Women</h1>
        <div className="main">
          <ProductCard img={img.sweater} />
          <ProductCard img={img.blouse} />
          <ProductCard img={img.coat} />
          <ProductCard img={img.bag} />
        </div>
      </Layout>
    )
  }
}
