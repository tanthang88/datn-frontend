import { Row } from 'antd'

const GridContentLayout = ({
  children,
  gutter,
  justify = 'center',
  classNameRow = '',
  classNameContainer = '',
}) => {
  return (
    <section
      className={`xl:container rounded-md shadow-md bg-white ${classNameContainer}`}
    >
      <Row
        gutter={gutter}
        justify={justify}
        align='top'
        className={classNameRow}
      >
        {children}
      </Row>
    </section>
  )
}
export default GridContentLayout
