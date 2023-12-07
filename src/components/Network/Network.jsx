import React from 'react'
import "./net.css"
import dot from "../../assets/ic_option.png"
import pie from "../../assets/pieChart.png"
const Network = () => {
  return (
    <div className='Net'>
        <div className='Net-head'>
            <h1>Network</h1>
            <img src={dot} alt="" />
        </div>
        <div className='Net-follow'>
            <div className='Net-follow-1'>
                <div className='Net-color-1' ></div>
                <div className='Net-name'>
                <p>Following</p>
                <h2>587 Companies</h2>
                </div>
            </div>
            <div className='Net-follow-1'>
                <div className='Net-color-2' ></div>
                <div className='Net-name'>
                <p>Followers</p>
                <h2>8,334 Person</h2>
                </div>
            </div>
            
        </div>
        <img src={pie} className='Net-img' alt="" />
    </div>
  )
}

export default Network