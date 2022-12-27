import { Tabs } from 'antd'
import React, { useEffect, useState } from 'react'
import { postsAPI } from '../../../api/services/postsAPI.js'
import { Link } from 'react-router-dom'
const onChange = (key) => {
  console.log(key)
}

const MenuPost = () => {
  const [CategoryPost, setCategoryPost] = useState([])
  const callApiPost = async () => {
    const dataPost = await postsAPI.getCategoryPost()
    setCategoryPost(
      dataPost.data.map(({ name, id }) => ({
        label: <Link to={'/post/category/' + id}>{name.toUpperCase()}</Link>,
        key: id,
      })),
    )
  }

  useEffect(() => {
    callApiPost()
  }, [])
  return (
    <div>
      <Tabs onChange={onChange} items={CategoryPost} />
    </div>
  )
}
export default MenuPost
