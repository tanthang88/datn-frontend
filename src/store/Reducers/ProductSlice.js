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
export default listProductsSlice.reducer
