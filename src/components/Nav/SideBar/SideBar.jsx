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
            <li> 
            <button> 
            <FaHome/>
              <span> Dashboard</span>
            </button>
         </li>
            <li> <button><FaSearch /> <span>Search Job</span> </button>
            </li>
            <li> <button> <IoExtensionPuzzle /> <span>Application</span> </button>
            </li>
             <li> <button> <AiFillMessage /> <span>Message</span> </button>
            </li> 
            <li> <button> <FaChartPie /> <span> Statistics</span> </button>
            </li>
            <li> <button> <FaNewspaper /> <span> News</span> </button>
            </li>
           </ul>
      </div>
     
    </div>
  )
}

export default SideBar