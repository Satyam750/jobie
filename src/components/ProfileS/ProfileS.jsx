import React from 'react'
import "./profile.css"
import dot from "../../assets/ic_option.png"
import Bar from './Bar/Bar'
const ProfileS = () => {
  return (
    <div className='ProfileS'>
        <div className='ps'>
            <h1 className='ps-h1'>Profile Strength</h1>
            <img className='ps-img' src={dot} alt="" />
        </div>
        <div className='ps-mid'>
          <div className='ps-bar'>
         <Bar/>
          
          </div>
             <div className='ps-last'>
             <h2 className='psl-h2'>Legend</h2>
             
             <div className='Legend'>
              <div className='Legend-1'><div></div> <span>30%</span> <p>Application Sent</p> </div>
              <div className='Legend-2'><div></div> <span>46%</span> <p>Application Answered</p></div>
            <div className='Legend-3'>  <div></div> <span>14%</span> <p>Hired</p></div>
              <div className='Legend-4'><div></div> <span>10%</span> <p>Pending</p></div>
             </div>
                
             </div>
              
        </div>

    </div>
  )
}

export default ProfileS