import { createSlice, current } from '@reduxjs/toolkit'

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
    addProduct: (state, { payload }) => {
      const { id, product_price: price } = payload
      const { Carts } = current(state)
      if (!Carts.length) {
        state.products.push(payload)
        state.numberCart += 1
        state.amountCart += price
        return
      }
      const checkID = Carts.find((item) => item.id === id)
      if (checkID) {
        // eslint-disable-next-line array-callback-return
        Carts.map((item, index) => {
          if (item.id === id) {
            const updateItem = {
              ...item,
              quantity: item.quantity + 1,
            }
            state.Carts[index] = updateItem
            state.amountCart += price * updateItem.quantity
            // eslint-disable-next-line no-useless-return, array-callback-return
            return
          }
        })
        return
      }
      state.Carts.push({ ...payload, quantity: 1 })
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
