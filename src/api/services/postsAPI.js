import { publicRequest } from '../axiosClient.js'
export const postsAPI = {
  getCategoryPost: async () => {
    return await publicRequest.get('post/categories')
  },
  getPostOfCategoriesById: async (id) => {
    const { data } = await publicRequest.get(`post/categories/${id}`)
    return data
  },
}
