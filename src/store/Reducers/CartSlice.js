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
      const Carts = state.Carts
      const { itemID, productID, colorID, capacityID, propertyLabel, slug } =
        payload

      const check = state.Carts.findIndex(function (cart) {
        return (
          cart.id === productID &&
          cart.color_id === colorID &&
          cart.capacity_id === capacityID
        )
      })
      if (slug === 'mau-sac') Carts[itemID].labelColor = propertyLabel
      if (slug === 'dung-luong') Carts[itemID].labelCapacity = propertyLabel
      Carts[itemID].color_id = colorID
      Carts[itemID].capacity_id = capacityID
      if (check === -1) return
      state.numberCart -= 1
      const priceBefore =
        state.Carts[itemID].quantity * state.Carts[itemID].product_price
      state.Carts[itemID].quantity += state.Carts[check].quantity
      const priceAfter =
        state.Carts[itemID].quantity * state.Carts[itemID].product_price
      const priceItemDuplicate =
        state.Carts[check].product_price * state.Carts[check].quantity

      state.amountCart -= priceItemDuplicate
      state.amountCart = state.amountCart + (priceAfter - priceBefore)
      state.Carts = state.Carts.filter((item, i) => i !== check)
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
      dataProduct.labelColor = null
      dataProduct.labelCapacity = null
      dataProduct.prop_attr_color = []
      dataProduct.prop_attr_capacity = []
      dataProduct?.properties.forEach((prop) => {
        const label = prop?.propertie_value
        const convertLabel = label.charAt(0).toUpperCase() + label.slice(1)
        if (prop.propertie_slug === 'mau-sac') {
          dataProduct.prop_attr_color.push({
            slug: prop?.propertie_slug,
            label: convertLabel,
            value: prop?.id,
          })
          dataProduct.labelColor = convertLabel
        } else {
          dataProduct.prop_attr_capacity.push({
            slug: prop?.propertie_slug,
            label: convertLabel,
            value: prop?.id,
          })
          dataProduct.labelCapacity = convertLabel
        }
      })
      const { Carts } = current(state)
      if (!Carts.length) {
        state.Carts.push({
          ...dataProduct,
          quantity: 1,
          color_id: propertyColor,
          capacity_id: propertyCapacity,
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
        color_id: propertyColor,
        capacity_id: propertyCapacity,
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
