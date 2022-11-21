import { useRouteError } from 'react-router-dom'

export default function ErrorPage() {
  const error = useRouteError()
  return (
    <div
      id='error-page'
      className='flex flex-col justify-center items-center my-0 mx-auto h-screen bg-slate-400'
    >
      <h1 className='font-bold text-3xl'>Oops!</h1>
      <div className='text-lg text-center'>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  )
}
