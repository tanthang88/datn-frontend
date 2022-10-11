import { Layout } from 'antd'
import { HeaderTop } from './HeaderTop'
import '../../scss/header.scss'
import { Navigation } from './Nav.jsx'

const { Header } = Layout

const MainHeader = () => (
  <>
    <Header className='h-14 header-top'>
      <HeaderTop />
    </Header>
    <Navigation />
  </>
)

export default MainHeader
