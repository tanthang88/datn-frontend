import { MainBanner } from './Components/Banner.jsx'
import CategoryBox from './Components/CategoryBox.jsx'
import { SaleProducts } from './Components/SaleProducts.jsx'
import { SellingProducts } from './Components/SellingProducts.jsx'
import { CategoryAbout } from './Components/CategoryAbout.jsx'
import CategoryAccessory from './Components/CategoryAccessory.jsx'
import '../../scss/homepage.scss'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchListProducts } from '../../store/Services/ProductServices.js'

const HomePageContainer = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchListProducts())
  })

  return (
    <div
      className='py-10'
      style={{
        // backgroundImage:
        //   'url("https://images.fpt.shop/unsafe/fit-in/filters:quality(80):fill(transparent)/fptshop.com.vn/Uploads/Originals/2022/10/7/638007057411228462_desk-header-bg.png")',
        // backgroundColor: 'rgb(12, 14, 41)',
        backgroundImage:
          'url("https://images.fpt.shop/unsafe/fit-in/filters:quality(80):fill(transparent)/fptshop.com.vn/Uploads/Originals/2022/11/14/638040405039065739_desk-header-bg.png")',
        backgroundColor: 'rgb(190, 23, 0)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top center',
        backgroundSize: '100% auto',
      }}
    >
      <MainBanner />
      <CategoryBox />
      <SaleProducts />
      <SellingProducts />
      <CategoryAccessory />
      <CategoryAbout />
    </div>
  )
}

export default HomePageContainer
