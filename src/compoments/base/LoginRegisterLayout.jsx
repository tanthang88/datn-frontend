import { Layout, BackTop } from 'antd'
import '../../App.css'
import logo from '../../assets/react.svg'
const { Content, Footer, Header } = Layout

export default function LoginRegisterLayout({ children, type }) {
  return (
    <Layout className='login-register-layout'>
      <Header className='background-white'>
        <div className='xl:container py-4'>
          <div className=''>
            <div className='flex flex-row items-center gap-4'>
              <img src={logo} alt='Logo' />
              <h1 className='text-xl text-black p-0 m-0'>{type}</h1>
            </div>
          </div>
        </div>
      </Header>
      <Content
        className='w-full py-10'
        style={{ backgroundColor: 'rgb(238, 77, 45)' }}
      >
        {children}
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
