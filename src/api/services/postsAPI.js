import { publicRequest } from '../axiosClient.js'
export const postsAPI = {
  getCategoryPost: async () => {
    return await publicRequest.get('post/categories')
  },
}
