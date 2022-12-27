import { publicRequest } from '../../api/axiosClient.js'
import React, { useEffect, useState } from 'react'
import { Skeleton } from 'antd'
import { getAboutDetail } from '../../api/services/AboutService'
import { useParams } from 'react-router'
export default function AboutPage() {
  const [loading, setLoading] = useState(true)
  const [aboutDetail, setAboutDetail] = useState(null)
  const { id } = useParams()
  useEffect(() => {
    const aboutDetail = async () => {
      getAboutDetail(id).then((data) => {
        setAboutDetail(data)
        setLoading(false)
      })
    }
    aboutDetail()
  }, [id])
  return (
    <>
      <section className='xl:container py-6'>
        <h1 className='text-2xl font-bold font-sans pt-5 uppercase '>
          <span className=''>{aboutDetail && aboutDetail.about_title}</span>
        </h1>
        <div className='mt-8'>
          <div className=''>
            {loading && (
              <Skeleton
                active={loading}
                paragraph={{
                  rows: 4,
                }}
              />
            )}
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html: aboutDetail && aboutDetail.about_content,
            }}
          ></div>
        </div>
      </section>
    </>
  )
}
