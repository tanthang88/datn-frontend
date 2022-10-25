import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from '../compoments/error/ErrorPage'
import MainLayout from '../compoments/base/MainLayout'
import HomePageContainer from '../pages/HomePage/HomePageContainer.jsx'
import { Test } from '../pages/Test'
import RegisterContainer from '../pages/Register/RegisterContainer.jsx'
import LoginContainer from '../pages/Login/LoginContainer.jsx'
import Products from '../pages/ProductPage/Products.jsx'

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
        path: 'test',
        element: <Test />,
        errorElement: <ErrorPage />,
      },
      {
        path: 'product',
        element: <Products />,
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
// export default function RouterContainer() {
//   return (
//     <Routes>
//       <Route path='/' element={<MainLayout />} errorElement={<ErrorPage />}>
//         <Route index element={<HomePageContainer />} errorElement={<ErrorPage />} />
//         <Route path='test' element={<Test />} errorElement={<ErrorPage />} />
//       </Route>
//     </Routes>
//   )
// }
