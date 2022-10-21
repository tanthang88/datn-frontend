import { publicRequest } from '../../api/axiosClient.js'
import { message } from 'antd'

export async function handleLogin(formValue) {
  message.loading('Đang xử lí ...', 1)
  try {
    return await publicRequest.post('/client/login', formValue)
  } catch (e) {
    console.log(e)
    message.info(e.response.data.message, 2)
  }
}
