import {createSlice} from "@reduxjs/toolkit";


const cartSlice = createSlice({
  name: 'cartSlice',
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, {payload}) => {
      // console.log('Add to cart payload', payload)
      const inCart = state.cart.filter(item => item.product.id === payload.product.id)

      // console.log('Item in cart?', inCart)
      const index = state.cart.indexOf(inCart[0]);

      const cart = inCart.length > 0 ? [...state.cart, [index] = payload ]: [...state.cart, payload]

      console.log('Item to cart', cart)

      return {
        ...state,
        cart
      }
    },

    removeFromCart: (state, {payload}) => {
      return {
        ...state,
        cart: state.cart.filter((item, index) => index !== payload), 
        payload
      }
    },

    increment: (state, {payload}) => {
      return {
        ...state,
        ...state.cart,
        [payload.index]: {
          count: state.cart[payload.index].count += 1
        }
      }
    },

    decrement: (state, {payload}) => {
      return {
        ...state,
        ...state.cart,
        [payload.index]: {
          count: state.cart[payload.index].count -= 1
        }
      }
    }
  },
});

// destructure actions and reducer from the slice
const { actions, reducer } = cartSlice;

// export action creators
export const { addToCart, increment, decrement } = actions;

export default reducer;