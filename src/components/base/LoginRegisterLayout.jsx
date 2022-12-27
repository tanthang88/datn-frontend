import { Layout } from 'antd'
import { Footer } from '../footer/Footer.jsx'
import '../../App.scss'
import SiteLogo from '../../assets/images/logo-2.png'
const { Content, Header } = Layout

export default function LoginRegisterLayout({ children, type }) {
  return (
    <Layout className='login-register-layout'>
      <Header className='background-white'>
        <div className='xl:container'>
          <div className=''>
            <div
              className='flex flex-row items-center gap-4'
              style={{ marginTop: '-1rem' }}
            >
              <img src={SiteLogo} alt='Logo' className='w-40' />
              <h1
                className='text-xl text-black p-0 m-0 relative'
                id='type-page'
              >
                <div className='ml-5 mt-1.5'>{type}</div>
              </h1>
            </div>
          </div>
        </div>
      </Header>
      <Content
        className='w-full py-40'
        style={{ backgroundColor: 'rgb(238, 77, 45)' }}
      >
        {children}
      </Content>
      <Footer />
      <section>
        <p
          className='text-center mb-0 py-2'
          style={{ fontSize: '10px', color: '#6d6d6d', background: '#fff' }}
        >
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
