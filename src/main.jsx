import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import './index.css'

import { router } from './Routes/routes';
import AuthProvider from './providers/AuthProvider';



ReactDOM.createRoot(document.getElementById('root')).render(
  
    <AuthProvider> <RouterProvider router={router} /></AuthProvider>
   
  
)
