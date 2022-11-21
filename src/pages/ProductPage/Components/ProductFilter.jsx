import React from 'react'
import { Checkbox, Col, Row } from 'antd'

const onChange = (checkedValues) => {
  console.log('checked = ', checkedValues)
}

const ProductFilter = () => (
  <Checkbox.Group
    style={{
      width: '100%',
    }}
    onChange={onChange}
    defaultValue={['aaa', 'bbb', 'ccc']}
  >
    <div>
      <h1 className='font-bold text-black text-base pt-5'>Hãng sản xuất</h1>
      <Row>
        <Col className='leading-loose' span={10}>
          <Checkbox value='aaa'>Tất cả</Checkbox>
        </Col>
        <Col className='leading-loose' span={10}>
          <Checkbox value='iPhone'>iPhone</Checkbox>
        </Col>
        <Col className='leading-loose' span={10}>
          <Checkbox value='Samsung'>Samsung</Checkbox>
        </Col>
        <Col className='leading-loose' span={10}>
          <Checkbox value='OPPO'>OPPO</Checkbox>
        </Col>
        <Col className='leading-loose' span={10}>
          <Checkbox value='Xiaomi'>Xiaomi</Checkbox>
        </Col>
        <Col className='leading-loose' span={10}>
          <Checkbox value='Vivo'>Vivo</Checkbox>
        </Col>
        <Col className='leading-loose' span={10}>
          <Checkbox value='Asus'>Asus</Checkbox>
        </Col>
        <Col className='leading-loose' span={10}>
          <Checkbox value='Nokia'>Nokia</Checkbox>
        </Col>
        <Col className='leading-loose' span={10}>
          <Checkbox value='Masstel'>Masstel</Checkbox>
        </Col>
        <Col className='leading-loose' span={10}>
          <Checkbox value='Realme'>Realme</Checkbox>
        </Col>
        <Col className='leading-loose' span={10}>
          <Checkbox value='Techno'>Techno</Checkbox>
        </Col>
      </Row>
      <br />
      <h1 className='font-bold text-black text-base pt-2'>Mức giá</h1>
      <Row>
        <Col className='leading-loose' span={24}>
          <Checkbox value='bbb'>Tất cả</Checkbox>
        </Col>
        <Col className='leading-loose' span={24}>
          <Checkbox value='<2tr'>Dưới 2 triệu</Checkbox>
        </Col>
        <Col className='leading-loose' span={24}>
          <Checkbox value='2-4tr'>Từ 2 - 4 triệu</Checkbox>
        </Col>
        <Col className='leading-loose' span={24}>
          <Checkbox value='4-7tr'>Từ 4 - 7 triệu</Checkbox>
        </Col>
        <Col className='leading-loose' span={24}>
          <Checkbox value='7-13tr'>Từ 7 - 13 triệu</Checkbox>
        </Col>
        <Col className='leading-loose' span={24}>
          <Checkbox value='>13tr'>Trên 13 triệu</Checkbox>
        </Col>
      </Row>
      <br />
      <h1 className='font-bold text-black text-base pt-2'>
        Tính năng đặc biệt
      </h1>
      <Row>
        <Col className='leading-loose' span={24}>
          <Checkbox value='ccc'>Tất cả</Checkbox>
        </Col>
        <Col className='leading-loose' span={24}>
          <Checkbox value='vantay'>Bảo mật vân tay</Checkbox>
        </Col>
        <Col className='leading-loose' span={24}>
          <Checkbox value='FaceID'>Nhận diện khuôn mặt</Checkbox>
        </Col>
        <Col className='leading-loose' span={24}>
          <Checkbox value='chongnuoc'>Chống nước & bụi</Checkbox>
        </Col>
        <Col className='leading-loose' span={24}>
          <Checkbox value='sacnhanh'>Sạc nhanh</Checkbox>
        </Col>
        <Col className='leading-loose' span={24}>
          <Checkbox value='>5g'>Hỗ trợ 5g</Checkbox>
        </Col>
        <Col className='leading-loose' span={24}>
          <Checkbox value='>0day'>Sạc không dây</Checkbox>
        </Col>
      </Row>
    </div>
  </Checkbox.Group>
)

export default ProductFilter
