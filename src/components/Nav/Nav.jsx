import React from 'react'
import SideBar from './SideBar/SideBar'
import TopBar from './TopBar/TopBar'
import "./nav.css"
import { motion } from 'framer-motion'
const Nav = () => {
  return (
    <>
    <div 
    className='Sidebar'
    >
        <SideBar/>
    </div>
    <div 

    className='Topbar'>
    <TopBar/>
    </div>
    </>
  )
}

export default Nav