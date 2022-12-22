import { createAsyncThunk } from '@reduxjs/toolkit'
import { sendCheckDiscountCode } from '../../api/services/DiscountCodeServices.js'

export const verifyDiscountCode = createAsyncThunk(
  'cart/verifyDiscountCode',
  async (params, { rejectWithValue }) => {
    try {
      return await sendCheckDiscountCode(params)
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  },
)
