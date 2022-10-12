import React from 'react'
import Community from '../components/Mobile/Home/Community'

const community = () => {
  const user = 'Efemena'
  return ( 
    <div className='font-nunito'>
       {user ? (
            <Community />
        ):(
          <Signin/>
        ) }   
    </div>
  )
}

export default community