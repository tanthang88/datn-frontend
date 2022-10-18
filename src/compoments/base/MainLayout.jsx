import { Layout, BackTop } from 'antd'
import MainHeader from '../header/Header.jsx'
import '../../App.css'
import { Outlet } from 'react-router'

const { Content, Footer } = Layout

export default function MainLayout() {
  return (
    <Layout className='main-layout'>
      <MainHeader />
      <Content className='w-full'>
        <Outlet />
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Footer
      </Footer>
      <BackTop>
        <div>UP</div>
      </BackTop>
    </Layout>
  )
}
