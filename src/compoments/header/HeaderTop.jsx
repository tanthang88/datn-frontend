import { Menu, Badge } from 'antd'
import { FaUserCircle } from 'react-icons/fa'
import { HiDocumentText } from 'react-icons/hi'
import { FaShoppingCart } from 'react-icons/fa'
import { HeaderTopItem } from './HeaderTopItem'
import { Link } from 'react-router-dom'
import Search from 'antd/es/input/Search.js'
import { useEffect, useState } from 'react'
const onSearch = (value) => console.log(value)
export function HeaderTop() {
  const [loadingInputSearch, setLoadingInputSearch] = useState(false)
  const search = (e) => {
    setLoadingInputSearch(true)
    console.log(e.target.value)
    e.target.value.length === 0 ? setLoadingInputSearch(false) : ''
  }

  const items = [
    { label: 'Tin tức', key: 'tin-tuc', icon: <FaUserCircle /> }, // remember to pass the key prop
    { label: 'item 2', key: 'item-2' }, // which is required
    { label: 'item 3', key: 'item-3' },
  ]
  return (
    <div className='xl:container flex justify-between items-center h-full'>
      <div className='w-3/12'>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/FPT_logo_2010.svg/1200px-FPT_logo_2010.svg.png'
          alt=''
          className='w-20'
        />
      </div>

      <div className='w-6/12 px-3'>
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
        {/*  <div className='pr-10'>*/}
        {/*    <input*/}
        {/*      type='text'*/}
        {/*      name=''*/}
        {/*      id=''*/}
        {/*      className='outline-0 h-10 w-full pl-2'*/}
        {/*    />*/}
        {/*  </div>*/}
      </div>
      <ul className='flex justify-between h-14 pt-3 w-3/12 '>
        <li>
          <HeaderTopItem
            title='Thông tin hay'
            linkTo='/'
            icon={<HiDocumentText />}
          />
        </li>
        <li>
          <HeaderTopItem
            title='Tài khoản của tôi'
            linkTo='/'
            icon={<FaUserCircle />}
          />
        </li>
        <li>
          <Link to='/cart'>
            <Badge
              count={1}
              // color='#ee4d2d'
              // size='small'
              title='Hiện có 1000 sản phẩm trong giỏ hàng'
              offset={[-30, 0]}
            >
              <FaShoppingCart fill='#fff' size={23} />
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
