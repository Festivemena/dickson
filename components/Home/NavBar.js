import NavBarOption from "./NavBarOption";
import { useState } from 'react'
import { RiHome7Line, RiHome7Fill, RiLogoutCircleFill, RiLogoutCircleLine,RiDownloadCloudLine, RiDownloadCloudFill, RiAdvertisementFill, RiAdvertisementLine, RiDownloadCloud2Fill, RiDownloadCloud2Line, RiCommunityFill, RiCommunityLine } from 'react-icons/ri'
import { BiHash, BiHelpCircle, BiWorld } from 'react-icons/bi'
import { MdOutlineHelpOutl, MdOutlineHelp} from 'react-icons/md'
import {GrGroup} from 'react-icons/gr'
import { FiBell, FiGlobe, FiMoreHorizontal, FiSettings } from 'react-icons/fi'
import { HiOutlineMail, HiMail } from 'react-icons/hi'
import { FaRegListAlt, FaHashtag, FaBell } from 'react-icons/fa'
import {IoIosPeople} from 'react-icons/io'
import { BsChat, BsChatDots, BsChatDotsFill, BsGlobe, BsHash } from "react-icons/bs";
import { CgGlobe } from "react-icons/cg";
import { useRouter } from "next/router";



const style = {
    navContainer: `flex px-2 py-2 justify-between`,
  }

  function NavBar() {
    const router = useRouter()
    return (
  <div className={style.navContainer}>
    <div onClick={() => router.push('/')} className="text-[12px]">World</div>
    <div onClick={() => router.push('/happenings')} className="text-[12px]">Happenings</div>
    <div onClick={() => router.push('/community')} className="text-[12px]">Communities</div>
    </div>  
     )
    }

    export default NavBar 