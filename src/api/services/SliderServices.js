import { publicRequest } from '../axiosClient.js'
export const fetchSlider = async () => {
  const { data } = await publicRequest.get('slider')
  return data
}

export const fetchSliderByType = async (payload) => {
  const { data } = await publicRequest.get(`slider/types/${payload}`)
  return data
}
