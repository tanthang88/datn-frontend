import { Container, ContainerFullWidth } from '../base/Container'
import { NavLink } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { FaSearch } from 'react-icons/fa'
import { HeaderTopItem } from './HeaderTopItem'
import { MdAccountCircle } from 'react-icons/md'
import { BsFillFileEarmarkPostFill } from 'react-icons/bs'

export function HeaderTop() {
  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => console.log(data)
  return (
    <ContainerFullWidth className='bg-red-600'>
      <Container className='lf-header-wrap text-main flex flex-row justify-between items-center py-1'>
        <div className='lf-logo'>
          <NavLink to={'/'}>
            <img
              src='/src/assets/react.svg'
              alt='main logo'
              style={{ width: '151px', height: '40px' }}
            />
          </NavLink>
        </div>
        <div className='lf-search w-5/12 h-10'>
          <form onSubmit={handleSubmit(onSubmit)} className='relative'>
            <input
              className='w-full h-10 pl-2'
              placeholder='Nhập tên điện thoại, máy tính, phụ kiện, ... cần tìm'
              {...register('tim-kiem')}
            />
            <button
              className='absolute right-0 h-full w-12 h-full text-xl bg-black text-white pl-3.5 opacity-80'
              type='submit'
            >
              <FaSearch />
            </button>
          </form>
        </div>
        <ul className='flex flex-row gap-4 w-4/12 px-8'>
          <li>
            <HeaderTopItem
              icon={<BsFillFileEarmarkPostFill />}
              title='Thông tin hay'
              linkTo='tin-tuc'
            />
          </li>
          <li>
            <HeaderTopItem
              icon={<MdAccountCircle />}
              title='Tài khoản của tôi'
              linkTo='test'
            />
          </li>
          <li>
            <HeaderTopItem />
          </li>
        </ul>
      </Container>
    </ContainerFullWidth>
  )
}
