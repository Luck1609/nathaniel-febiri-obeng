import {createSlice} from "@reduxjs/toolkit";


const generalSlice = createSlice({
  name: 'general',
  initialState: {
    products: [],
    activeCurrency: null
  },
  reducers: {

    updateProducts: (state, {payload}) => {
      return {
        ...state,
        products: payload
      }
    },

    switchCurrency: (state, {payload}) => {
      return {
        ...state,
        activeCurrency: payload
      }
    },
  },
});

// destructure actions and reducer from the slice
const { actions, reducer } = generalSlice;

// export action creators
export const { updateProducts, switchCurrency } = actions;

export default reducer;