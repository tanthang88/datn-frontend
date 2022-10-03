import { Outlet } from 'react-router-dom'
import Header from '../compoments/header/header'
const Home = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default Home
