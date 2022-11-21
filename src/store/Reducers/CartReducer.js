import { createSlice } from '@reduxjs/toolkit'
import _ from 'lodash'
const initialState = {
  numberCart: 5,
  isLoading: false,
  Carts: [
    {
      id: 1,
      product_img:
        'https://cdn.tgdd.vn/Products/Images/42/289702/iphone-14-pro-max-bac-thumb-600x600.jpg',
      product_name: 'Iphone 14 Pro Max 512GB',
      product_price: 43990000,
      product_color: 'Xanh lá',
      product_quantity: 1,
    },
    {
      id: 2,
      product_img:
        'https://cdn.tgdd.vn/Products/Images/42/289702/iphone-14-pro-max-bac-thumb-600x600.jpg',
      product_name: 'Iphone 14 Pro Max 512GB',
      product_price: 43990000,
      product_color: 'Xanh lá',
      product_quantity: 3,
    },
    {
      id: 3,
      product_img:
        'https://cdn.tgdd.vn/Products/Images/42/289702/iphone-14-pro-max-bac-thumb-600x600.jpg',
      product_name: 'Iphone 14 Pro Max 512GB',
      product_price: 43990000,
      product_color: 'Xanh lá',
      product_quantity: 2,
    },
    {
      id: 4,
      product_img:
        'https://cdn.tgdd.vn/Products/Images/42/289702/iphone-14-pro-max-bac-thumb-600x600.jpg',
      product_name: 'Iphone 14 Pro Max 512GB',
      product_price: 43990000,
      product_color: 'Xanh lá',
      product_quantity: 4,
    },
    {
      id: 5,
      product_img:
        'https://cdn.tgdd.vn/Products/Images/42/289702/iphone-14-pro-max-bac-thumb-600x600.jpg',
      product_name: 'Iphone 14 Pro Max 512GB',
      product_price: 43990000,
      product_color: 'Xanh lá',
      product_quantity: 1,
    },
  ],
}
const Cart = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    loadingCart: (state) => {
      state.isLoading = !state.isLoading
    },
    increaseQuantity: (state, action) => {
      state.Carts[action.payload.index].product_quantity = action.payload.value
      state.isLoading = false
    },
    decreaseQuantity: (state, action) => {
      state.Carts[action.payload.index].product_quantity = action.payload.value
      // state.isLoading = false
    },
    deleteProduct: (state, action) => {
      const { id, quantity } = action.payload
      console.log(id, quantity)
      // state.Carts.map((item, index) => {
      //   if (item.id === id) {
      //     console.log('pk')
      //   }
      // })
      // state.Carts.map((product) => {
      //   console.log(state.Carts[1])
      // })
    },
  },
})
export const {
  loadingCart,
  increaseQuantity,
  decreaseQuantity,
  deleteProduct,
} = Cart.actions
export default Cart.reducer
