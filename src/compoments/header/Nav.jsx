import { Link } from 'react-router-dom'
import { Menu } from 'antd'
import { FiSmartphone, DiApple } from 'react-icons/all.js'
const navLinkItems = [
  {
    label: <Link to='/'>Điện thoại</Link>,
    key: 'trang-chu',
    icon: (
      <div>
        <img src="https://img.icons8.com/ios/24/000000/iphone14-pro.png"/>
      </div>
    ),
  },
  {
    label: <Link to='/'>Laptop</Link>,
    key: 'laptop',
    icon: <DiApple />,
  },
  {
    label: <Link to='/'>Phụ kiện</Link>,
    key: 'phu-kien',
    icon: <FiSmartphone />,
  },
  {
    label: <Link to='/test'>Page test</Link>,
    key: 'y',
    icon: <DiApple />,
  },
  {
    label: <Link to='/'>Điện thoại</Link>,
    key: 'e',
    icon: <FiSmartphone />,
  },
  {
    label: <Link to='/'>Laptop</Link>,
    key: 'o',
    icon: <DiApple />,
  },
  {
    label: <Link to='/'>Phụ kiện</Link>,
    key: 'q',
    icon: <FiSmartphone />,
  },
  {
    label: <Link to='/test'>Page test</Link>,
    key: 'w',
    icon: <DiApple />,
  },
]
const Navigation = () => {
  return (
    <section className='bg-main'>
      <nav className='xl:container mx-auto text-white bg-main' id='nav'>
        <Menu
          mode='horizontal'
          items={navLinkItems}
          style={{
            // height: '100%',
            backgroundColor: 'transparent',
            borderBottom: 'none',
          }}
        />
      </nav>
    </section>
  )
}

export { Navigation }
