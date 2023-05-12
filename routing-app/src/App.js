import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/Home'
import ProductsPage from './pages/Products';
function App() {

  const router = createBrowserRouter([
    {
      path: '/', element: <HomePage/>
    },
    {
      path: '/products', element: <ProductsPage/>
    }
  ])
  return <RouterProvider router={router} />
}

export default App;
