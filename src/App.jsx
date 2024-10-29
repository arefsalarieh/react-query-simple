import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import List from './component/List'
import Layout from './component/Layout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AddCard from './component/AddCard'

function App() {
  const client = new QueryClient({defaultOptions: {queries: {refetchOnWindowFocus: true,  cacheTime:6000, }, mutations:{}}})
  
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Layout/>,
      children:[
        {
          path:'/',
          element:<List/>
        },
        {
          path:'/AddCard',
          element:<AddCard/>
        },
      ]
    }
  ])

  return (
    <>
    <QueryClientProvider client={client}>
      <RouterProvider router={router}/>
        
    </QueryClientProvider>
    </>
  )
}

export default App
