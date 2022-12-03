import { createSlice } from '@reduxjs/toolkit'
import { fetchListCategoriesProduct } from '../Services/ProductCategoryServices.js'

const listProductCategoriesSlice = createSlice({
  name: 'productCategories',
  initialState: {
    entities: [],
    isLoading: 'idle',
    hasError: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchListCategoriesProduct.pending, (state, action) => {
        state.isLoading = 'pending'
      })
      .addCase(fetchListCategoriesProduct.fulfilled, (state, action) => {
        state.entities = action.payload.data
        state.isLoading = 'succeeded'
      })
      .addCase(fetchListCategoriesProduct.rejected, (state, action) => {
        state.hasError = action.payload
        state.isLoading = 'failed'
      })
  },
})
export default listProductCategoriesSlice.reducer
