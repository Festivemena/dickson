import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image'
import React from 'react'
import { Input } from 'postcss'
import { TabList, Tab } from 'web3uikit'
import { Fragment, useState } from 'react'
import { BiPlus } from 'react-icons/bi'
import { BsArrowLeftShort, BsImageFill, BsXCircleFill } from 'react-icons/bs'
import ptq from '../../../assets/Ellipse.png'
import FileUploading from 'react-files-uploading';
import PostBox from '../../Home/PostBox'

export default function MyModal() {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  const [images, setImages] = React.useState([]);
  const maxNumber = 15;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  return (
    <>
      <div className="inset-0 justify-center  -mt-4 flex justify-center">
          < BiPlus onClick={openModal} className='bg-[#0EAD69] rounded-full text-white w-12 h-12' />
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex h-full items-center justify-center  text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full h-full transform overflow-hidden rounded-2xl bg-[#ffffff] text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium h-12 text-center pt-3 bg-white leading-6 text-white"
                  >
                   <div className='flex mx-[27px] justify-between'> <BsArrowLeftShort className='text-3xl text-black' onClick={closeModal} /> <div className='text-white h-[28px] rounded-[8px] w-[65px] bg-[#0EAD69]'>Post</div></div>
                  </Dialog.Title>
                  <div className="text-center mx-[27px] text-md flex-1 text-white mt-8">
                  
                   
                   <TabList defaultActiveKey={1} onChange={function noRefCheck(){}} tabStyle="bar">
        <Tab tabKey={1} tabName={"World"}><PostBox /></Tab>
        <Tab tabKey={2} tabName={"Upload"}>
        <div className='flex'>
                   <Image
            width={30} height={30}
          src={ptq}
          alt="profile image"
          className='rounded-full'
        />
        <input type="text" className='ml-[12px] text-black w-full' placeholder='Add a Caption...'/>
        </div>
        <div className='flex-1'>
        <div className="bg-white h-full w-full">
      <FileUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
        acceptType={["jpg"]}
      >
        {({
          fileList,
          onFileUpload,
          onFileRemoveAll,
          onFileUpdate,
          onFileRemove,
          isDragging,
          dragProps
        }) => (
          // write your building UI
          <div className="w-full h-full items-center align-center ">
          
            &nbsp;
            
            {fileList.map((image, index) => (
              
              <div key={index} className="flex h-[400px]  my-[10px]">
                <button onClick={onFileRemoveAll}><BsXCircleFill/></button>
                <Image src={image.data_url} height={376} alt="" width={277} />
                <div className="flex flex-col ml-[10px]">
                  <button onClick={() => onFileUpdate(index)}>Update</button>
                  <button onClick={() => onFileRemove(index)}>Remove</button>
                </div>
              </div>
              
            ))}
              <button className='px-1 bottom-0 sticky flex-col mx-2'
              style={isDragging ? { color: "red" } : null}
              onClick={onFileUpload}
              {...dragProps}
            >
              <BsImageFill/>
            </button>
          </div>
        )}
      </FileUploading>
    </div>
                   </div>
        </Tab>
        </TabList>
                      
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div> 
        </Dialog>
      </Transition>
    </>
  )
}
