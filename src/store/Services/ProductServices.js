import { createAsyncThunk } from '@reduxjs/toolkit'
import { ProductsAPI } from '../../api/services/ProductsAPI.js'

export const fetchListProducts = createAsyncThunk(
  'products/fetchListProducts',
  async (params, { rejectWithValue }) => {
    try {
      return await ProductsAPI.getAllProduct()
    } catch (e) {
      console.log(rejectWithValue(e.response.data))
      return rejectWithValue('Opps! Error')
    }
  },
)
