import { createBrowserRouter, Route, Routes } from 'react-router-dom'
import ErrorPage from '../compoments/error/ErrorPage'
import Home from '../pages/Home'
import { Test } from '../pages/Test'
import MainLayout from '../compoments/base/MainLayout'

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
])
export default RouterContainer;
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
