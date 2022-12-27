import { Avatar, List, Skeleton, Switch, Col, Row } from 'antd'
import SellingPost from '../PostPage/Components/SellingPost.jsx'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { postsAPI } from '../../api/services/postsAPI.js'
import { format } from 'date-fns'
import ReactPlayer from "react-player";

export default function Post() {
  const [dataPost, setDataPost] = useState([])
  const [loading, setLoading] = useState(true)
  const { id } = useParams()
  const getData = async () => {
    const data = await postsAPI.getPostById(id)
    setDataPost({ ...data })
    setLoading(false)
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <section className='xl:container'>
      <Row gutter={48}>
        <Col span={16} className='mr-2'>
          {loading && (
            <Skeleton
              avatar
              paragraph={{
                rows: 20,
              }}
            />
          )}
          {!loading && (
            <>
              <h1 className='w-100 text-3xl font-bold'>
                {dataPost.post_title}
              </h1>
              <div className='float-left'>
                <img
                  className='h-12 w-12 rounded-full float-left mr-3 mt-2'
                  src='https://static.vecteezy.com/system/resources/previews/007/319/933/non_2x/black-avatar-person-icons-user-profile-icon-vector.jpg'
                />

                <div className='float-left clear-bold'>
                  <p className='text-base font-semibold pt-2 mb-1'>Admin</p>
                  <span className=''>
                    {format(new Date(dataPost.date), 'dd/MM/yyyy')}
                  </span>
                </div>
              </div>
              <div className=''></div>
              <h2 className='text-lg pt-24 font-semibold'>
                {dataPost.post_desc}
              </h2>
              <p
                className='text-lg pt-5'
                dangerouslySetInnerHTML={{ __html: dataPost.post_content }}
              ></p>
            </>
          )}
        </Col>
        <Col span={7}>
          <img
            className='pt-5'
            src='https://cdn.tgdd.vn/2022/12/banner/380x215-380x215.webp'
          />
          <ReactPlayer
            url='https://www.youtube.com/watch?v=mRApZVPSsps'
            style={{
              paddingTop: 10,
              paddingBottom: 10,
            }}
            width='317px'
            height='230px'
            playing={true}
            controls={false}
          />
        </Col>
      </Row>
    </section>
  )
}
