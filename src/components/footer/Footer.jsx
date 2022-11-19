import GridContentLayout from '../base/GridContentLayout.jsx'
import { Col, Row } from 'antd'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <Row className='xl:container'>
      <Col span={6}>
        <p>
          <Link to={'/'}>
            <span>Giới thiệu về công ty</span>
          </Link>
        </p>
        <p>
          <Link to={'/'}>
            <span>Câu hỏi thường gặp mua hàng</span>
          </Link>
        </p>

        <p>
          <Link to={'/'}>
            <span>Giới thiệu máy đổi trả</span>
          </Link>
        </p>
      </Col>
      <Col span={6}>
        <p>
          <Link to={'/'}>
            <span>Chính sách trả góp</span>
          </Link>
        </p>
        <p>
          <Link to={'/'}>
            <span>Chính sách bảo mật</span>
          </Link>
        </p>
        <p>
          <Link to={'/'}>
            <span>Chính sách đổi trả</span>
          </Link>
        </p>
        <p>
          <Link to={'/'}>
            <span>Tin tuyển dụng</span>
          </Link>
        </p>
        <p>
          <Link to={'/'}>
            <span>Tin khuyến mãi</span>
          </Link>
        </p>
      </Col>
      <Col span={6}>
        <ul>
          <li>
            <h3 className='font-bold'>Tư vấn mua hàng (Miễn phí)</h3>
            <a href='tel:18006601' className='font-bold text-2xl'>18006601</a>
            <span> (Nhánh 1)</span>
          </li>
          <li>
            <h3 className='font-bold'>Hỗ trợ kĩ thuật</h3>
            <a href='tel:18006601' className='font-bold text-2xl'>18006601</a>
            <span> (Nhánh 2)</span>
          </li>
          <li>
            <h3 className='font-bold'>Hỗ trợ thanh toán</h3>
            <div className='ft__httt'></div>
          </li>
          <li className='mt-4'>
            <div className='ft__cer-one'></div>
            <div className='ft__cer-two'>
              <a href="http://online.gov.vn/Home/WebDetails/21883"></a>
            </div>
          </li>
        </ul>
      </Col>
      <Col span={6}>
        <ul>
          <li>
            <h3 className='font-bold'>Góp ý khiếu nại dịch vụ (8h00 - 22h00)</h3>
            <a href='tel:18006616' className='font-bold text-2xl'>18006616</a>
          </li>
          <li className='mt-4'>
            <h3 className='font-bold'>Chứng nhận</h3>
            <div className='ft__cer-three'></div>
          </li>
          <li>
            <h3>Website cùng tập đoàn</h3>
            <a href="https://nhathuoclongchau.com" className='ft__related-website'></a>
          </li>
        </ul>
      </Col>
    </Row>
  )
}
