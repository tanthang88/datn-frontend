import { NavLink } from 'react-router-dom'

export function HeaderTopItem(props) {
  console.log(props)
  return (
    <>
      <NavLink to={props.linkTo}>
        <div className='flex justify-center flex-col items-center'>
          <div
            className='text-2xl text-white text-center
          '
          >
            {props.icon}
          </div>
          <div>
            <span className='text-white text-sm font-medium mt-0.5'>
              {props.title}
            </span>
          </div>
        </div>
      </NavLink>
    </>
  )
}
