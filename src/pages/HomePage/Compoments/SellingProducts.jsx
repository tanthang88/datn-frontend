import GridContentLayout from '../../../compoments/base/GridContentLayout.jsx'
import { ProductItems } from './ProductItems.jsx'
import { Col } from 'antd'

export const SellingProducts = () => {
  return (
    <GridContentLayout gutter={[0, 24]} classNameContainer='px-4 py-4'>
      <div className='w-full inline-flex items-baseline gap-2 px-3'>
        <h1 className='mb-0 font-bold uppercase text-2xl text-red-custom leading-8'>
          bán chạy
        </h1>
      </div>
      <Col span={6}>
        <ProductItems></ProductItems>
      </Col>
      <Col span={6}>
        <ProductItems></ProductItems>
      </Col>
      <Col span={6}>
        <ProductItems></ProductItems>
      </Col>
      <Col span={6}>
        <ProductItems></ProductItems>
      </Col>
      <Col span={6}>
        <ProductItems></ProductItems>
      </Col>
      <Col span={6}>
        <ProductItems></ProductItems>
      </Col>
      <Col span={6}>
        <ProductItems></ProductItems>
      </Col>
      <Col span={6}>
        <ProductItems></ProductItems>
      </Col>
      <Col span={6}>
        <ProductItems></ProductItems>
      </Col>
      <Col span={6}>
        <ProductItems></ProductItems>
      </Col>
      <Col span={6}>
        <ProductItems></ProductItems>
      </Col>
      <Col span={6}>
        <ProductItems></ProductItems>
      </Col>
    </GridContentLayout>
  )
}
