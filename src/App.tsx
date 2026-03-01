import "./index.css"
import HomePage from "./pages/HomePage"
import DetailPage from "./pages/DetailPage"
import NotFound from "./pages/NotFound"
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/product/:slug",
    element: <DetailPage />
  },
  {
    path: "*",
    element: <NotFound />
  }
]);
function App() {
  return (
    <div className='text-3xl bg-secondary text-p'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
