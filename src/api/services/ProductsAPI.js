import { publicRequest } from '../axiosClient.js'

export const ProductsAPI = {
  getAllProduct: async () => {
    try {
      return await publicRequest.get('product')
    } catch (e) {
      console.error(e)
    }
  },
}
