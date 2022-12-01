import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Cart";
import ProductListing from "./ProductListing";
import ProductDescription from "./ProductDescription";
import NotFound from "./NotFound";
import WithApolloClient from "Hooks/WithCilent";

export default class Entry extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route element={<WithApolloClient />}>
            <Route path="/:category">
              <Route index element={<ProductListing />} />
              <Route path="product-details" element={<ProductDescription />} />
            </Route>

            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }

  // export default class Entry extends Component {
  //   render() {
  //     return (
  //       <BrowserRouter>
  //         <Routes>
  //           <Route element={<Layout />}>
  //             <Route path="/:category">
  //               <Route index element={<ProductListing />} />
  //               <Route path="product-details" element={<ProductDescription />} />
  //             </Route>

  //             <Route path="/cart"  element={<Cart />} />
  //             <Route path="*"  element={<NotFound />} />
  //           </Route>
  //         </Routes>
  //       </BrowserRouter>
  //     )
  //   }
}
