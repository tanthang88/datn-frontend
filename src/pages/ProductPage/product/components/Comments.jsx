import React from 'react'

export default function Comments() {
  return (
    <section className='bg-white dark:bg-gray-900 py-8 lg:py-16'>
      <div className='w-full mx-auto'>
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
              placeholder='Write a comment...'
              required
            ></textarea>
          </div>
          <button
            type='submit'
            className='inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800'
          >
            Post comment
          </button>
        </form>
        <article className='p-6 pb-1 mb-1 text-base bg-white rounded-lg dark:bg-gray-900'>
          <footer className='flex justify-between items-center mb-2'>
            <div className='flex items-center'>
              <p className='inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white'>
                <img
                  className='mr-2 w-6 h-6 rounded-full'
                  src='https://flowbite.com/docs/images/people/profile-picture-2.jpg'
                  alt='Michael Gough'
                />
                Michael Gough
              </p>
              <p className='text-sm text-gray-600 dark:text-gray-400'>
                <time dateTime='2022-02-08' title='February 8th, 2022'>
                  Feb. 8, 2022
                </time>
              </p>
            </div>
            <div
              id='dropdownComment1'
              className='hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600'
            >
              <ul
                className='py-1 text-sm text-gray-700 dark:text-gray-200'
                aria-labelledby='dropdownMenuIconHorizontalButton'
              >
                <li>
                  <a
                    href='#'
                    className='block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                  >
                    Edit
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                  >
                    Remove
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                  >
                    Report
                  </a>
                </li>
              </ul>
            </div>
          </footer>
          <p className='text-gray-500 dark:text-gray-400'>
            Very straight-to-point article. Really worth time reading. Thank
            you! But tools are just the instruments for the UX designers. The
            knowledge of the design tools are as important as the creation of
            the design strategy.
          </p>
        </article>
        <article className='p-3 mb-3 ml-12 text-base bg-white rounded-lg dark:bg-gray-900'>
          <footer className='flex justify-between items-center mb-2'>
            <div className='flex items-center'>
              <p className='inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white'>
                <img
                  className='mr-2 w-6 h-6 rounded-full'
                  src='https://flowbite.com/docs/images/people/profile-picture-5.jpg'
                  alt='Jese Leos'
                />
                Jese Leos
              </p>
              <p className='text-sm text-gray-600 dark:text-gray-400'>
                <time dateTime='2022-02-12' title='February 12th, 2022'>
                  Feb. 12, 2022
                </time>
              </p>
            </div>
            <div
              id='dropdownComment2'
              className='hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600'
            >
              <ul
                className='py-1 text-sm text-gray-700 dark:text-gray-200'
                aria-labelledby='dropdownMenuIconHorizontalButton'
              >
                <li>
                  <a
                    href='#'
                    className='block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                  >
                    Edit
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                  >
                    Remove
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                  >
                    Report
                  </a>
                </li>
              </ul>
            </div>
          </footer>
          <p className='text-gray-500 dark:text-gray-400'>
            Much appreciated! Glad you liked it ☺️
          </p>
        </article>

        <article className='p-6 text-base bg-white border-t border-gray-200 dark:border-gray-700 dark:bg-gray-900'>
          <footer className='flex justify-between items-center mb-2'>
            <div className='flex items-center'>
              <p className='inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white'>
                <img
                  className='mr-2 w-6 h-6 rounded-full'
                  src='https://flowbite.com/docs/images/people/profile-picture-4.jpg'
                  alt='Helene Engels'
                />
                Helene Engels
              </p>
              <p className='text-sm text-gray-600 dark:text-gray-400'>
                <time dateTime='2022-06-23' title='June 23rd, 2022'>
                  Jun. 23, 2022
                </time>
              </p>
            </div>
            <div
              id='dropdownComment4'
              className='hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600'
            >
              <ul
                className='py-1 text-sm text-gray-700 dark:text-gray-200'
                aria-labelledby='dropdownMenuIconHorizontalButton'
              >
                <li>
                  <a
                    href='#'
                    className='block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                  >
                    Edit
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                  >
                    Remove
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                  >
                    Report
                  </a>
                </li>
              </ul>
            </div>
          </footer>
          <p className='text-gray-500 dark:text-gray-400'>
            Thanks for sharing this. I do came from the Backend development and
            explored some of the tools to design my Side Projects.
          </p>
        </article>
        <article className='p-6 text-base bg-white border-t border-gray-200 dark:border-gray-700 dark:bg-gray-900'>
          <footer className='flex justify-between items-center mb-2'>
            <div className='flex items-center'>
              <p className='inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white'>
                <img
                  className='mr-2 w-6 h-6 rounded-full'
                  src='https://flowbite.com/docs/images/people/profile-picture-4.jpg'
                  alt='Helene Engels'
                />
                Helene Engels
              </p>
              <p className='text-sm text-gray-600 dark:text-gray-400'>
                <time dateTime='2022-06-23' title='June 23rd, 2022'>
                  Jun. 23, 2022
                </time>
              </p>
            </div>
            <div
              id='dropdownComment4'
              className='hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600'
            >
              <ul
                className='py-1 text-sm text-gray-700 dark:text-gray-200'
                aria-labelledby='dropdownMenuIconHorizontalButton'
              >
                <li>
                  <a
                    href='#'
                    className='block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                  >
                    Edit
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                  >
                    Remove
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                  >
                    Report
                  </a>
                </li>
              </ul>
            </div>
          </footer>
          <p className='text-gray-500 dark:text-gray-400'>
            Thanks for sharing this. I do came from the Backend development and
            explored some of the tools to design my Side Projects.
          </p>
        </article>
      </div>
    </section>
  )
}
