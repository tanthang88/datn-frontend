import { Link } from 'react-router-dom'
import { Menu } from 'antd'
const navLinkItems = [
  {
    label: <Link to='/'>Điện thoại</Link>,
    key: 'trang-chu',
    // icon: <MailOutlined />,
  },
  {
    label: <Link to='/'>Laptop</Link>,
    key: 'laptop',
    // icon: <MailOutlined />,
  },
  {
    label: <Link to='/'>Phụ kiện</Link>,
    key: 'phu-kien',
    // icon: <MailOutlined />,
  },
  {
    label: <Link to='/test'>Page test</Link>,
    key: 'page-test',
    // icon: <MailOutlined />,
  },
]
const Navigation = () => {
  return (
    <section className='bg-black'>
      <nav className='xl:container mx-auto bg-black text-white'>
        <Menu
          mode='horizontal'
          items={navLinkItems}
          style={{ height: '100%', color: 'white' }}
        />
      </nav>
    </section>
  )
}

export { Navigation }
