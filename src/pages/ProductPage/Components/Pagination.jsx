import React from 'react'
import { Pagination } from 'antd'

const PaginationCustom = ({ pagination, handleChangePage }) => {
  return (
    <Pagination
      onChange={handleChangePage}
      disabled={!pagination.totalPage}
      current={pagination?.currentPage}
      total={pagination?.totalPage}
      pageSize={pagination?.perPage}
    />
  )
}
export default PaginationCustom
