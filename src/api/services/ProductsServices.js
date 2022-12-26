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
  const { data } = await publicRequest.get(`product/${payload}/related`)
  return data
}

export const createComment = async (id, payload) => {
  const { data } = await publicRequest.post(`product/${id}/comment`, payload)
  return data
}

export const fetchProductByPropertiesId = async (id, payload) => {
  const { data } = await publicRequest.get(
    `product/variantion/${id}/propertie`,
    { params: payload },
  )
  return data
}

export const fetchProductFilter = async () => {
  const { data } = await publicRequest.get(`product/filter`)
  return data
}

export const fetchProductSort = async (payload) => {
  const { data } = await publicRequest.get(`product/sort/`)
  return data
}

export const fetchProductsByCategoryFilter = async (id, payload) => {
  const { data } = await publicRequest.get(`product/filter/${id}/filter`, {
    params: payload,
  })
  return data
}

export const fetchPost = async () => {
  const { data } = await publicRequest.get(`post/all`)
  return data
}
