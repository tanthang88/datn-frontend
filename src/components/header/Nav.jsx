import { Link } from 'react-router-dom'
import { Menu } from 'antd'
import {
  DiApple,
  BsPhone,
  FaHeadphonesAlt,
  GiBatteryPackAlt,
  MdOutlineEarbudsBattery,
} from 'react-icons/all.js'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import _ from 'lodash'

function convertData(item) {
  const categoryChild = item.children.map((item) => {
    return {
      id: item.id,
      label: item.category_name,
      icon: item.category_image,
      slug: item.category_slug,
    }
  })
  return categoryChild.map((children) => {
    let icon = <BsPhone />
    let label = <Link to={'category/' + children.id}>{children.label}</Link>
    if (item.category_slug === 'phu-kien') {
      icon = <MdOutlineEarbudsBattery />
      label = <Link to={'accessory/' + children.id}>{children.label}</Link>
    }

    return {
      label,
      key: children.label,
      icon,
    }
  })
}

const Navigation = () => {
  const [dataMenuItems, setDataMenuItems] = useState([])
  const productCate = useSelector((state) => state.productCategory.entities)
  useEffect(() => {
    const data = productCate.map(convertData)
    let dataResult = []
    data.map((item) => {
      return dataResult.push(...item)
    })
    dataResult = _.slice(dataResult, 0, 10)
    setDataMenuItems(dataResult)
  }, [productCate])

  return (
    <section className='bg-main'>
      <nav className='xl:container mx-auto text-white bg-main' id='nav'>
        <Menu
          mode='horizontal'
          items={dataMenuItems}
          style={{
            // height: '100%',
            backgroundColor: 'transparent',
            borderBottom: 'none',
          }}
        />
      </nav>
    </section>
  )
}

export { Navigation }
