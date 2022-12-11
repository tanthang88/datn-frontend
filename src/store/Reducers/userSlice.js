import { createSlice } from '@reduxjs/toolkit'
import {
  loginUser,
  logoutUser,
  registerUser,
} from '../Services/UserServices.js'

// initialize userToken from local storage
const userToken = localStorage.getItem('access_token')
  ? localStorage.getItem('access_token')
  : null
const initialState = {
  loading: false,
  userInfo: null, // for user object
  userToken, // for storing the JWT
  error: null,
  success: false, // for monitoring the registration process.
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUserInfo: (state, { payload }) => {
      state.loading = false
      state.userInfo = payload
    },
  },
  extraReducers: {
    // Register
    [registerUser.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.success = true // registration successful
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },
    // Login
    [loginUser.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.success = true
      state.userInfo = payload?.user
      // delete payload.user
      state.userToken = payload?.access_token
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },
    // Logout
    [logoutUser.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [logoutUser.fulfilled]: (state, { payload }) => {
      localStorage.removeItem('access_token')
      localStorage.removeItem('persist:root')
      state.loading = false
      state.success = false
      state.userInfo = null
      state.userToken = null
    },
    [logoutUser.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },
  },
})
export const { updateUserInfo } = userSlice.actions
export default userSlice.reducer
