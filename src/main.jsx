import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom'
import './normalize.css'
import './index.css'
import AppChat from './AppChat'
import AppImg from './AppImg'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppChat /> 
  },
  {
    path: '/img',
    element: <AppImg /> 
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
