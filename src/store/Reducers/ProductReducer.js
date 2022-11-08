import { createSlice } from '@reduxjs/toolkit'
import { fetchListProducts } from '../Services/ProductServices.js'
const listProductsSlice = createSlice({
  name: 'productList',
  initialState: {
    entities: {},
    isLoading: 'idle',
    hasError: '',
  },
  reducers: {
    incrementQuantity(state, action) {
      console.log(state, action)
      state.entities.id++
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchListProducts.pending, (state, action) => {
        state.isLoading = 'pending'
        // state.hasError = false
      })
      .addCase(fetchListProducts.fulfilled, (state, action) => {
        state.entities = action.payload
        state.isLoading = 'succeeded'
        state.hasError = null
      })
      .addCase(fetchListProducts.rejected, (state, action) => {
        state.hasError = action.payload
        state.isLoading = 'failed'
      })
  },
})
export const selectProduct = (state) => state.productsList.entities
export const selectLoading = (state) => state.productsList.isLoading
export const selectErrorMessage = (state) => state.productsList.hasError
export const { incrementQuantity } = listProductsSlice.actions
export default listProductsSlice.reducer
