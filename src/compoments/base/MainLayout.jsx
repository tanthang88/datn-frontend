import { BackTop, Layout } from 'antd'
import MainHeader from '../header/Header.jsx'
import '../../App.css'
import { Outlet } from 'react-router'
import useCheckLogin from '../../hooks/useCheckLogin.js'
import Login from '../../pages/Login'

const { Content, Footer } = Layout

export default function MainLayout() {
  // const checklogin = useCheckLogin()
  // if (!checklogin) {
  //   return <Login />
  // }
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
