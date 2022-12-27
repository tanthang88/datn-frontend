import { Avatar, Badge, Dropdown, Menu, Space } from 'antd'
import {
  DownOutlined,
  LogoutOutlined,
  ShoppingOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { FaShoppingCart, FaUserCircle } from 'react-icons/fa'
import { HiDocumentText } from 'react-icons/hi'
import { HeaderTopItem } from './HeaderTopItem'
import { Link } from 'react-router-dom'
import Search from 'antd/es/input/Search.js'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../../store/Services/UserServices.js'
import { isEmpty } from 'lodash'
import { URL, URL_BACKEND } from '../../config/constants'
import SiteLogo from '../../assets/images/logo.png'
const onSearch = (value) => console.log(value)

export function HeaderTop() {
  const dispatch = useDispatch()
  const [loadingInputSearch, setLoadingInputSearch] = useState(false)
  const { userInfo } = useSelector((state) => state.user)
  const { numberCart } = useSelector((state) => state.cart)
  const search = (e) => {
    setLoadingInputSearch(true)
    console.log(e.target.value)
    e.target.value.length === 0 ? setLoadingInputSearch(false) : ''
  }
  const menu = (
    <Menu
      items={[
        {
          key: '1',
          label: <Link to={URL.USER}>Quản lý tài khoản</Link>,
          icon: <UserOutlined />,
        },
        {
          key: '2',
          label: <Link to={URL.BILL}>Đơn hàng của tôi</Link>,
          icon: <ShoppingOutlined />,
        },
        {
          key: '3',
          label: 'Đăng xuất',
          icon: <LogoutOutlined />,
          onClick: () => {
            dispatch(logoutUser())
          },
        },
      ]}
    />
  )
  return (
    <div className='xl:container flex justify-between items-center h-full'>
      <div className='w-3/12'>
        <Link to={URL.HOME}>
          <img src={SiteLogo} alt='Logo' className='w-40' />
        </Link>
      </div>

      <div className='w-5/12 px-3'>
        <Search
          className='pt-3'
          placeholder='Nhập tên điện thoại, phụ kiện ... cần tìm'
          onSearch={onSearch}
          onChange={(e) => {
            search(e)
          }}
          size='large'
          enterButton
          loading={loadingInputSearch}
        />
      </div>
      <ul className='flex justify-around h-14 pt-3 w-4/12'>
        <li>
          <HeaderTopItem
            title='Thông tin hay'
            linkTo='/post/category/1'
            icon={<HiDocumentText />}
          />
        </li>
        <li>
          {isEmpty(userInfo) ? (
            <HeaderTopItem
              title='Tài khoản của tôi'
              linkTo='/login'
              icon={<FaUserCircle />}
            />
          ) : (
            <Dropdown overlay={menu}>
              <a onClick={(e) => e.preventDefault()}>
                <Space className='flex align-center'>
                  <div
                    className='font-semibold text-white flex flex-row items-center gap-1'
                    style={{ marginTop: '-1rem' }}
                  >
                    <Avatar
                      icon={<UserOutlined />}
                      src={URL_BACKEND + userInfo.avatar}
                    />
                    {userInfo.name}
                  </div>
                  <DownOutlined
                    style={{
                      color: 'white',
                      bottom: '.6rem',
                      position: 'relative',
                    }}
                  />
                </Space>
              </a>
            </Dropdown>
          )}
        </li>
        <li>
          <Link to='/cart'>
            <Badge
              count={numberCart}
              title='Hiện có 1000 sản phẩm trong giỏ hàng'
              offset={[-20, 0]}
            >
              <FaShoppingCart fill='#fff' size={23} className='ml-3' />
              <span className='text-white text-sm font-medium mt-0.5'>
                Giỏ hàng
              </span>
            </Badge>
          </Link>
        </li>
      </ul>
    </div>
  )
}
