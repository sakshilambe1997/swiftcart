import React from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import './index.css'
import App from './App.jsx'

const root = createRoot(document.getElementById('root')) ;

const router = createBrowserRouter([

  {
    path: "/" ,
    element: <App/> 

  } ,
  {
    path: "*",
    element : <h1>404 Not Found</h1>
  }
])
root.render(<RouterProvider router={router}/>)
