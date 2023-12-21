import React from 'react'
import Nav from './components/Nav/Nav'
import "./App.css"
import ProfileS from './components/ProfileS/ProfileS'
import ProfileV from './components/ProfileV/ProfileV'
import Network from './components/Network/Network'
import Job from './components/Job/Job'
import Graph from './components/Graph/Graph'
import { motion } from "framer-motion"



const App = () => {
  return (
    <div className='App'>
    <div>
    <Nav/>
    </div>
    <div>
     <motion.div
     initial={{ opacity: 0, x: -50 }}
     animate={{ opacity: 1, x: 0 }}
     transition={{ duration: 0.5 }}
     >
     <ProfileS/>
     </motion.div>
     <motion.div
      initial={{ opacity: 0, y: -100 }}
     animate={{ opacity: 1, y: 0 }}
     transition={{ duration: 0.5 }}
     >
      <ProfileV/>
     </motion.div>
    </div>
    <div>
      <Network/>
      <Job/>
    </div>
    <div>
      <Graph/>
    </div>
      
     
    </div>
    
  )
}

export default App