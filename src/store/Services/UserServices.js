import { createAsyncThunk } from '@reduxjs/toolkit'
import { publicRequest } from '../../api/axiosClient'

export const registerUser = createAsyncThunk(
  'user/register',
  async (data, { rejectWithValue }) => {
    try {
      console.log(data)
      return await publicRequest.post('/client/register', data)
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  },
)
export const loginUser = createAsyncThunk(
  'user/login',
  async (data, { rejectWithValue }) => {
    try {
      const result = await publicRequest.post('/client/login', data)
      localStorage.setItem('access_token', JSON.stringify(result?.access_token))
      return result
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  },
)
export const logoutUser = createAsyncThunk(
  'user/logout',
  async (data, { rejectWithValue }) => {
    try {
      return await publicRequest.post('/client/logout', data)
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  },
)
