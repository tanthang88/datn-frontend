import { BackTop, Layout } from 'antd'
import MainHeader from '../header/Header.jsx'
import '../../App.css'
import { Outlet } from 'react-router'
import useCheckLogin from '../../hooks/useCheckLogin.js'
import LoginContainer from '../../pages/Login/LoginContainer.jsx'

const { Content, Footer } = Layout

export default function MainLayout() {
  // const checklogin = useCheckLogin()
  // if (!checklogin) {
  //   return <LoginContainer />
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
