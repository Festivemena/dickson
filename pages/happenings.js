import React from 'react'
import Happenings from '../components/Mobile/Home/Happenings'

const happenings = () => {
  const user = 'Efemena'
  return (
    <div className='font-nunito'>
        {user ? (
           <Happenings />
        ):(
          <Signin/>
        ) }   
    </div>
  )
}

export default happenings