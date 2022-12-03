import { createAsyncThunk } from '@reduxjs/toolkit'
import { ProductsAPI } from '../../api/services/ProductsAPI.js'

export const fetchListCategoriesProduct = createAsyncThunk(
  'products/fetchListCategoriesProduct',
  async (params, { rejectWithValue }) => {
    try {
      return await ProductsAPI.getProductCategories()
    } catch (e) {
      console.log(e)
      console.log(rejectWithValue(e.response.data))
      return rejectWithValue('Opps! Error')
    }
  },
)
