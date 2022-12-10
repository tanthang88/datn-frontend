import { combineReducers, configureStore } from '@reduxjs/toolkit'
import counterReducer from './Reducers/couterSlice.js'
import productReducer from './Reducers/ProductSlice.js'
import productCategoriesReducer from './Reducers/ProductCategoriesSlice.js'
import cartReducer from './Reducers/CartSlice.js'
import userReducer from './Reducers/userSlice.js'

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}
const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
  counter: counterReducer,
  products: productReducer,
  productCategory: productCategoriesReducer,
})
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)
