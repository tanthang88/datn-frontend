import { Tabs } from 'antd'
import React, { useEffect, useState } from 'react'
import { postsAPI } from '../../../api/services/postsAPI.js'
const onClick = (key) => {
  console.log(key)
}

const MenuPost = () => {
  const [CategoryPost, setCategoryPost] = useState([])
  const callApiPost = async () => {
    const dataPost = await postsAPI.getCategoryPost()
    setCategoryPost(
      dataPost.data.map(({ name, id }) => ({
        label: name.toUpperCase(),
        key: id,
        path: name,
      })),
    )
  }

  useEffect(() => {
    callApiPost()
  }, [])
  return (
    <div>
      <Tabs onChange={onClick} items={CategoryPost} />
    </div>
  )
}
export default MenuPost
