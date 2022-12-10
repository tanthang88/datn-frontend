import { publicRequest } from '../axiosClient.js'

export const ProductsAPI = {
  getAllProduct: async () => {
    return await publicRequest.get('product')
  },
  getProductCategories: async () => {
    return await publicRequest.get('product/categories')
  },
  getProductOfCategoriesByID: async (ID) => {
    const { data } = await publicRequest.get(`product/categories/${ID}`)
    console.log(data)
    return data
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

export const fetchProductsRelated = async (payload) => {
  const { data } = await publicRequest.get(`product/categories/${payload}`)
  return data
}

export const fetchProductFilter = async (payload) => {
  const { data } = await publicRequest.get(`product/filter/`, payload)
  return data
}

export const fetchProductSort = async (payload) => {
  const { data } = await publicRequest.get(`product/sort/`)
  return data
}
