import React from 'react'
import Image from 'next/image'
import Cover from '../community/Rectangle916.png'
import Imk from '../community/Ellipse62.png'
import jk from '../community/Ellipse68.png'
import jl from '../community/Ellipse69.png'
import jh from '../community/Ellipse70.png'
import js from '../community/Ellipse71.png'

const Commun = () => {
  return (
    <div className='flex'>
        <div className='flex-1'>
        <div className='text-center'>
            <Image src={Cover} className='' />
            </div>
            <div className='absolute text-center bg-white mx-[19px] items-center rounded-[8px] h-[100px] -mb-[5px] w-[92px] -mt-28'>
            <Image src={Imk} className='absolute -mt-5 pb-5-pt-5 ' height={36} />
            <div className='-mt-1 text-[8px]'>Foodies</div>
            <div className='-mt-1'>
              <Image src={jk} /> 
              <Image src={jl} /> 
              <Image src={jh} />
              <Image src={js} /> 
            </div>
            <div className='text-[6px] -mt-1'>25.5k members</div>
            <div className='rounded-[8px] text-[10px] mx-4 bg-[#BDEBFF]'>Leave</div>
            </div>
        </div>
    </div>
  )
}

export default Commun