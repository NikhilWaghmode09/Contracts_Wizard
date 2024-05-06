import React, { useState, createContext } from 'react'

import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import CreateContractScreen from './screens/CreateContractScreen'
import contracts from './contracts'
import SalesOptionsScreen from './screens/SalesOptionsScreen'

export const AppContext = createContext()

const router = createBrowserRouter([
  {
    path: '/',
    element: <CreateContractScreen />,
  },
  {
    path: '/salesoptions',
    element: <SalesOptionsScreen />,
  },
])

const App = () => {
  const [selectedContract, setSelectedContract] = useState(
    Object.keys(contracts)[0]
  )
  const [userPreferences, setUserPreferences] = useState({})

  return (
    <AppContext.Provider
      value={{
        userPreferences,
        selectedContract,
        setSelectedContract,
        setUserPreferences,
      }}
    >
      <div className="container mx-auto px-8 py-2">
        <RouterProvider router={router} />
      </div>
    </AppContext.Provider>
  )
}

export default App
