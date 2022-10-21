export default function useCheckLogin() {
  return JSON.parse(localStorage.getItem('access_token'))
}
