import { BackTop, Layout } from 'antd'
import MainHeader from '../header/Header.jsx'
import { Footer as MainFooter } from '../footer/Footer.jsx'
import '../../App.css'
import { Outlet } from 'react-router'
import { AiFillUpCircle } from 'react-icons/ai'
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
      <Footer>
        <MainFooter />
      </Footer>
      <BackTop>
        <div className='text-white'>
          <AiFillUpCircle size={50} />
          <h1 className='text-white w-28'>Về đầu trang</h1>
        </div>
      </BackTop>
      <section>helloo</section>
    </Layout>
  )
}
