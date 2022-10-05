import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from '../compoments/error/ErrorPage'
import Home from '../pages/Home'
import Test from '../pages/Test'

const RouterContainer = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: 'test',
        element: <Test />,
        errorElement: <ErrorPage />,
      },
    ],
    errorElement: <ErrorPage />,
  },
])
export default RouterContainer
