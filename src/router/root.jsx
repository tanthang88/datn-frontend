import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from '../components/error/ErrorPage.jsx'
import MainLayout from '../components/base/MainLayout'
import HomePageContainer from '../pages/Home/HomePageContainer.jsx'
import { Test } from '../pages/Test/Test.jsx'
import RegisterContainer from '../pages/Register/RegisterContainer.jsx'
import LoginContainer from '../pages/Login/LoginContainer.jsx'
import ProductPageContainer from '../pages/ProductPage/ProductPageContainer.jsx'
import PostPageContainer from '../pages/PostPage/PostPageContainer.jsx'
import { CartContainer } from '../pages/Cart/CartContainer.jsx'
import Product from '../pages/Product'
import User from '../pages/User/index.jsx'
import PrivateUserRoute from './PrivateUserRoute.jsx'
import React from 'react'

const RouterContainer = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePageContainer />,
        errorElement: <ErrorPage />,
      },
      {
        path: 'test/:testParams',
        element: <Test />,
        loader: ({ request, params }) => {
          console.log(request)
          console.log(params)
        },
        errorElement: <ErrorPage />,
      },
      {
        path: 'dien-thoai/:id',
        element: <ProductPageContainer />,
        errorElement: <ErrorPage />,
        // loader: ({ request, params }) => {
        //   console.log(request)
        //   console.log(params)
        // },
      },
      {
        path: 'product/:id',
        element: <Product />,
        errorElement: <ErrorPage />,
      },
      {
        path: 'post',
        element: <PostPageContainer />,
      },
      {
        path: 'cart',
        element: <CartContainer />,
        hasErrorBoundary: true,
        errorElement: <ErrorPage />,
      },
    ],
    errorElement: <ErrorPage />,
  },
  {
    element: (
      <PrivateUserRoute>
        <MainLayout />
      </PrivateUserRoute>
    ),
    children: [
      {
        path: 'user',
        element: <User />,
        errorElement: <ErrorPage />,
      },
    ],
    errorElement: <ErrorPage />,
  },
  {
    path: '/register',
    element: <RegisterContainer />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/login',
    element: <LoginContainer />,
    errorElement: <ErrorPage />,
  },
])
export default RouterContainer
