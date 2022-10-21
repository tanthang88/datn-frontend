import axios from 'axios'
const accessToken = JSON.parse(localStorage.getItem('access_token'))

const publicRequest = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  },
})
publicRequest.interceptors.request.use(
  function (config) {
    // create config before send
    accessToken != null
      ? (config.headers.Authorization = `Bearer ${accessToken}`)
      : ''
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
