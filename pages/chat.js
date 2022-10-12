import React from 'react'
import Chatsm from '../components/chat/Chatsm'

const chat = () => {
  return (
    <div className='font-nunito'>
       {user ? (
             <Chatsm />
        ):(
          <Signin/>
        ) }  
    </div>
  )
}

export default chat