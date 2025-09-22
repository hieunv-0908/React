import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Teams() {
  return (
    <div>
        <span>Teams:</span> <br />
        <Outlet></Outlet>
    </div>
  )
}
