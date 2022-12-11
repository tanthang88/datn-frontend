import { publicRequest } from '../axiosClient.js'
export const getProfileUser = async (payload) => {
  const { data } = await publicRequest.get(`client/account/${payload}`)
  return data
}

export const updateProfileUser = async (id, payload) => {
  const config = {
    headers: {
      'content-type': 'multipart/form-data',
    },
  }
  const { data } = await publicRequest.post(
    `client/account/${id}/update`,
    payload,
    config,
  )
  return data
}
