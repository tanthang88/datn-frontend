import { createAsyncThunk } from '@reduxjs/toolkit'
import { ProductsAPI } from '../../api/services/ProductsAPI.js'

export const fetchListProducts = createAsyncThunk(
  'products/fetchListProducts',
  async (params, thunkAPI) => {
    return await ProductsAPI.getAllProduct()
  },
)
