import React from 'react'
import Advertise from '../components/Advertise'

const advertise = () => {
  return (
    <div className='font-nunito'>
        {user ? (
             <Advertise />
        ):(
          <Signin/>
        ) }  
    </div>
  )
}

export default advertise