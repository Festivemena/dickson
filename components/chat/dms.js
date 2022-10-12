import React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import ZY from'../../assets/Ellipse56.png'

const style = {
    wrapper: `flex-1 py-2 w-full `,
    profileImage: `rounded-full h-[30px] w-[30px] object-cover`,
    postMain: `flex-1 items-center justify-center px-4`,
    headerDetails: `flex text-black w-full justify-between items-center`,
    name: `font-bold text-sm pl-2 mr-1`,
    verified: `text-[0.8rem] text-[#0047CC]`,
    handleAndTimeAgo: `text-[#8899a6] text-sm ml-1 justify-right`,
    message: `text-[12px] px-2 text-black`,
    tags: `text-blue-400`,
    imgpost:`w-32 pl-8 h-32`,
    image: `rounded-3xl`,
    footer: `flex justify-between w-full items-center px-1 pt-[3px] text-[#8899a6]`,
    footerIcon: `rounded-full text-sm justify p-1`,
  }

const Dms = ({
    name,
    message,
    time,
}) => {
  const router = useRouter()
  return (
    <div onClick={() => router.push('/chat/mena')} className={style.wrapper}>
    <div className='text-[14px] flex '>
    <Image alt='pp' src={ZY} />
    <div className='pl-[6px] font-semibold text-[14px] w-2/3'>{name} <div className='text-[12px] font-normal'>{message} </div> </div><div className='text-right text-[10px] mx-auto'>{time}</div> </div>
    
    </div>
  )
}

export default Dms