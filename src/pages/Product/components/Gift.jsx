import React from 'react'
import { AiFillCheckCircle } from 'react-icons/ai'

export default function Gift() {
  return (
    <div className='w-full flex justify-start items-center'>
      <div className='bg-slate-100 w-full p-4 mt-3'>
        <ul>
          <li className='flex flex-row'>
            <AiFillCheckCircle className='text-green-700 inline-flex mt-1 mr-1' />
            <div>
              <span>
                Ưu đãi đặc quyền dành cho Học sinh Sinh viên: Tặng thêm 1 năm
                bảo hành
              </span>
            </div>
          </li>
          <li className='flex flex-row'>
            <AiFillCheckCircle className='text-green-700 inline-flex mt-1 mr-1' />
            <div>
              <span>Tặng Balo Gaming cao cấp</span>
            </div>
          </li>
          <li className='flex flex-row'>
            <AiFillCheckCircle className='text-green-700 inline-flex mt-1 mr-1' />
            <div>
              <span>Tặng Chuột Gaming GM03</span>
            </div>
          </li>
          <li className='flex flex-row'>
            <AiFillCheckCircle className='text-green-700 inline-flex mt-1 mr-1' />
            <div>
              <span>Tặng PMH 200.000đ mua máy in</span>
            </div>
          </li>
          <li className='flex flex-row'>
            <AiFillCheckCircle className='text-green-700 inline-flex mt-1 mr-1' />
            <div>
              <span>Giảm thêm 5% màn hình LCD khi mua kèm máy</span>
            </div>
          </li>
          <li className='flex flex-row'>
            <AiFillCheckCircle className='text-green-700 inline-flex mt-1 mr-1' />
            <div>
              <span>Tặng PMH 100.000đ mua Microsoft 365 Personal/Family</span>
            </div>
          </li>
          <li className='flex flex-row'>
            <AiFillCheckCircle className='text-green-700 inline-flex mt-1 mr-1' />
            <div>
              <span>
                Giảm 30% Sim MobiFone Siêu Data 3T - 2GB/ngày - miễn phí 3 tháng
                - giá chỉ 266.000đ
              </span>
            </div>
          </li>
          <li className='flex flex-row'>
            <AiFillCheckCircle className='text-green-700 inline-flex mt-1 mr-1' />
            <div>
              <span>Cơ hội trúng Jackpot đến 2 tỷ</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}
