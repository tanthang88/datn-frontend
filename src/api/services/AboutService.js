import { publicRequest } from '../axiosClient.js'

export const getAboutIntroduct = async () => {
  const { data } = await publicRequest.get(`about/types/gioi-thieu`)
  return data
}
export const getAboutPolicy = async () => {
  const { data } = await publicRequest.get(`about/types/chinh-sach`)
  return data
}
export const fetchAboutByType = async (payload) => {
  const { data } = await publicRequest.get(`about/types/${payload}`)
  return data
}
export const getAboutDetail = async (payload) => {
  const { data } = await publicRequest.get(`about/${payload}`)
  return data
}
export const fetchAboutsRelated = async (payload) => {
  const { data } = await publicRequest.get(`about/types/${payload}`)
  return data
}
