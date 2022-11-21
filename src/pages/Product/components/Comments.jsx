import React from 'react'

export default function Comments({ comments }) {
  return (
    <section className='bg-white dark:bg-gray-900 py-8 lg:py-16'>
      <div className='w-full mx-auto px-4'>
        <div className='flex justify-between items-center mb-6'>
          <h2 className='text-lg lg:text-2xl font-bold text-gray-900 dark:text-white'>
            Bình luận (20)
          </h2>
        </div>
        <form className='mb-6'>
          <div className='py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700'>
            <label htmlFor='comment' className='sr-only'>
              Your comment
            </label>
            <textarea
              id='comment'
              rows='6'
              className='px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800'
              placeholder='Viết bình luận của bạn...'
              required
            ></textarea>
          </div>
          <button
            type='submit'
            className='inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800'
          >
            Bình luận
          </button>
        </form>
        {comments.map((item, index) => (
          <>
            <article
              key={index}
              className='p-6 pb-1 mb-1 text-base bg-white rounded-lg dark:bg-gray-900'
            >
              <footer className='flex justify-between items-center mb-2'>
                <div className='flex items-center'>
                  <p className='inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white'>
                    <img
                      className='mr-2 w-6 h-6 rounded-full'
                      src={item.avatar}
                      alt='Michael Gough'
                    />
                    {item.comment_name}
                  </p>
                  <p className='text-sm text-gray-600 dark:text-gray-400'>
                    <time dateTime='2022-02-08' title='February 8th, 2022'>
                      {item.comment_date}
                    </time>
                  </p>
                </div>
              </footer>
              <p className='text-gray-500 dark:text-gray-400'>
                {item.comment_content}
              </p>
            </article>
            {item.children_comments &&
              item.children_comments.map((itemChild, indexChild) => (
                <article
                  key={indexChild}
                  className='p-3 mb-3 ml-12 text-base bg-white rounded-lg dark:bg-gray-900'
                >
                  <footer className='flex justify-between items-center mb-2'>
                    <div className='flex items-center'>
                      <p className='inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white'>
                        <img
                          className='mr-2 w-6 h-6 rounded-full'
                          src='https://flowbite.com/docs/images/people/profile-picture-5.jpg'
                          alt='Jese Leos'
                        />
                        {itemChild.comment_name}
                      </p>
                      <p className='text-sm text-gray-600 dark:text-gray-400'>
                        <time dateTime='2022-02-12' title='February 12th, 2022'>
                          {itemChild.comment_date}
                        </time>
                      </p>
                    </div>
                  </footer>
                  <p className='text-gray-500 dark:text-gray-400'>
                    {itemChild.comment_content}
                  </p>
                </article>
              ))}
            <hr />
          </>
        ))}
      </div>
    </section>
  )
}
