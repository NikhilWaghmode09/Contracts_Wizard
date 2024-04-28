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
  return (
    <div className="container mx-auto px-8 py-2">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
