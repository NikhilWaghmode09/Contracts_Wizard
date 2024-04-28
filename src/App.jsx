import React, { useState } from 'react'

import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import CreateContractScreen from './screens/CreateContractScreen'

const router = createBrowserRouter([
  {
    path: '/',
    element: <CreateContractScreen />,
  },
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
