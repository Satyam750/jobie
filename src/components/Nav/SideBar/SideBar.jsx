import React from 'react'
import "./sidebar.css"
import image from "../../../assets/logo.png"
import { FaHome } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { IoExtensionPuzzle } from "react-icons/io5";
import { AiFillMessage } from "react-icons/ai";
import { FaChartPie } from "react-icons/fa";
import { FaNewspaper } from "react-icons/fa6";

const SideBar = () => {
  return (
    <div className='SideBar'>
      <div className='logo'>
        <img src={image} className='img' alt="" />
      </div>
      <div className='side-list'>
           <ul className='side-ul'>
            <li> <FaHome style={{marginRight:"10px"}}/>
            Dashboard</li>
            <li> <FaSearch style={{marginRight:"10px"}} />
            Search Job</li>
            <li> <IoExtensionPuzzle style={{marginRight:"10px"}} />
            Appliction</li>
            <li> <AiFillMessage style={{marginRight:"10px"}}  />
            Message</li>
            <li> <FaChartPie style={{marginRight:"10px"}}   />
            Statistics</li>
            <li> <FaNewspaper  style={{marginRight:"10px"}} />
            News</li>
           </ul>
      </div>
     
    </div>
  )
}

export default SideBar