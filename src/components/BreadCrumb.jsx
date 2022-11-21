import { Typography } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import kebabCase from 'lodash/kebabCase'
const { Text } = Typography

function BreadCrumb({ links }) {
  return (
    <div className='flex w-full'>
      <p className='flex-row focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 font-normal text-base leading-4 text-gray-600'>
        {links?.map(({ title, href }, index) => {
          return index === links.length - 1 ? (
            <Text
              key={kebabCase(title)}
              level={6}
              className='breadcrumb-item text-sm text-gray-800 float-right mr-2'
            >
              / {title}
            </Text>
          ) : (
            <Link
              key={kebabCase(title)}
              to={href}
              className='breadcrumb-item text-gray-800 text-sm mr-2'
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
