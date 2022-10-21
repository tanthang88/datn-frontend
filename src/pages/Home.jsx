import { MainBanner } from '../compoments/banner/homepage/index.jsx'
import CategoryBox from '../compoments/content/homepage/categoryBox'

const Home = () => {
  return (
    <div
      className='py-10'
      style={{
        backgroundImage:
          'url("https://images.fpt.shop/unsafe/fit-in/filters:quality(80):fill(transparent)/fptshop.com.vn/Uploads/Originals/2022/10/7/638007057411228462_desk-header-bg.png")',
        backgroundColor: 'rgb(12, 14, 41)',
        backgroundRepeat: 'round',
      }}
    >
      <MainBanner classNameContainer='px-1 py-1 my-6' />
      <CategoryBox />
    </div>
  )
}

export default Home
