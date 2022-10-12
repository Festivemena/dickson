import React from 'react'
import {BsFillPatchCheckFill, BsThreeDots, BsCash, BsCashStack} from 'react-icons/bs'
import {FaDollarSign, FaRegComment, FaRetweet} from 'react-icons/fa'
import { AiOutlineHeart, AiTwotoneFire } from 'react-icons/ai'
import { CgComment } from 'react-icons/cg'
import { useRouter } from 'next/router'
import { FiShare } from 'react-icons/fi'
import { format } from 'timeago.js'
import { IoMdPlanet } from 'react-icons/io'
import Image from 'next/image'
import pp from '../assets/Ellipse49.png'
import immm from '../assets/Rectangle894.png'

const style = {
    wrapper: `flex-1 px-[30px] border-b w-full border-[#38444d]`,
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

const Happens = ({
    area,
    tag,
    location,
    interactions
}) => {
  const router = useRouter()
  return (
    <div className={style.wrapper}>
    <div className='text-[12px] font-semibold'>{tag} <div className='text-right'> @{location}</div> </div>
    <div className='text-[10px]'>{interactions} synergy</div>
    </div>
  )
}

export default Happens