import React from 'react'
import { Col, Row, Card } from 'antd'

const PostGroup = () => {
  return (
    <>
      <section>
        <div className='bg-white mt-6 px-2 py-2 rounded-lg shadow-md'>
          <Row gutter='20'>
            <Col span='14'>
              <Card
                hoverable
                style={{
                  width: 480,
                  float: 'left',
                }}
                cover={
                  <img
                    alt=''
                    src='https://images.fpt.shop/unsafe/fit-in/490x326/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/11/2/638029989961821055_dsc09752.JPG'
                  />
                }
              >
                <h1 className='text-lg font-semibold'>
                  Trên tay OPPO A17k: Ngoại hình hiện đại, pin lớn sử dụng thoải
                  mái, giá 3.29 triệu đồng
                </h1>
                <p className='text-black-200'>0 - 17 giờ trước</p>
              </Card>
            </Col>
            <Col span='10'>
              <div className='hover:shadow-md 0.5s'>
                <img
                  width='160'
                  className='float-left mr-2'
                  alt=''
                  src='https://images.fpt.shop/unsafe/fit-in/120x80/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/11/2/638030022256603088_giam-30-cho-he-sinh-thai-apple-khi-mua-iphone-fpt-shop-c.jpg'
                />
                <h1 className='text-sm tracking-wide font-semibold pl-2'>
                  Trên tay OPPO A17k: Ngoại hình hiện đại, pin lớn sử dụng thoải
                  mái, giá 3.29 triệu
                </h1>
                <p className='text-black'>0 - 17 giờ trước</p>
              </div>
              <div className='hover:shadow-md 0.5s'>
                <img
                  width='160'
                  className='float-left mr-2'
                  alt=''
                  src='https://images.fpt.shop/unsafe/fit-in/120x80/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/10/31/638028349936363720_realme-c33-tren-tay-cover.jpg'
                />
                <h1 className='text-sm tracking-wide font-semibold pl-2'>
                  Trên tay OPPO A17k: Ngoại hình hiện đại, pin lớn sử dụng thoải
                  mái, giá 3.29 triệu
                </h1>
                <p className='text-black'>0 - 17 giờ trước</p>
              </div>
              <div className='hover:shadow-md 0.5s'>
                <img
                  width='160'
                  className='float-left mr-2'
                  alt=''
                  src='https://images.fpt.shop/unsafe/fit-in/120x80/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/10/30/638027511748716253_oppo-a98-cover.jpeg'
                />
                <h1 className='text-sm tracking-wide font-semibold pl-2'>
                  Trên tay OPPO A17k: Ngoại hình hiện đại, pin lớn sử dụng thoải
                  mái, giá 3.29 triệu
                </h1>
                <p className='text-black'>0 - 17 giờ trước</p>
              </div>
              <div className='hover:shadow-md 0.5s'>
                <img
                  width='160'
                  className='float-left mr-2'
                  alt=''
                  src='https://images.fpt.shop/unsafe/fit-in/120x80/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/10/29/638026591239585498_galaxy-s23-ultra-camera-cover.jpeg'
                />
                <h1 className='text-sm tracking-wide font-semibold pl-2'>
                  Trên tay OPPO A17k: Ngoại hình hiện đại, pin lớn sử dụng thoải
                  mái, giá 3.29 triệu
                </h1>
                <p className='text-black'>0 - 17 giờ trước</p>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  )
}

export default PostGroup
