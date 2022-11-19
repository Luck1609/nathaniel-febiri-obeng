import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './Cart'
import ProductListing from './ProductListing'
import ProductDescription from './ProductDescription'

export default class Entry extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/product-details" element={<ProductDescription />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    )
  }
}
