import { FaRegListAlt, FaHashtag, FaBell, FaSearch } from 'react-icons/fa'
import Advertisement from '../../Home/Advertisement'
import NavBar from '../../Home/NavBar'
import PostBox from '../../Home/PostBox'
import FooterOption from './footeroption'
import { useState } from 'react'
import Happens from '../../happens'
import Footer from './footer'
import IMM from '../../../assets/Rectangle894.png'
import Link from 'next/link'
import KosbisBG from '../../../assets/kosbis1.png'
import Image from 'next/image'
import IJK from '../../../assets/Rectangle885.png'
import Router from 'next/router'
import {BsChat} from 'react-icons/bs'
import { BiSearch } from 'react-icons/bi'
import MyModal from "./dialog";
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import sidebar from '../../../container/sidebar'
import Side from '../../../container/side'
import CarouselWithCustomDots from '../../Home/Advertisement'
import DrawerMenu from '../../../container/sidebar'
import Searchd from './searchd'

const style = 
{
    wrapper: `flex-col h-full w-full bg-[#FFFFFF] border-[#38444d]  `,
    header: ` top-0  z-10 px-3 sticky bg-[#FFFFFF] flex justify-between items-center`,
    headerTitle: `text-xl font-bold`,
}

const responsive = {
  desktop: {
      breakpoint: { max: 3000, min: 1024},
      items: 3,
      slidesToSlide: 3
  },
  tablet: {
      breakpoint: { max: 1024, min: 464},
      items: 2,
      slidesToSlide: 2
  },
  mobile: {
      breakpoint: { max: 464, min: 0},
      items: 1,
      slidesToSlide: 1
  }
};

const Messages = [ 
      {
        area: 'school',
        tag: '#ASUU',
        location: 'World',
        interactions: '20.1K'
      },
      {
        area: 'school',
        tag: '#Justice for the Justice League ',
        location: 'Engineering',
        interactions: '20.1K'
      },
      {
        area: 'school',
        tag: '#ASUU',
        location: 'World',
        interactions: '20.1K'
      },
      {
        area: 'school',
        tag: '#ASUU',
        location: 'World',
        interactions: '20.1K'
      },
      {
        area: 'school',
        tag: '#ASUU',
        location: 'World',
        interactions: '20.1K'
      },
      {
        area: 'school',
        tag: '#ASUU',
        location: 'World',
        interactions: '20.1K'
      },
      {
        area: 'school',
        tag: '#ASUU',
        location: 'World',
        interactions: '20.1K'
      },
      {
        area: 'school',
        tag: '#ASUU',
        location: 'World',
        interactions: '20.1K'
      },
      {
        area: 'school',
        tag: '#ASUU',
        location: 'World',
        interactions: '20.1K'
      },
      {
        area: 'school',
        tag: '#ASUU',
        location: 'World',
        interactions: '20.1K'
      },
      {
        area: 'school',
        tag: '#ASUU',
        location: 'World',
        interactions: '20.1K'
      },
      {
        area: 'school',
        tag: '#ASUU',
        location: 'World',
        interactions: '20.1K'
      },
      {
        area: 'school',
        tag: '#ASUU',
        location: 'World',
        interactions: '20.1K'
      },
      {
        area: 'school',
        tag: '#ASUU',
        location: 'World',
        interactions: '20.1K'
      },
      {
        area: 'school',
        tag: '#ASUU',
        location: 'World',
        interactions: '20.1K'
      },
      {
        area: 'school',
        tag: '#ASUU',
        location: 'World',
        interactions: '20.1K'
      },
    ]

function Happenings () {
  const[selected, setSelected]=useState()
    return (
    <div className={style.wrapper}>
        <div className={style.header}>
         <div className='text-black font-bold w-full  pt-2 pb-3 flex  justify-between'>
         <DrawerMenu/>
         <Image src={KosbisBG} alt='kb' width={125} height={35} className='pt-1' />
        <Searchd/>
        
         </div>
  </div>
    <div className=' w-full'>
     <CarouselWithCustomDots/>
    </div>
    <div className='flex-[1] sticky border-b border-[#C4C4C4] justify-center'> <NavBar initialSelectedIcon={'World'} /></div>
    {Messages.map((message, index)=>
      <Happens 
          key={index}
          area={message.area}
          tag={message.tag}
          location={message.location}
          interactions={message.interactions}
          />
         
      )}
      <Footer/>
        </div>
  )
}

export default Happenings