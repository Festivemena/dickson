import React from 'react'
import Wallet from '../components/wallet'
import DrawerMenu from '../container/sidebar'
import Signin from '../components/login/signin'

const wallet = () => {
  const user = 'Efemena'
  return (
    <div className='font-nunito'>
        {user ? (
           <Wallet />
        ):(
          <Signin/>
        ) }       
    </div>
  )
}

export default wallet