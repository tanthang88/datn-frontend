import { publicRequest } from '../axiosClient.js'

export const getListDiscountCode = async () => {
  const { data } = await publicRequest.get('client/discountcode')
  return data
}
export const sendCheckDiscountCode = async (values) => {
  return await publicRequest.post('client/discountcode/verification', values)
}
