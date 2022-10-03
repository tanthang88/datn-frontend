import { HeaderTop } from './HeaderTop'
import Nav from './Nav'

const Header = () => {
  return (
    <header className="w-full flex flex-row justify-center pt-5">
      <HeaderTop />
      <Nav />
    </header>
  )
}

export default Header
