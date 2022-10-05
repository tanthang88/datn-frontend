import { NavLink } from 'react-router-dom'
const Navigation = () => {
  return (
    <nav>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='test'>Test</NavLink>
    </nav>
  )
}

export { Navigation }
