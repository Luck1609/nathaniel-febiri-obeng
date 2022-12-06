import {createSlice} from "@reduxjs/toolkit";


const cartSlice = createSlice({
  name: 'cartSlice',
  initialState: {
    cart: [],
    modal: null
  },
  reducers: {
    addToCart: (state, {payload}) => {
      const inCart = state.cart.filter(item => item.product.id === payload.product.id)

      const index = state.cart.indexOf(inCart[0]);

      if (index >= 0) state.cart[index] = payload
      else state.cart = [...state.cart, payload]

      return 
    },

    removeFromCart: (state, {payload}) => {
      state.cart.filter(([index, item]) => index !== payload)
      return 
    },

    increment: (state, {payload: {index, count}}) => {
      let cart = state.cart
      cart[index].quantity += 1

      state.cart = cart; 
      // state.cart[index].quantity = count; 
      return
    },

    decrement: (state, {payload}) => {
      state.cart[payload.index].quantity = payload.count; 
      return
    },

    toggleCart: (state, {payload}) => ({
      ...state,
      modal: payload
    }),

    changeAttribute: (state, {payload: {index, data}}) => {
      state.cart[index] = data;
      return
    }
  },
});

// destructure actions and reducer from the slice
const { actions, reducer } = cartSlice;

// export action creators
export const { addToCart, increment, decrement, toggleCart, changeAttribute } = actions;

export default reducer;