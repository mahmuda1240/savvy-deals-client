import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './components/Home/Home'
import AllProducts from './components/AllProducts/AllProducts'
import RootLayout from './RootLayout/RootLayout'
import { createBrowserRouter, RouterProvider } from 'react-router'

const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children:[
      {
        Component: Home,
        index: true,
      },
      {
        Component: AllProducts,
        path: 'all-products'
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
