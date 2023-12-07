import React from 'react'
import "./job.css"
import dot from "../../assets/ic_option.png"
import icon1 from "../../assets/icon 1.png"
import icon2 from "../../assets/icon 2.png"
import icon3 from "../../assets/icon 3.png"
import icon4 from "../../assets/icon 4.png"
const Job = () => {
  return (
    <div className='Job'>
      <div className='Job-head'>
            <h1>Network</h1>
            <img src={dot} alt="" />
        </div>

        <div className='Job-icon'>
            <img src={icon1} alt="" />
            <img src={icon2} alt="" />
            <img src={icon3} alt="" />
            <img src={icon4} alt="" />
        </div>
        <div className='Job_Name_1'>
        <ul>
            <li>Engineer</li>
            <li className='job-d'>Designer</li>
            <li className='job-m'>Manager</li>
            <li className='job-p'>Programmer</li>
        </ul>
        </div>
        <div className='Job_Name_2'>
        <ul>
            <li>5,050 Vacancy</li>
            <li className='job-d'>10,524 Vacancy</li>
            <li className='job-s' >621 Vacancy</li>
            <li className='job-p'>9,662 Vacancy</li>
        </ul>
        </div>
    </div>
  )
}

export default Job