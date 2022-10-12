import React from 'react'
import {  BsArrowLeft } from 'react-icons/bs'
// import { useRouter } from 'next/router'



const Advertise = () => {
//     const router = useRouter()
  return (
    <div className='items-center px-[28px] justify-center'>
        <div className='flex border-b-[1px] pb-[11px] border-[#C4C4C4] pt-[16.67px]'>
            <BsArrowLeft  className=' '/>
           <div className='pl-4'> Advertise</div>
        </div>
        <div>
            <div className='font-semibold text-[16px] pt-[16px]'>Hello User</div>
            <div className=' pt-[16px] text-[12px] font-normal'>Disclaimer: Please Ensure you fill if the  advert is for electoral position. All electoral position will be bidded for. All advert will be considered in a duration of 5-10 mins 
before payment can be made.</div>
        </div>
        <div className='bg-[#D9D9D9] h-[155px] rounded-[16px]'>

        </div>
        <div className='text-[12px] pt-[16px] pb-[8px]'>Description:</div>
        <div className='h-[155px] bg-[#FFFFFF] rounded-[8px] border-[#C4C4C4] border-[1px]'>

        </div>
        <div className='pt-[168px]'>
        <div className='bg-[#0EAD69] h-[48px] rounded-[48px] text-center items-center justify-center '><div className='left-[92px] text-white'>Submit for review</div></div>
        </div>
    </div>
  )
}

export default Advertise
