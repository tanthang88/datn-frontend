import { Typography } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import kebabCase from 'lodash/kebabCase'

function BreadCrumb({ links }) {
  return (
    <div className='flex w-full'>
      <p className='flex-row focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 font-normal text-base leading-4 text-gray-600'>
        {links?.map(({ title, href }, index) => {
          return index === links.length - 1 ? (
            <Typography
              key={kebabCase(title)}
              level={6}
              className='breadcrumb-item text-xs float-right'
            >
              / {title}
            </Typography>
          ) : (
            <Link
              key={kebabCase(title)}
              to={href}
              className='breadcrumb-item text-gray-800 text-xs'
            >
              {title}
            </Link>
          )
        })}
      </p>
    </div>
  )
}

export default BreadCrumb
