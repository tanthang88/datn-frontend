import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'

export const OverlaySpinner = ({ open = false }) => {
  if (!open) return
  return (
    <section className='mt-6 px-5 py-3.5 pb-16 h-96 flex items-center justify-center'>
      <Spin indicator={<LoadingOutlined style={{ fontSize: 36 }} />} />
    </section>
  )
}
