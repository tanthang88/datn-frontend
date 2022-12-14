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
import Bill from '../pages/Bill'
import BillDetail from '../pages/Bill/Detail'
import { URL } from '../config/constants.js'

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
        path: 'category/:id',
        element: <ProductPageContainer />,
        errorElement: <ErrorPage />,
      },
      {
        path: 'accessory/:id',
        // element: <ProductPageContainer />,
        // errorElement: <ErrorPage />,
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
        path: 'post/:category_id',
        // element: <PostPageContainer />,
      },
      {
        path: 'post/:category_slug/:id',
        // element: <PostPageContainer />,
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
        path: URL.USER,
        element: <User />,
        errorElement: <ErrorPage />,
      },
      {
        path: URL.BILL,
        element: <Bill />,
        errorElement: <ErrorPage />,
      },
      {
        path: `${URL.BILL}/detail/:id`,
        element: <BillDetail />,
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
