import { Col, Row } from 'antd'
import ProductFilter from './Components/ProductFilter.jsx'
import ProductSlider from './Components/ProductSlider.jsx'
import GridLayout from './Components/GridLayout.jsx'
import '../../scss/homepage.scss'
import { useEffect, useState } from 'react'
import { fetchProductsByCategoryFilter } from '../../api/services/ProductsAPI.js'
import { useParams } from 'react-router'

const iniDataSearch = {
  price: '',
  battery: '',
  screen: '',
  order_by: '',
  order_type: 'desc',
}
const MainProduct = () => {
  const { id } = useParams()
  const [dataSearch, setDataSearch] = useState(iniDataSearch)

  const [productsList, setProductsList] = useState([])
  useEffect(() => {
    getDataProductFilter(dataSearch)
  }, [dataSearch])

  const getDataProductFilter = (data) => {
    fetchProductsByCategoryFilter(id, data)
      .then((data) => {
        setProductsList(data)
      })
      .catch(() => {})
      .finally(() => {})
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
          <Col span={18}>
            <GridLayout
              productsList={productsList}
              setProductsList={setProductsList}
              setDataSearch={setDataSearch}
              dataSearch={dataSearch}
            />
          </Col>
        </Row>
      </section>
    </>
  )
}

export default MainProduct
