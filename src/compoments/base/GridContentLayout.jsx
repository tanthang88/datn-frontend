import { Row } from 'antd'

const GridContentLayout = ({
  children,
  gutter,
  classNameRow,
  classNameContainer,
}) => {
  return (
    <section
      className={`xl:container border-2 rounded-md shadow-md bg-white ${classNameContainer}`}
    >
      <Row
        gutter={gutter}
        justify='center'
        align='top'
        className={classNameRow}
      >
        {children}
      </Row>
    </section>
  )
}
export default GridContentLayout
