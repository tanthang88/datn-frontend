import { Layout, BackTop } from 'antd'
import MainHeader from '../header/Header.jsx'
import '../../App.css'
import { Outlet } from 'react-router'

const { Content, Footer } = Layout
const style = {
  height: 40,
  width: 40,
  lineHeight: '40px',
  borderRadius: 4,
  backgroundColor: '#1088e9',
  color: '#fff',
  textAlign: 'center',
  fontSize: 14,
}
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
        <div style={style}>UP</div>
      </BackTop>
    </Layout>
  )
}
