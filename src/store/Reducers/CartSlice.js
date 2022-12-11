import { createSlice, current } from '@reduxjs/toolkit'
import _ from 'lodash'

const initialState = {
  numberCart: 0,
  isLoading: false,
  amountCart: 0,
  Carts: [],
}
const Cart = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    loadingCart: (state) => {
      state.isLoading = !state.isLoading
    },
    increaseQuantity: (state, { payload }) => {
      const { index, value } = payload
      state.Carts[index].quantity = value
      const priceChange = state.Carts[index].product_price * value
      state.amountCart += priceChange - state.Carts[index].product_price
      state.isLoading = false
    },
    decreaseQuantity: (state, { payload }) => {
      const { index, value } = payload
      state.Carts[index].quantity = value
      const price = state.Carts[index].product_price * value
      state.amountCart -= price
      state.isLoading = false
    },
    deleteProduct: (state, { payload }) => {
      const ID = payload.index
      state.numberCart = state.numberCart - 1
      state.amountCart -=
        state.Carts[ID].product_price * state.Carts[ID].quantity
      state.Carts = state.Carts.filter((item, index) => index !== payload.index)
    },
    addProduct: (state, { payload }) => {
      const { propertyCapacity, propertyColor } = payload.info
      const { id, product_price: price } = payload.product
      const dataProduct = _.pick(payload.product, [
        'id',
        'product_title',
        'product_image',
        'product_price',
        'properties',
      ])
      const { Carts } = current(state)
      if (!Carts.length) {
        state.Carts.push({
          ...dataProduct,
          quantity: 1,
          capacity_id: propertyCapacity,
          color_id: propertyColor,
        })
        state.numberCart += 1
        state.amountCart += price
        return
      }
      const checkID = Carts.find(
        (item) =>
          item.capacity_id === propertyCapacity &&
          item.color_id === propertyColor,
      )
      if (checkID) {
        // eslint-disable-next-line array-callback-return
        Carts.map((item, index) => {
          if (
            item.id === id &&
            item.capacity_id === propertyCapacity &&
            item.color_id === propertyColor
          ) {
            const updateItem = {
              ...item,
              quantity: item.quantity + 1,
            }
            state.Carts[index] = updateItem
            state.amountCart += price * updateItem.quantity
            // eslint-disable-next-line no-useless-return, array-callback-return
          }
        })
        return
      }
      state.Carts.push({
        ...dataProduct,
        quantity: 1,
        capacity_id: propertyCapacity,
        color_id: propertyColor,
      })
      state.numberCart += 1
      state.amountCart += price
    },
  },
})
export const {
  loadingCart,
  increaseQuantity,
  decreaseQuantity,
  deleteProduct,
  addProduct,
} = Cart.actions
export default Cart.reducer
