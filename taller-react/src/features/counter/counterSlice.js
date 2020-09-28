import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    cart: [],
    favourites: [],
    favouritesId: 0,
    filteredProducts: [],
    purchase: {
      'shippingDetails': {
        'shippingIndex': 0,
        'shippingCompany': 'Correos',
        'shippingPrice': 6.90
      }
    },
    user: {},
    userLogged: false,
    value: 0
  },
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload
    },
    login: state => {
      state.userLogged = true;
    },
    logout: state => {
      state.userLogged = false;
    },
    setCart: (state, action) => {
      state.cart = action.payload
    },
    setFavourites: (state, action) => {
      state.favourites = action.payload
    },
    setFavouritesId: (state, action) => {
      state.favouritesId = action.payload
    },
    setFilteredProducts: (state, action) => {
      state.filteredProducts = action.payload
    },
    setPurchase: (state, action) => {
      state.purchase = action.payload
    }
  }
});

export const {
  increment,
  decrement,
  incrementByAmount,
  setUser,
  login,
  logout,
  setCart,
  setFavourites,
  setFavouritesId,
  setFilteredProducts,
  setPurchase
} = counterSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const incrementAsync = amount => dispatch => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCount = state => state.counter.value;
export const selectUser = state => state.counter.user;
export const selectLogged = state => state.counter.userLogged;
export const selectCart = state => state.counter.cart;
export const selectFavourites = state => state.counter.favourites;
export const selectFavouritesId = state => state.counter.favouritesId;
export const selectFilteredProducts = state => state.counter.filteredProducts;
export const selectPurchase = state => state.counter.purchase;

export default counterSlice.reducer;
