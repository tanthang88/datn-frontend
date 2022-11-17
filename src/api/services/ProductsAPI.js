import { publicRequest } from '../axiosClient.js'

export const ProductsAPI = {
  getAllProduct: async () => {
    return await publicRequest.get('product')
  },
}
