import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function App() {
  return (
    <div className='border-[1px] border-black h-[100vh] w-[100wh] flex items-center justify-center'>
      
      <Outlet></Outlet>
    </div>
  )
}
