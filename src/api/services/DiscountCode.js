import { publicRequest } from '../axiosClient.js'

export const getListDiscountCode = async () => {
  const { data } = await publicRequest.get('client/discountcode')
  return data
}
