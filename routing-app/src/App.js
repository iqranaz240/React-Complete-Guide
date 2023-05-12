import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/Home'
import ProductsPage from './pages/Products';
import RootLayout from './pages/Root';
import ErrorPage from './pages/Error';
import ProductDetails from './pages/ProductDetails';

function App() {

  const router = createBrowserRouter([
    {
      path: '/', element: <RootLayout/>,
      children: [
        {index:true, element: <HomePage/>},
        {path: '/products', element: <ProductsPage/>},
        {path: '/products/:productId', element: <ProductDetails/>},
      ],
      errorElement: <ErrorPage/>
    },
    
  ])
  return <RouterProvider router={router} />
}

export default App;
