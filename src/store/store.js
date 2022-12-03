import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './Reducers/couterSlice.js'
import productReducer from './Reducers/ProductSlice.js'
import productCategoriesReducer from './Reducers/ProductCategoriesSlice.js'
import cartReducer from './Reducers/CartSlice.js'
import userReducer from './Reducers/userSlice.js'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    products: productReducer,
    cart: cartReducer,
    productCategory: productCategoriesReducer,
    user: userReducer,
  },
})
