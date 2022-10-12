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
    wrapper: `flex p-1 border-b w-full border-[#38444d]`,
    profileImage: `rounded-full h-[30px] w-[30px] object-cover`,
    postMain: `flex-1 items-center justify-center px-4`,
    headerDetails: `flex w-full justify-between items-center`,
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

  function Like() {
    // ...
    const [likes, setLikes] = React.useState(0);
  
    function handleClick() {
      setLikes(likes + 1);
    }
  
    return (
      <div className='flex'>
        {/* ... */}
        <button  className='flex text-lg' onClick={handleClick}><AiOutlineHeart className='pr-1 mt-1'/> <div className='text-[12px]'>{likes}</div></button>
      </div>
    );
  }

  function Comment() {
    // ...
    const [comments, setComments] = React.useState(0);
  
    function handleClick() {
      setComments(comments + 1);
    }
  
    return (
      <div className='flex'>
        {/* ... */}
        <button  className='flex text-lg' onClick={handleClick}><CgComment className='pr-1 mt-1'/> <div className='text-[12px]'>{comments}</div></button>
      </div>
    );
  }

  function Planet() {
    // ...
    const [planets, setPlanets] = React.useState(0);
  
    function handleClick() {
      setPlanets(planets + 1);
    }
  
    return (
      <div className='flex'>
        {/* ... */}
        <button  className='flex text-lg' onClick={handleClick}><IoMdPlanet className='pr-1 mt-1'/> <div className='text-[12px]'>{planets}</div></button>
      </div>
    );
  }

  function Gift() {
    // ...
    const [gifts, setGifts] = React.useState(0);
    const mena = (1500);

    function handleClick() {
      setGifts(gifts + (mena));
    }
  
    return (
      <div className='flex'>
        {/* ... */}
        <button  className='flex text-sm' onClick={handleClick}><BsCashStack className='pr-1 mt-1'/> <div className='text-[12px]'>{gifts}</div></button>
      </div>
    );
  }


const Post = ({
    displayName,
    avatar,
    text,
    image,
    timeStamp,
}) => {
  const router = useRouter()
  return (
    <div onClick={() => router.push('/notification')} className={style.wrapper}>
    <div>
      
      <div className={style.postMain}>
      
        <div >
          <span className={style.headerDetails}>
            <div className='w-full flex '>
            <div className='flex w-full'>
          
          <Image
          onClick={() => router.push('/profile')}
        src={pp}
        quality={100}
        objectFit="fill"
        alt={displayName}
        className={ style.profileImage }
      />
            <span className={style.name}>{displayName}</span>
            { (
              <span className={style.verified}>
                <BsFillPatchCheckFill />
              </span>
            )}
            <span className={style.handleAndTimeAgo}>
             • {format(new Date(timeStamp).getTime())}
            </span>
            </div>
            <span className='text-[0.8rem] text-right text-[#454B60]'>
              <BsThreeDots/>
            </span>
            </div>
          </span>
          <div>
          <div className={style.message}>{text}</div>
          {/* <div>{tags}</div> */}
          </div>
          <div className='items-center pl-4 justify-center pt-3 w-full'>
          <Image
        src={immm}
        width={276}
        height={150}
        quality={100}
        alt={displayName}
        className={ style.imgpost }
      />
          </div>
        </div>
        <div > <div className={style.footer}>
          <div
            className={`${style.footerIcon}  hover:text-red-400`}
          >
             <div className='flex flex-row'>
           <Like/>
            </div>
            </div>
          <div
            className={`${style.footerIcon}  hover:text-[#1d9bf0]`}
          >
             <div className='flex flex-row'>
           <Comment/>
            </div>
            </div>
          <div
            className={`${style.footerIcon} hover:text-red-800`}
          >
            <div className='flex flex-row'>
           <Planet/>
            </div>
            </div>
          <div
            className={`${style.footerIcon} flex-col hover:text-green-600`}
          >
            <div className='flex  flex-row'>
           <Gift/>
            </div>
            </div>
          </div>
       
        </div>
      </div>
    </div>
    </div>
  )
}

export default Post