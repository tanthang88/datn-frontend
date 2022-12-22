import { createAsyncThunk } from '@reduxjs/toolkit'
import { ProductsAPI } from '../../api/services/ProductsServices.js'

export const fetchListCategoriesProduct = createAsyncThunk(
  'products/fetchListCategoriesProduct',
  async (params, { rejectWithValue }) => {
    try {
      return await ProductsAPI.getProductCategories()
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  },
)
