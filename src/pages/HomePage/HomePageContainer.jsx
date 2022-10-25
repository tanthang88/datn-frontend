import { MainBanner } from '../../compoments/banner/homepage/index.jsx'
import CategoryBox from './Compoments/CategoryBox.jsx'
import { SaleProducts } from './Compoments/SaleProducts.jsx'
import { SellingProducts } from './Compoments/SellingProducts.jsx'
import { CategoryAbout } from './Compoments/CategoryAbout.jsx'
import CategoryAccessory from './Compoments/CategoryAccessory.jsx'
import '../../scss/homepage.scss'
const HomePageContainer = () => {
  return (
    <div
      className='py-10'
      style={{
        backgroundImage:
          'url("https://images.fpt.shop/unsafe/fit-in/filters:quality(80):fill(transparent)/fptshop.com.vn/Uploads/Originals/2022/10/7/638007057411228462_desk-header-bg.png")',
        backgroundColor: 'rgb(12, 14, 41)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top center',
        backgroundSize: '100% auto',
      }}
    >
      <MainBanner />
      <CategoryBox />
      <SaleProducts />
      <SellingProducts />
      <CategoryAbout />
      <CategoryAccessory />
    </div>
  )
}

export default HomePageContainer
