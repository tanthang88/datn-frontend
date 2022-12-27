import GridContentLayout from '../../../components/base/GridContentLayout.jsx'
import {ProductItem} from '../../../components/product/ProductItem.jsx'
import {Col} from 'antd'
import {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'

export const SellingProducts = () => {
  const [productSelling, setProductSelling] = useState([])
  const data = useSelector((state) => state.products.entities)
  useEffect(() => {
    data &&
    setProductSelling(
        data.filter((item) => item.product_outstanding === 1).slice(0, 8),
    )
  }, [data])
  return (
    <GridContentLayout gutter={[0, 24]} classNameContainer='px-4 py-4'>
      <div className='w-full inline-flex items-baseline gap-2 px-3'>
        <h1 className='mb-0 font-bold uppercase text-2xl text-red-custom leading-8'>
          sản phẩm nổi bật
        </h1>
      </div>
      {productSelling &&
        productSelling.map((item, i) => (
          <Col span={6} key={i}>
            <ProductItem data={item} />
          </Col>
        ))}
    </GridContentLayout>
  )
}
