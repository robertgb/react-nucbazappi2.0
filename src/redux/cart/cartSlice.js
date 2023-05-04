const { createSlice } = require('@reduxjs/toolkit');
const {
  addItemToCart,
  removeItemFromCart,
  resetShippingCost,
} = require('./cart-utils');
const { SHIPPING_COST } = require('../../utils/constants');

const initialState = {
  cartItems: [],
  shippingCost: 0,
  hidden: true,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
        shippingCost: SHIPPING_COST,
      };
    },
    removeToCart: (state, action) => {
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
        shippingCost: resetShippingCost(state.cartItems, SHIPPING_COST),
      };
    },
    clearCart: state => {
      return {
        ...state,
        cartItems: [],
        shippingCost: 0,
      };
    },
    toggleHiddenCart: state => {
      return {
        ...state,
        hidden: !state.hidden,
      };
    },
  },
});

export const { addToCart, removeToCart, clearCart, toggleHiddenCart } =
  cartSlice.actions;

export default cartSlice.reducer;
