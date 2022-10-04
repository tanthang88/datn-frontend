import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './couterSlice.jsx'
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})
