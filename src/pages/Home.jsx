import { Outlet } from 'react-router-dom'
import Header from '../compoments/header/header'
import { Container, ContainerFullWidth } from '../compoments/base/Container'
const Home = () => {
  return (
    <>
      <ContainerFullWidth>
        <Container className='bg-main'>
          <Header />
          <Outlet />
        </Container>
      </ContainerFullWidth>
    </>
  )
}

export default Home
