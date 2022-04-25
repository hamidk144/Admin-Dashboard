import React from 'react'
import Navbar from '../../Components/navbar/Navbar'
import Sidebar from '../../Components/sidebar/Sidebar';
import './UnderConstruction.scss'

const UnderConstruction = () => {
  return (
    <div className='UnderConstruction'>

      <Sidebar/>
        
        <div className="Main-content">
          <Navbar/>
        <h2>Sorry, Under Construction</h2>
            <div className='main-content'>
               
            <img src={require('./underconstruction.gif')}  alt="underConstruction" />

            </div>
            </div>
        </div>
  )
}

export default UnderConstruction