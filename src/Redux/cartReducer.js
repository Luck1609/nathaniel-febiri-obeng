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
      state.cart.splice(payload, 1)
      return 
    },

    increment: (state, {payload}) => {
      console.log('Increment')
      state.cart[payload].quantity += 1
      return
    },

    decrement: (state, {payload}) => {
      console.log('Decrement')
      state.cart[payload].quantity -= 1;
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
export const { addToCart, increment, decrement, toggleCart, changeAttribute, removeFromCart } = actions;

export default reducer;