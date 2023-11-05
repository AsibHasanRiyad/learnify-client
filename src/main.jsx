import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import MainRoutes from './router/MainRoutes.jsx'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './providers/Authprovider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={MainRoutes}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
