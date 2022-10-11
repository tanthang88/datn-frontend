import { NavLink } from 'react-router-dom'

export function HeaderTopItem({ title, icon, linkTo }) {
  return (
    <NavLink to={linkTo}>
      <div className='flex justify-center flex-col items-center'>
        <div className='text-2xl text-white text-center'>{icon}</div>
        <p className='text-white text-sm font-medium mt-0.5'>{title}</p>
      </div>
    </NavLink>
  )
}
