import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
  const error = useRouteError()

  return (
    <>
      
      <div className='flex flex-col min-h-[700px] justify-center items-center'>
        <h1 className='text-4xl'>Ops! An Error Ocurred!</h1>
       
       {
        error && (
          <div>
            <h2 className='text-red-500 text-3xl'>{error.statusText || error.message}</h2>
            <p>{error.status}</p>
          </div>
        )
       }
        
      </div>
    </>
  )
}

export default ErrorPage
