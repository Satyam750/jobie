import React from 'react'
import "./graph.css"
import ChartG from './ChartG/ChartG'
const Graph = () => {
    return (
        <div className='Graph'>
            <div className='Graph-head'>
                <h1>Vistor Graph</h1>
                <p>Show Details</p>
                <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round"></span>
                </label>
                <div className='option-k'>
                    <select name="Week" className="Weeks">
                        <optgroup label="Weekly">
                            <option value="01">Monday</option>
                            <option value="02">Tuesday</option>
                            <option value="03">Wednesday</option>
                            <option value="04">Thursday</option>
                            <option value="05">Friday</option>
                            <option value="06">Saturday</option>
                            <option value="07">Sunday</option>
                        </optgroup>
                    </select>
                </div>
            </div>
      
            <ChartG/>
        </div>
    )
}

export default Graph