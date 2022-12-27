import React from 'react'

const PostHotView = ({ dataPost}) => {
  return (
    <>
      <section className='bg-white mt-6 px-2 py-3.5 rounded-lg shadow-md'>
        <div>
          <h1 className='text-lg font-semibold'>Xem nhiều</h1>
          <hr />
        </div>
        {dataPost &&
          dataPost.map((post, index) => (
            <div key={index} className='pt-3 pb-4'>
              <div className='h-11 w-11 bg-red-custom rounded-full float-left mr-2'>
                <p className='text-white text-2xl pt-1.5 ml-3.5 font-semibold'>
                  {index + 1}
                </p>
              </div>
              <h1 className='pr-1 '>{post.post_title}</h1>
            </div>
          ))}
      </section>
    </>
  )
}

export default PostHotView
