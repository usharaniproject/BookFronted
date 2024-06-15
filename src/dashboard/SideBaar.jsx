import React, { useContext } from 'react'
import pic1 from '../assets/banner-books/pic1.jpg'
import { Sidebar } from "flowbite-react";
import {AuthContext} from '../contexts/AuthProvider';
import { HiArrowSmRight, HiChartPie, HiInbox, HiOutlineCloudUpload, HiShoppingBag, HiSupport, HiTable, HiUser, HiViewBoards } from "react-icons/hi";
const SideBaar = () => {
  const {user} =useContext(AuthContext);
  console.log(user);
  return (
    <div className='pt-20 mt-20'>
     <Sidebar aria-label="Sidebar with content separator example">
     <Sidebar.Logo href="#" img={user?.photoURL} imgAlt="Flowbite logo" className='w-16 h-16 rounded'>
     <p>{
      user?.displayName || "Demo User" //"Demo User"
      }</p>
      </Sidebar.Logo>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/admin/dashboard" icon={HiChartPie}>
           <p>Dashboard</p> 
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/upload" icon={HiOutlineCloudUpload}>
            <p>Upload Book</p>
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox}>
           <p>Manage Books</p>
          </Sidebar.Item>
          <Sidebar.Item href="/login" icon={HiArrowSmRight}>
            Sign In
          </Sidebar.Item>
          <Sidebar.Item href="/logout" icon={HiTable}>
            <p>Log Out</p>
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
    </div>
  )
}

export default SideBaar
