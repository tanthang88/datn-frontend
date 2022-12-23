import { Col, Row } from 'antd'
import ProductFilter from './Components/ProductFilter.jsx'
import ProductSlider from './Components/ProductSlider.jsx'
import GridLayout from './Components/GridLayout.jsx'
import '../../scss/homepage.scss'
import { useEffect, useState } from 'react'
import { fetchProductsByCategoryFilter } from '../../api/services/ProductsServices'
import { useParams } from 'react-router'
import { useLocation } from 'react-router-dom'
import SortBy from './Components/SortBy.jsx'

const iniDataSearch = {
  price: '',
  battery: '',
  screen: '',
  order_by: '',
  order_type: 'desc',
}
const MainProduct = () => {
  const { pathname } = useLocation()
  const { id } = useParams()
  const [dataSearch, setDataSearch] = useState(iniDataSearch)
  const [productsList, setProductsList] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getDataProductFilter(dataSearch)
  }, [pathname, dataSearch])

  const getDataProductFilter = (data) => {
    setLoading(true)
    fetchProductsByCategoryFilter(id, data)
      .then((data) => {
        setProductsList(data)
      })
      .catch(() => {})
      .finally(() => setLoading(false))
  }
  return (
    <>
      <section className='xl:container'>
        <Row gutter={24} className='pt-12'>
          <Col span={24}>
            <ProductSlider />
          </Col>
        </Row>
        <Row gutter={24}>
          <Col span={6}>
            <ProductFilter
              setProductsList={setProductsList}
              setDataSearch={setDataSearch}
              dataSearch={dataSearch}
            />
          </Col>
          <Col span={18} className='bg-white mt-6 mb-16 px-2 py-2 rounded-lg'>
            <SortBy
              setProductsList={setProductsList}
              setDataSearch={setDataSearch}
              dataSearch={dataSearch}
            />
            <GridLayout
              productsList={productsList}
              setProductsList={setProductsList}
              setDataSearch={setDataSearch}
              dataSearch={dataSearch}
              loading={loading}
            />
          </Col>
        </Row>
      </section>
    </>
  )
}

export default MainProduct
