import React from 'react'
import Searchd from '../Mobile/Home/searchd'
import NavBar from '../Home/NavBar'
import Dms from './dms'
import Footer from '../Mobile/Home/footer'

const Dm = [ 
  {
    name: 'Ramenbuddy',
    time: '09:34 pm',
    message: 'Thanks i will check it out'
  },
  {
    name: 'Ramenbuddy',
    time: '09:34 pm',
    message: 'Thanks i will check it out'
  },
  {
    name: 'Ramenbuddy',
    time: '09:34 pm',
    message: 'Thanks i will check it out'
  },
  {
    name: 'Ramenbuddy',
    time: '09:34 pm',
    message: 'Thanks i will check it out'
  },
  {
    name: 'Ramenbuddy',
    time: '09:34 pm',
    message: 'Thanks i will check it out'
  },
  {
    name: 'Ramenbuddy',
    time: '09:34 pm',
    message: 'Thanks i will check it out'
  },
  {
    name: 'Ramenbuddy',
    time: '09:34 pm',
    message: 'Thanks i will check it out'
  },
  {
    name: 'Ramenbuddy',
    time: '09:34 pm',
    message: 'Thanks i will check it out'
  },
  {
    name: 'Ramenbuddy',
    time: '09:34 pm',
    message: 'Thanks i will check it out'
  },
  {
    name: 'Ramenbuddy',
    time: '09:34 pm',
    message: 'Thanks i will check it out'
  },
  {
    name: 'Ramenbuddy',
    time: '09:34 pm',
    message: 'Thanks i will check it out'
  },
  {
    name: 'Ramenbuddy',
    time: '09:34 pm',
    message: 'Thanks i will check it out'
  },
  {
    name: 'Ramenbuddy',
    time: '09:34 pm',
    message: 'Thanks i will check it out'
  },
  {
    name: 'Ramenbuddy',
    time: '09:34 pm',
    message: 'Thanks i will check it out'
  },
  {
    name: 'Ramenbuddy',
    time: '09:34 pm',
    message: 'Thanks i will check it out'
  }  
]

const Chatsm = () => {
  return (
    <div className='flex-1 h-full mx-[28px]'>
        <div className='w-full'><input placeholder='Search Direct messages' type='text' className='w-full rounded-[8px] bg-gray-100 border-[#C4C4C4] border-[1px] mt-[12px] h-[32px]' /></div>
        <div className='flex-[1] sticky border-b w-full mt-2 border-black mb-2 justify-center'> <NavBar initialSelectedIcon={'World'} /></div>
        {Dm.map((message, index)=>
          <Dms 
              key={index}
              name={message.name}
              time={message.time}
              message={message.message}
              location={message.location}
              interactions={message.interactions}
              />
             
          )}
       
    </div>
  )
}

export default Chatsm