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
      <Footer className='text-white'>
        <MainFooter />
      </Footer>
      <BackTop>
        <div className='text-white'>
          <AiFillUpCircle size={50} />
          <h1 className='text-white w-28'>Về đầu trang</h1>
        </div>
      </BackTop>
      <section>
        <p className='text-center mb-0 py-2' style={{fontSize: '10px', color:'#6d6d6d', background: '#fff'}}>
          © 2007 - 2022 Công Ty Cổ Phần Bán Lẻ Kỹ Thuật Số FPT / Địa chỉ: 261 -
          263 Khánh Hội, P2, Q4, TP. Hồ Chí Minh / GPĐKKD số 0311609355 do Sở
          KHĐT TP.HCM cấp ngày 08/03/2012. GP số 47/GP-TTĐT do sở TTTT TP HCM
          cấp ngày 02/07/2018. Điện thoại: (028)73023456. Email:
          fptshop@fpt.com.vn. Chịu trách nhiệm nội dung: Nguyễn Trịnh Nhật Linh.
        </p>
      </section>
    </Layout>
  )
}
