import { createSlice, current } from '@reduxjs/toolkit'
import pick from 'lodash/pick.js'
import { verifyDiscountCode } from '../Services/CartServices.js'

const initialState = {
  numberCart: 0,
  isLoading: false,
  amountCart: 0,
  transportFee: 0,
  Carts: [],
  checkDiscount: false,
  saveMoneyDiscount: 0,
  discountMessage: null,
}
const Cart = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setTransportFee: (state, { payload }) => {
      state.transportFee = payload
      // state.amountCart -= transportFee
      // state.amountCart += payload
    },
    resetDiscountCode: (state, { payload }) => {
      state.checkDiscount = false
      state.saveMoneyDiscount = 0
    },
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
    changeProperties: (state, { payload }) => {
      const { index, productID, colorID, capacityID } = payload
      const check = state.Carts.findIndex(function (cart) {
        return (
          cart.id === productID &&
          cart.color_id === colorID &&
          cart.capacity_id === capacityID
        )
      })
      console.log(check)
      if (check !== -1) {
        console.log(check)
        state.numberCart -= 1
        state.Carts[index].quantity += state.Carts[check].quantity
        state.amountCart += state.Carts[check].product_price
        state.Carts = state.Carts.filter((item, i) => i !== check)
      }
    },
    deleteProduct: (state, { payload }) => {
      const ID = payload.index
      state.numberCart = state.numberCart - 1
      state.numberCart === 0
        ? (state.amountCart = 0)
        : (state.amountCart -=
            state.Carts[ID].product_price * state.Carts[ID].quantity)
      state.Carts = state.Carts.filter((item, index) => index !== payload.index)
    },
    addProduct: (state, { payload }) => {
      const { propertyCapacity, propertyColor } = payload.info
      const { id, product_price: price } = payload.product
      const dataProduct = pick(payload.product, [
        'id',
        'product_title',
        'product_image',
        'product_price',
        'properties',
      ])
      dataProduct.prop_attr_color = []
      dataProduct.prop_attr_capacity = []
      dataProduct?.properties.forEach((prop) => {
        const label = prop?.propertie_value
        prop.propertie_slug === 'mau-sac'
          ? dataProduct.prop_attr_color.push({
              slug: prop?.propertie_slug,
              label: label.charAt(0).toUpperCase() + label.slice(1),
              value: prop?.id,
            })
          : dataProduct.prop_attr_capacity.push({
              slug: prop?.propertie_slug,
              label: label.charAt(0).toUpperCase() + label.slice(1) + ' GB',
              value: prop?.id,
            })
      })
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
            state.amountCart = price * updateItem.quantity
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
  extraReducers: {
    [verifyDiscountCode.pending]: (state, { payload }) => {
      state.isLoading = true
      state.saveMoneyDiscount = 0
    },
    [verifyDiscountCode.fulfilled]: (state, { payload }) => {
      const { success, message } = payload[0]
      if (payload[0]?.data) {
        const result = payload[0]?.data
        state.amountCart = result.total
        state.saveMoneyDiscount = result.save_money
      }
      state.checkDiscount = success
      state.discountMessage = message
      state.isLoading = false
    },
    [verifyDiscountCode.rejected]: (state, { payload }) => {
      state.isLoading = false
      state.saveMoneyDiscount = 0
    },
  },
})
export const {
  setTransportFee,
  resetDiscountCode,
  loadingCart,
  changeProperties,
  increaseQuantity,
  decreaseQuantity,
  deleteProduct,
  addProduct,
} = Cart.actions
export default Cart.reducer
