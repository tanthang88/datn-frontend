import { Layout } from 'antd'
import MainHeader from '../header/Header.jsx'
import '../../App.css'
import { Outlet } from 'react-router'

const { Content, Footer } = Layout
export default function MainLayout() {
  return (
    <Layout className='main-layout'>
      <MainHeader />
      <Content className='xl:container'>
        <Outlet />
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Footer
      </Footer>
    </Layout>
  )
}
