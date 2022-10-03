import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import ErrorPage from "../compoments/error/ErrorPage";
import Home from "../pages/Home";
import Test from "../pages/Test";

const RouterContainer = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home />} errorElement={<ErrorPage />}>
      <Route path="hehehe" element={<Test />} errorElement={<ErrorPage />} />
    </Route>
  )
)
export default RouterContainer