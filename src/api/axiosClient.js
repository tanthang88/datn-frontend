import axios from 'axios'

const publicRequest = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
    withCredentials: true,
  },
})
publicRequest.interceptors.request.use(
  function (config) {
    const TOKEN = JSON.parse(localStorage.getItem('access_token'))
    config.headers.Authorization = TOKEN ? `Bearer ${TOKEN}` : ''
    return config
  },

  function (error) {
    return Promise.reject(error)
  },
)

publicRequest.interceptors.response.use(
  function (response) {
    return response.data
  },
  function (error) {
    return Promise.reject(error)
  },
)
export { publicRequest }
