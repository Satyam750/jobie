import React, { useState } from 'react'
import "./topbar.css"
import { FaSearch } from "react-icons/fa";
import { IoLogoWechat } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import { HiMenuAlt1 } from "react-icons/hi";
import { GoPersonFill } from "react-icons/go";

const TopBar = () => {
   
  const [count, setCount] = useState(39)


  return (
    <div className='TopBar'>
        <div className='menu'>
         <HiMenuAlt1 className='image-menu'/>
        </div>
        <div className='Heading-top'>
          <h1 className='heading'>Statistics</h1>
        </div>
        <div className='mid-top'> 
           
            <label htmlFor="sab">
            <input className='top-in' size={40} type="text" id="sab" placeholder='Search somthing here ...' />
            <FaSearch className='searchicon' style={{marginLeft:"-40px", cursor:"pointer"}}/>  
            </label>  
            
        </div>
        <div className='last-top'>
          <IoLogoWechat className='last-top-icon-1' onClick={()=>setCount(count+1)} /> <span className='sl-1'><p>{count}</p></span>
          <FaBell className='last-top-icon-2'/> <span className='sl-2'><p>52</p></span>
          <GoPersonFill className='person' />
          <div className='user-data'>
            <h3 className='user-h3'>Oda Dink</h3>
            <p className='user-p'>Super Admin</p>
          </div>
        </div>
    </div>
  )
}

export default TopBar