import { publicRequest } from '../axiosClient.js'

export const ProductsAPI = {
  getAllProduct: async () => {
    return await publicRequest.get('product')
  },
}

export const fetchProductById = async (payload) => {
  const { data } = await publicRequest.get(`product/${payload}`)
  return data
}

export const fetchCommentsProduct = async (payload) => {
  const { data } = await publicRequest.get(`product/${payload}/list_comments`)
  return data
}
