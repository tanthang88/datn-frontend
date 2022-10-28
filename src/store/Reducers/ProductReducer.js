import { createSlice } from '@reduxjs/toolkit'
import { fetchListProducts } from '../Services/ProductServices.js'
const listProductsSlice = createSlice({
  name: 'productList',
  initialState: {
    entities: {},
    isLoading: 'idle',
    hasError: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchListProducts.pending, (state, action) => {
        state.isLoading = 'pending'
        state.hasError = false
      })
      .addCase(fetchListProducts.fulfilled, (state, action) => {
        state.entities = action.payload
        state.isLoading = 'succeeded'
        state.hasError = false
      })
      .addCase(fetchListProducts.rejected, (state, action) => {
        state.hasError = true
        state.isLoading = 'failed'
      })
  },
})
export default listProductsSlice.reducer
