import { createSlice } from '@reduxjs/toolkit'
import { fetchListProducts } from '../Services/ProductServices.js'
const listProductsSlice = createSlice({
  name: 'products',
  initialState: {
    entities: [],
    isLoading: 'idle',
    hasError: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchListProducts.pending, (state, action) => {
        state.isLoading = 'pending'
        // state.hasError = false
      })
      .addCase(fetchListProducts.fulfilled, (state, action) => {
        state.entities = action.payload.data.data
        state.isLoading = 'succeeded'
        state.hasError = null
      })
      .addCase(fetchListProducts.rejected, (state, action) => {
        state.hasError = action.payload
        state.isLoading = 'failed'
      })
  },
})
export const selectProduct = (state) => state.products.entities
export const selectLoading = (state) => state.products.isLoading
export const selectErrorMessage = (state) => state.products.hasError
// export const { getProductSelling } = listProductsSlice.actions
export default listProductsSlice.reducer
