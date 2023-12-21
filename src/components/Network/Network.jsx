import React, { useState } from 'react'
import "./net.css"
import dot from "../../assets/ic_option.png"
import Circle from './Circle/Circle'
const Network = () => {

    const [change, setChange] = useState(70)
    console.log(change);

  return (
    <div className='Net'>
        <div className='Net-head'>
            <h1>Network</h1>
            <img src={dot} alt="" />
        </div>
        <div className='Net-follow' >
            <div className='Net-follow-1'>
              <div className='Net-color-1' onClick={()=>setChange(40)} ></div>
                <div className='Net-name'>
                <p>Following</p>
                <h2>587 Companies</h2>
                </div>
            </div>
            <div className='Net-follow-1'>
                <div className='Net-color-2' onClick={()=> setChange(60)} ></div>
                <div className='Net-name'>
                <p>Followers</p>
                <h2>8,334 Person</h2>
                </div>
            </div>

            <div className='Net-follow-1'>
                <div className='Net-color-3' ></div>
                <div className='Net-name'>
                <p>All of Them</p>
                <h2>9,8869 ALL</h2>
                </div>
            </div>
            
        </div>
        <div className='chart-pie-primary'>
            <Circle  change={change} height={200} fontP={"17px"} fontW={"15px"} />
        </div>
    </div>
  )
}

export default Network