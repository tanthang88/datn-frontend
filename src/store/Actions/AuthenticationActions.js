import { publicRequest } from '../../api/axiosClient.js'
import { message } from 'antd'

export const handleLogin = async (formValue) => {
  message.loading('Đang xử lí ...', 1)
  try {
    return await publicRequest.post('/client/login', formValue)
  } catch (e) {
    console.log(e)
    message.info(e.response.data.message, 2)
  }
}

export const handleRegisterUser = async (formValue) => {
  message.loading('Đang đăng kí tài khoản ...', 1)
  try {
    return await publicRequest.post('/client/register', formValue)
  } catch (e) {
    console.log(e)
    message.info(e.response.data.message, 2)
  }
}
