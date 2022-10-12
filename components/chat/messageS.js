import Image from 'next/image'
import React from 'react'
import IM from '../../assets/Rectangle913.png'
import pp from '../../assets/Ellipse60.png'
import { useRouter } from 'next/router'
import { BsArrowLeftShort, BsPhone } from 'react-icons/bs'
import {FcPhone, FcVideoCall} from 'react-icons/fc'

const MessageS = () => {
  const router = useRouter()
  return (
    <div className='flex-1 font-nunito pt-[10px]'>
        <div className='flex justify-between mb-[30px]'>
        <div className='flex'> 
        <BsArrowLeftShort className='text-white h-10 w-8' onClick={() => router.push('/chat')} />
            <Image src={pp} alt='pp' />
            <div className='ml-[6px]'><div className='text-[15px] font-semibold text-white'>Suya Saviour</div> <div className='text-[12px] text-[#0047CC]'>Online</div> </div>
            </div>
            
        </div>
        <div className='w-full'>
        <div>
            <div className=' py-[10px] rounded-r-[10px] rounded-b-[10px] px-4 bg-[#D9D9D9] text-left w-[189px] text-[12px]'>Oi, Any Update today?</div>
            <div className='mt-[4px] text-[#717171] text-[10px]'>09:32 PM</div>
        </div>
        <div className='ml-auto'>
            <div className=' py-[10px] rounded-r-[10px] ml-auto rounded-b-[10px] px-4 bg-[#0EAD69] text-right text-white w-[189px] text-[12px]'>yea, we have some update</div>
            <div className='mt-[4px] text-right text-[#717171] text-[10px]'>09:32 PM</div>
        </div>
        <div className='ml-auto'>
            <div className=' py-[10px] rounded-r-[10px] ml-auto font-nunito rounded-b-[10px] text-white px-4 bg-[#0EAD69]  w-[189px] text-[12px]'>
            <Image src={IM} alt='pp' />
            Here’s the updated design https://www.figma.com/EQjot...</div>
            <div className='mt-[4px] text-right text-[#717171] text-[10px]'>09:32 PM</div>
        </div>
        <div>
            <div className=' py-[10px] rounded-r-[10px] rounded-b-[10px] px-4 bg-[#D9D9D9] text-left w-[189px] text-[12px]'>This is super cool, i have some 
            questions tho, what about the future</div>
            <div className='mt-[4px] text-[#717171] text-[10px]'>09:32 PM</div>
        </div>
        <div className='ml-auto'>
            <div className=' py-[10px] rounded-r-[10px] ml-auto rounded-b-[10px] px-4 bg-[#0EAD69] text-white text-right w-[189px] text-[12px]'>yea, we have some update</div>
            <div className='mt-[4px] text-right text-[#717171] text-[10px]'>09:32 PM</div>
        </div>
        <div>
        <div className=' py-[10px] rounded-r-[10px] rounded-b-[10px] px-4 bg-[#D9D9D9] text-left w-[189px] text-[12px]'>Thank you very much</div>
        <div className='mt-[4px] text-[#717171] text-[10px]'>09:32 PM</div>
    </div>
    <div>
        <div className=' py-[10px] rounded-r-[10px] rounded-b-[10px] px-4 bg-[#D9D9D9] text-left w-[189px] text-[12px]'>Thank you very much</div>
        <div className='mt-[4px] text-[#717171] text-[10px]'>09:32 PM</div>
    </div>
    <div>
        <div className=' py-[10px] rounded-r-[10px] rounded-b-[10px] px-4 bg-[#D9D9D9] text-left w-[189px] text-[12px]'>Thank you very much</div>
        <div className='mt-[4px] text-[#717171] text-[10px]'>09:32 PM</div>
    </div>
    <div>
        <div className=' py-[10px] rounded-r-[10px] rounded-b-[10px] px-4 bg-[#D9D9D9] text-left w-[189px] text-[12px]'>Thank you very much</div>
        <div className='mt-[4px] text-[#717171] text-[10px]'>09:32 PM</div>
    </div>
    <div>
        <div className=' py-[10px] rounded-r-[10px] rounded-b-[10px] px-4 bg-[#D9D9D9] text-left w-[189px] font-nunito text-[12px]'>Thank you very much</div>
        <div className='mt-[4px] text-[#717171] text-[10px]'>09:32 PM</div>
    </div>
    <div>
        <div className=' py-[10px] rounded-r-[10px] rounded-b-[10px] px-4 bg-[#D9D9D9] text-left w-[189px] font-nunito text-[12px]'>Thank you very much</div>
        <div className='mt-[4px] text-[#717171] text-[10px]'>09:32 PM</div>
    </div>
        </div>
        <div className='bottom-0 bg-[#212427] sticky'>
          <div className='py-[29px]'>
          <input placeholder='Type here...' type='text' className='w-full rounded-[8px] bg-gray-100 pl-[13px] border-[#C4C4C4] border-[1px]  h-[40px]' /> 
          </div>
        </div>
    </div>
  )
}

export default MessageS