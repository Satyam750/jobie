import React from 'react'
import Nav from './components/Nav/Nav'
import "./App.css"
import ProfileS from './components/ProfileS/ProfileS'
import ProfileV from './components/ProfileV/ProfileV'
import Network from './components/Network/Network'
import Job from './components/Job/Job'

const App = () => {
  return (
    <div className='App'>
    <div>
    <Nav/>
    </div>
    <div>
     <ProfileS/>
      <ProfileV/>
    </div>
    <div>
      <Network/>
      <Job/>
    </div>
      
     
    </div>
  )
}

export default App