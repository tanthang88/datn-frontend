import { createAsyncThunk } from '@reduxjs/toolkit'
import { ProductsAPI } from '../../api/services/ProductsServices.js'

export const fetchListProducts = createAsyncThunk(
  'products/fetchListProducts',
  async (params, { rejectWithValue }) => {
    try {
      return await ProductsAPI.getAllProduct()
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  },
)
