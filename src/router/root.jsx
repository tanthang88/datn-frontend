import React, { Suspense } from 'react'
import { BrowserRouter, useRoutes } from 'react-router-dom'
import ErrorPage from '../components/error/ErrorPage.jsx'
import MainLayout from '../components/base/MainLayout'
import { OverlaySpinner } from '../components/Loading/OverlaySpinner.jsx'
import PrivateUserRoute from './PrivateUserRoute.jsx'
import { URL } from '../config/constants.js'
const ProductPageContainer = React.lazy(() =>
  import('../pages/ProductPage/ProductPageContainer.jsx'),
)
const Register = React.lazy(() =>
  import('../pages/Register/RegisterContainer.jsx'),
)
const Home = React.lazy(() => import('../pages/Home/HomePageContainer.jsx'))
const Post = React.lazy(() => import('../pages/PostPage/PostPageContainer.jsx'))
const Cart = React.lazy(() => import('../pages/Cart/CartContainer.jsx'))
const User = React.lazy(() => import('../pages/User/index.jsx'))
const Bill = React.lazy(() => import('../pages/Bill'))
const Login = React.lazy(() => import('../pages/Login/LoginContainer.jsx'))
const BillDetail = React.lazy(() => import('../pages/Bill/Detail'))
const ProductDetail = React.lazy(() => import('../pages/Product'))
const ContactPage = React.lazy(() => import('../pages/Contact'))
const AboutPage = React.lazy(() => import('../pages/About'))

const Pages = () =>
  useRoutes([
    {
      path: URL.HOME,
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
          errorElement: <ErrorPage />,
        },
        {
          path: `${URL.CATEGORY}/:id`,
          element: <ProductPageContainer />,
          errorElement: <ErrorPage />,
        },
        {
          path: `${URL.ACCESSORY}/:id`,
          element: <ProductPageContainer />,
          errorElement: <ErrorPage />,
        },
        {
          path: `${URL.PRODUCT}/:id`,
          element: <ProductDetail />,
          errorElement: <ErrorPage />,
        },
        {
          path: URL.POST,
          element: <Post />,
          errorElement: <ErrorPage />,
        },
        {
          path: `${URL.POST}/:category_slug/:id`,
          element: <Post />,
          errorElement: <ErrorPage />,
        },
        {
          path: URL.CART,
          element: <Cart />,
          errorElement: <ErrorPage />,
        },
        {
          path: URL.CONTACT,
          element: <ContactPage />,
          errorElement: <ErrorPage />,
        },
        {
          path: `about/:id`,
          element: <AboutPage />,
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
      path: URL.REGISTER,
      element: <Register />,
      errorElement: <ErrorPage />,
    },
    {
      path: URL.LOGIN,
      element: <Login />,
      errorElement: <ErrorPage />,
    },
  ])
function RouterContainer() {
  return (
    <Suspense fallback={<OverlaySpinner open />}>
      <BrowserRouter>
        <Pages />
      </BrowserRouter>
    </Suspense>
  )
}
export default RouterContainer
