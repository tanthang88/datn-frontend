import MenuPost from './Components/MenuPost.jsx'
import { Col, Row } from 'antd'
import PostGroup from './Components/PostGroup.jsx'
import PostHotView from './Components/PostHotView.jsx'
import ListPost from './Components/ListPost.jsx'
import NewPost from './Components/NewPost'
import SalePost from './Components/SalePost.jsx'

const PostPageContainer = () => {
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
            <PostGroup />
          </Col>
          <Col span='7'>
            <PostHotView />
          </Col>
        </Row>
        <Row gutter='20'>
          <Col span='17'>
            <ListPost />
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
