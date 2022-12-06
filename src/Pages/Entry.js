import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Cart";
import ProductListing from "./ProductListing";
import ProductDescription from "./ProductDescription";
import NotFound from "./NotFound";
import WithApolloClient from "Hooks/WithCilent";
import Layout from "Components/Layout";

export default class Entry extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route element={<WithApolloClient content={Layout} />}>
            <Route path="/:category">
              <Route index element={<WithApolloClient content={ProductListing} />} />
              <Route path="product-details" element={<WithApolloClient content={ProductDescription} />} />
              <Route path="cart" element={<Cart />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}
