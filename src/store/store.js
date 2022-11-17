import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './Reducers/couterSlice.js'
import productsListReducer from './Reducers/ProductReducer.js'
import cartReducer from './Reducers/CartReducer.js'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    products: productsListReducer,
    cart: cartReducer,
  },
})
