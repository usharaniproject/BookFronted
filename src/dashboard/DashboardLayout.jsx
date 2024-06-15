//import { Sidebar } from 'flowbite-react'
import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBaar from './SideBaar'

const DashboardLayout = () => {
  return (
    <div className='flex gap-6 flex-col md:flex-row'>
     <SideBaar/>
     <Outlet/>
    </div>
  )
}

export default DashboardLayout
