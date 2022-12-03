import { Spin } from 'antd'
export const Spinner = ({ open = false }) => {
  return (
    <section
      className='w-full h-full z-50 opacity-50 absolute right-0 bottom-0 left-0 top-0'
      style={{ background: '#CCCCCC' }}
    >
      <Spin className='relative top-2/4 left-2/4' />
    </section>
  )
}
