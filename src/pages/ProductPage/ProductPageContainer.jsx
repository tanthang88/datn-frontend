import slice from 'lodash/slice'
import { Col, Row } from 'antd'
import ProductFilter from './Components/ProductFilter.jsx'
import ProductSlider from './Components/ProductSlider.jsx'
import GridLayout from './Components/GridLayout.jsx'
import '../../scss/homepage.scss'
import { useEffect, useState } from 'react'
import {
  fetchProductsByCategoryFilter,
  fetchProductsSearch,
} from '../../api/services/ProductsServices'
import { useParams } from 'react-router'
import { useLocation } from 'react-router-dom'
import SortBy from './Components/SortBy.jsx'
import { fetchSliderByType } from '../../api/services/SliderServices.js'
import {
  DEFAULT_PAGINATION_OBJECT,
  LIST_TYPE_SLIDER,
  URL,
} from '../../config/constants.js'
import PaginationCustom from './Components/Pagination.jsx'
import { getListDiscountCode } from '../../api/services/DiscountCodeServices.js'

const iniDataSearch = {
  price: '',
  battery: '',
  screen: '',
  product_name: '',
  order_by: '',
  order_type: 'desc',
  page: '1',
}
const ProductPageContainer = () => {
  const { pathname } = useLocation()
  const { id } = useParams()
  const [dataSearch, setDataSearch] = useState(iniDataSearch)
  const [productsList, setProductsList] = useState([])
  const [loading, setLoading] = useState(true)
  const [sliders, setSliders] = useState([])
  const [pagination, setPagination] = useState(DEFAULT_PAGINATION_OBJECT)
  const [discounts, setDiscounts] = useState([])

  useEffect(() => {
    getDataProductFilter(dataSearch)
  }, [pathname, dataSearch])

  const getDataProductFilter = (data) => {
    setLoading(true)
    if (pathname.includes('/search/')) {
      const newData = { ...data, product_name: id }
      fetchProductsSearch(newData)
        .then((data) => {
          setProductsList(data.data)
          setPagination({
            currentPage: data.current_page,
            lastPage: data.last_page,
            totalPage: data.total,
            perPage: data.per_page,
            from: data.from,
            to: data.to,
          })
        })
        .catch(() => {})
        .finally(() => setLoading(false))
      return
    }
    const newDataFilter = { ...data, product_name: '' }
    fetchProductsByCategoryFilter(id, newDataFilter)
      .then((data) => {
        setProductsList(data.data)
        setPagination({
          currentPage: data.current_page,
          lastPage: data.last_page,
          totalPage: data.total,
          perPage: data.per_page,
          from: data.from,
          to: data.to,
        })
      })
      .catch(() => {})
      .finally(() => setLoading(false))
  }
  useEffect(() => {
    const typeValue = pathname.includes(URL.CATEGORY)
      ? LIST_TYPE_SLIDER.PRODUCT
      : LIST_TYPE_SLIDER.ACCESSORY

    fetchSliderByType(typeValue).then((data) => {
      const dataNewSlider = slice(data, 0, 8)
      setSliders(dataNewSlider)
    })
  }, [])

  useEffect(() => {
    getListDiscountCode().then((data) => {
      setDiscounts(data)
    })
  }, [])

  const handleChangePage = (current) => {
    setPagination({ ...pagination, currentPage: current })
    setDataSearch({ ...dataSearch, page: current })
  }

  return (
    <>
      <section className='xl:container'>
        <Row gutter={24} className='pt-12'>
          <Col span={24}>
            <ProductSlider sliders={sliders} />
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
          <Col
            span={18}
            className='bg-white mt-6 mb-16 px-2 py-2 rounded-lg relative'
          >
            <div className='w-full flex justify-between px-5 py-5'>
              <SortBy
                setProductsList={setProductsList}
                setDataSearch={setDataSearch}
                dataSearch={dataSearch}
              />
              <PaginationCustom
                pagination={pagination}
                handleChangePage={handleChangePage}
              />
            </div>

            <GridLayout
              productsList={productsList}
              setProductsList={setProductsList}
              setDataSearch={setDataSearch}
              dataSearch={dataSearch}
              loading={loading}
              discounts={discounts}
            />
          </Col>
        </Row>
      </section>
    </>
  )
}

export default ProductPageContainer
