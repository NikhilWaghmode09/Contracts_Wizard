import React, { useState, createContext } from 'react'

import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import CreateContractScreen from './screens/CreateContractScreen'

export const AppContext = createContext()

const router = createBrowserRouter([
  {
    path: '/',
    element: <CreateContractScreen />,
  },
])

const App = () => {
  const [selectedContract, setSelectedContract] = useState('ERC721')
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
