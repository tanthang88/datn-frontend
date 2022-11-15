import { Col, Row } from 'antd'
import ProductFilter from './ProductFilter.jsx'
import ProductSlider from './ProductSlider.jsx'
import GridLayout from './GridLayout.jsx'
import '../../scss/homepage.scss'

const MainProduct = () => (
  <>
    <section className='xl:container'>
      <Row gutter={24} className='pt-12'>
        <Col span={24}>
          <ProductSlider />
        </Col>
      </Row>
      <Row gutter={24}>
        <Col span={6}>
          <ProductFilter />
        </Col>
        <Col span={18}>
          <GridLayout />
        </Col>
      </Row>
    </section>
  </>
)

export default MainProduct
