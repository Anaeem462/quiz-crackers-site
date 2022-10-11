import React from 'react'
import { RouterProvider } from 'react-router-dom'
import Header from './components/Header'
import { router } from './components/Router'



function App() {
  return <div>
    <RouterProvider router={router}></RouterProvider>
  </div>
}

export default App
