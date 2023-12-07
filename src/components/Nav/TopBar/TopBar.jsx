import React from 'react'
import "./topbar.css"
import image1 from "../../../assets/ic_menu.png"
import mess from "../../../assets/notification.png"
import bell from "../../../assets/Bell.png"
import user from "../../../assets/profilePicture.png"
import { FaSearch } from "react-icons/fa";
const TopBar = () => {
  return (
    <div className='TopBar'>
        <div className='menu'>
          <img src={image1} className='image-menu' alt="" />
        </div>
        <div className='Heading-top'>
          <h1 className='heading'>Statistics</h1>
        </div>
        <div className='mid-top'> 
           
            <label htmlFor="sab">
            <input className='top-in' size={40} type="text" id="sab" placeholder='Search somthing here ...' />
            <FaSearch style={{marginLeft:"-40px", cursor:"pointer"}} color='gray'/>  
            </label>  
            
        </div>
        <div className='last-top'>
           <img src={mess} alt="" />
           <img src={bell} alt="" />
           <img src={user} alt="" />
          <div className='user-data'>
            <h3 className='user-h3'>Oda Dink</h3>
            <p className='user-p'>Super Admin</p>
          </div>
        </div>
    </div>
  )
}

export default TopBar