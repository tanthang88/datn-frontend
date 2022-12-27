import { publicRequest } from '../axiosClient.js'
export const createContact = async (payload) => {
  const { data } = await publicRequest.post(`client/contact`, payload)
  return data
}
