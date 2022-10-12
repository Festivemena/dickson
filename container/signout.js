import React from 'react'
import Image from 'next/image'
import { useRouter } from "next/router";
import pp from '../assets/Ellipse35.png'
import { auth } from "../firebaseconfig";
import { useAuthState } from 'react-firebase-hooks/auth';
import {BsChat, BsPersonCircle } from 'react-icons/bs'
import {RiAdvertisementLine, RiDownloadCloudLine} from 'react-icons/ri'
import { signOut } from "firebase/auth";
import { IoMdSettings } from 'react-icons/io'
import { AiOutlineDownload, AiOutlineSave, AiOutlineWallet } from 'react-icons/ai';
import { MdOutlineHelp, MdOutlineHelpOutline } from 'react-icons/md'
import { Toggle } from 'material-ui';

const signout = () => {
  function handleLogOut(e) {
    e.preventDefault();
    signOut(auth)
      .then(() => {
        alert("you are logged out");
        router.push("/login");
      })
      alert((error) => {
        // An error happened.
      });
  }
  // const [user] = useAuthState(auth);

    const router = useRouter()
   
  return (
    <div>
        <div className='flex w-full text-center'>
        <Image src={pp} quality={100} onClick={() => router.push('/')} height={64} width={64} />
        <div className='pl-4 pt-4 text-[16px]  text-center'>Alienboy</div>
        </div>
      <div>
    <div onClick={() => router.push('/profile')} className=' flex'><BsPersonCircle className='h-8  mr-2'/> Profile</div>
    <div onClick={() => router.push('/advertise')} className=' flex'><RiAdvertisementLine className='h-8  mr-2'/>Advertise</div>
    <div onClick={() => router.push('/')} className=' flex'><RiDownloadCloudLine className='h-8  mr-2'/>Downloads</div>
    <div onClick={() => router.push('/')} className=' flex'><AiOutlineSave className='h-8  mr-2'/>Saved</div>
    <div onClick={() => router.push('/wallet')} className=' flex'><AiOutlineWallet className='h-8  mr-2'/>Wallet</div>
     <div onClick={() => router.push('/')} className=' flex'><MdOutlineHelpOutline className='h-8  mr-2'/>Help</div>
    <div onClick={() => router.push('/')} className=' flex'><IoMdSettings className='h-8 mr-2'/>Settings</div>
    <div>
    <form onSubmit={handleLogOut}>
          <button className="bg-[#0EAD69] w-full mt-2 tracking-wide px-[32px] focus:outline-none rounded-xl font-bold text-teal-50 text-center">
          LogOut
          </button>
        </form>
    </div>
    <div><button></button></div>
    </div>
    <div>
      
    </div>
    </div> 
  )
}

export default signout