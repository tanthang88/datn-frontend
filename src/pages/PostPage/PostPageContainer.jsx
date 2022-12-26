import MenuPost from './Components/MenuPost.jsx'
import { Col, Row } from 'antd'
import PostGroup from './Components/PostGroup.jsx'
import PostHotView from './Components/PostHotView.jsx'
import ListPost from './Components/ListPost.jsx'
import NewPost from './Components/NewPost'
import SalePost from './Components/SalePost.jsx'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { postsAPI } from '../../api/services/postsAPI.js'

const PostPageContainer = () => {
  const [dataPost, setDataPost] = useState([])
  const { id } = useParams()
  const getData = async () => {
    const data = await postsAPI.getPostOfCategoriesById(id)
    setDataPost(data?.data)
    console.log(data)
  }
  useEffect(function () {
    getData()
  }, [])
  return (
    <>
      <section className='xl:container px-2 py-2'>
        <h1 className='text-4xl font-bold font-sans pt-5'>TIN MỚI</h1>
        <Row>
          <Col span='24'>
            <MenuPost />
          </Col>
        </Row>
        <Row gutter='20'>
          <Col span='17'>
            <PostGroup dataPost={dataPost} />
          </Col>
          <Col span='7'>
            <PostHotView />
          </Col>
        </Row>
        <Row gutter='20'>
          <Col span='17'>
            <ListPost dataPost={dataPost} />
          </Col>
          <Col span='7'>
            <NewPost />
            <SalePost />
          </Col>
        </Row>
      </section>
    </>
  )
}

export default PostPageContainer
