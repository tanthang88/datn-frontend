import {configureStore} from '@reduxjs/toolkit'
import counterReducer from './Reducers/couterSlice.js'
import productsListReducer from './Reducers/ProductReducer.js'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        productsList: productsListReducer,
    },
})
