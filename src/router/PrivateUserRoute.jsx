import React from 'react'
import isEmpty from 'lodash/isEmpty'
import { Navigate } from 'react-router-dom'

const PrivateUserRoute = ({ children }) => {
  const authToken = JSON.parse(localStorage.getItem('access_token'))

  if (isEmpty(authToken)) return <Navigate to={'/login'} />

  return children
}

export default PrivateUserRoute
