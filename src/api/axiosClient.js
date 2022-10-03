import axios from 'axios'

const BASE_URL = 'http://localhost:80'
const instance = axios.create({
  baseURL: BASE_URL
})
instance.interceptors.request.use(
  function (config) {
    // create config before send
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  function (response) {
    // create config before take
    return response
  },
  function (error) {
    return Promise.reject(error)
  }
)
