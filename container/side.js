import React from 'react';
import { useRouter } from "next/router";


export default props => {
  const router = useRouter()
  return (
    <div>      <div onClick={() => router.push('/profile')} className='text-green-700'>Profile</div>
              <h1 onClick={() => router.push('/advertise')}>Advertise</h1>
              <p onClick={() => router.push('/')}>Downloads</p>
              <p onClick={() => router.push('/')}>Saved</p>
              <p onClick={() => router.push('/wallet')}>Wallet</p>
              <p onClick={() => router.push('/login')}>Login</p>
              <p onClick={() => router.push('/')}>Settings</p>
              </div>

  ); 
};