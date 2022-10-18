import axios from 'axios'

const publicRequest = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  },
  withCredentials: false,
  responseType: 'json',
  responseEncoding: 'utf8',
})
publicRequest.interceptors.request.use(
  function (config) {
    // create config before send
    return config
  },
  function (error) {
    return Promise.reject(error)
  },
)

publicRequest.interceptors.response.use(
  function (response) {
    // create config before take
    return response.data
  },
  function (error) {
    return Promise.reject(error)
  },
)
export { publicRequest }
