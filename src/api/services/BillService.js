import { publicRequest } from '../axiosClient.js'

export const fetchListBills = async () => {
  const { data } = await publicRequest.get(`client/bills`)
  return data
}

export const fetchBillDetail = async (id) => {
  const { data } = await publicRequest.get(`client/bills/${id}/detail`)
  return data
}

export const cancelBill = async (id) => {
  const { data } = await publicRequest.post(`client/bills/${id}/cancel`)
  return data
}
export const addBill = async (formValue) => {
  return await publicRequest.post(`client/bills/add_to_bill`, formValue)
}
