import { publicRequest } from '../axiosClient.js'
export const postsAPI = {
  getCategoryPost: async () => {
    return await publicRequest.get('post/categories')
  },
  getPostOfCategoriesById: async (id) => {
    const { data } = await publicRequest.get(`post/categories/${id}`)
    return data
  },
  getAllPost: async () => {
    const { data } = await publicRequest.get(`post/all`)
    return data
  },
  getPostById: async (id) => {
    const { data } = await publicRequest.get(`post/${id}`)
    return data
  },
}
