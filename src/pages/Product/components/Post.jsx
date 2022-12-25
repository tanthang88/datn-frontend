import React from 'react'
import truncate from 'lodash/truncate'
import { NavLink } from 'react-router-dom'
import { OUTSTANDING, URL_BACKEND } from '../../../config/constants'

export default function Post({ posts }) {
  return (
    <div className='w-full bg-white p-5'>
      <h2 className='text-xl font-normal leading-normal mt-0 mb-2'>
        Tin tức nổi bật
      </h2>
      {posts
        .filter((post) => post.post_outstanding === OUTSTANDING)
        .slice(0, 5)
        .map((item, index) => (
          <div key={index} className='grid grid-cols-5 gap-4'>
            <img
              src={URL_BACKEND + item.post_img}
              alt={item.post_slug}
              className='col-span-1 py-1'
            />
            <div className='col-span-4 text-base py-2'>
              <NavLink to=''>{item.post_title}</NavLink>
              <p className='text-sm pt-1'>
                {truncate(item.post_desc, { length: 95 })}
              </p>
            </div>
          </div>
        ))}
    </div>
  )
}
