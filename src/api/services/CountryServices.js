import { publicRequest } from '../axiosClient'

async function getCity() {
  try {
    return await publicRequest.get('information/city')
  } catch (error) {
    console.log(error)
  }
}
async function getDist(idDist) {
  try {
    return await publicRequest.get(`information/dist/${idDist}`)
  } catch (error) {
    console.log(error)
  }
}
export { getCity, getDist }
