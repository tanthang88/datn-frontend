import { Menu } from 'antd'
import { FaUserCircle } from 'react-icons/fa'
import { HiDocumentText } from 'react-icons/hi'
import { FaShoppingCart } from 'react-icons/fa'
import { HeaderTopItem } from './HeaderTopItem'

export function HeaderTop() {
  const items = [
    { label: 'Tin tức', key: 'tin-tuc', icon: <FaUserCircle /> }, // remember to pass the key prop
    { label: 'item 2', key: 'item-2' }, // which is required
    { label: 'item 3', key: 'item-3' },
  ]
  return (
    <div className='xl:container flex justify-between items-center h-full'>
      <div className='w-3/12'>
        <img src='src/assets/react.svg' alt='' />
      </div>
      <div className='w-6/12 py-2'>
        <div className='pr-10'>
          <input
            type='text'
            name=''
            id=''
            className='outline-0 h-10 w-full pl-2'
          />
        </div>
      </div>
      <ul className='flex justify-between h-14 pt-3 w-3/12 '>
        <li>
          <HeaderTopItem
            title='Thông tin hay'
            linkTo='/'
            icon=<HiDocumentText />
          />
        </li>
        <li>
          <HeaderTopItem
            title='Tài khoản của tôi'
            linkTo='/'
            icon=<FaUserCircle />
          />
        </li>
        <li>
          <HeaderTopItem title='Giỏ hàng' linkTo='/' icon=<FaShoppingCart /> />
        </li>
      </ul>
    </div>
  )
}
