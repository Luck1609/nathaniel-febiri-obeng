import { combineReducers, createStore } from "@reduxjs/toolkit";
import cartReducer from "./cartReducer";
import generalReducer from ".";

// assume that the cart slice will be combined with other slices
const reducer = combineReducers({
  cart: cartReducer,
  appActions: generalReducer
});

// create the store from the combined reducer
const Store = createStore(reducer);

export default Store;
