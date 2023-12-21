import React from 'react'
import "./job.css"
import dot from "../../assets/ic_option.png"

import Apex from './Apex/Apex'
const Job = () => {
  return (
    <div className='Job'>
      <div className='Job-head'>
            <h1>Job</h1>
            <img src={dot} alt="" />
        </div>

        <div className='Job-icon'>
       <div className='apex-1'> <Apex score={66}/></div>
       <div className='apex-2'> <Apex score={31}/></div>
       <div className='apex-3'> <Apex score={75}/></div>
    
        </div>
        <div className='Job_Name_1'>
        <ul>
            <li>Engineer</li>
            <li className='job-d'>Designer</li>
            <li className='job-m'>Manager</li>
        </ul>
        </div>
        <div className='Job_Name_2'>
        <ul>
            <li>5,050 Vacancy</li>
            <li className='job-d'>10,524 Vacancy</li>
            <li className='job-s' >621 Vacancy</li>
        </ul>
        </div>
    </div>
  )
}

export default Job