import React from 'react'
import "./profile.css"
import dot from "../../assets/ic_option.png"
import bar from "../../assets/bars.png"
import lengend from "../../assets/legend.png"
const ProfileS = () => {
  return (
    <div className='ProfileS'>
        <div className='ps'>
            <h1 className='ps-h1'>Profile Strength</h1>
            <img className='ps-img' src={dot} alt="" />
        </div>
        <div className='ps-mid'>
          <div className='ps-bar'>
          <img src={bar} className='ps-bars' alt="" />
          <ul className='ps-ul'> 
            <li>Sun</li>
             <li>Mon</li>
              <li>Tue</li>
              <li>Wed</li>
              <li>Thu</li>
              <li>Fri</li>
              <li>Sat</li>
              </ul>
          </div>
             <div className='ps-last'>
             <h2 className='psl-h2'>Legend</h2>
             <img className='psl-l' src={lengend} alt="" />
                
             </div>
              
        </div>

    </div>
  )
}

export default ProfileS