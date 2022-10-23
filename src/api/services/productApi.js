import { publicRequest } from '../axiosClient.js'

export const productAPI = {
  getAllProduct: async () => {
    try {
      return await publicRequest.get('product')
    } catch (e) {
      console.error(e)
    }
  },
}
