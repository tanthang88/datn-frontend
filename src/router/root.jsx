import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from '../compoments/error/ErrorPage'
import MainLayout from '../compoments/base/MainLayout'
import Home from '../pages/Home'
import { Test } from '../pages/Test'
import Register from '../pages/Register'
import Login from '../pages/Login'

const RouterContainer = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
        errorElement: <ErrorPage />,
      },
      {
        path: 'test',
        element: <Test />,
        errorElement: <ErrorPage />,
      },
    ],
    errorElement: <ErrorPage />,
  },
  {
    path: '/register',
    element: <Register />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <ErrorPage />,
  },
])
export default RouterContainer
// export default function RouterContainer() {
//   return (
//     <Routes>
//       <Route path='/' element={<MainLayout />} errorElement={<ErrorPage />}>
//         <Route index element={<Home />} errorElement={<ErrorPage />} />
//         <Route path='test' element={<Test />} errorElement={<ErrorPage />} />
//       </Route>
//     </Routes>
//   )
// }
