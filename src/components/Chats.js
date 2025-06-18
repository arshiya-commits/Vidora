import React from 'react'
import { HiOutlineUser } from 'react-icons/hi'
const Chats = ({name,text}) => {
  return (
    <div className='flex shadow-sm'>
        <div className="cursor-pointer p-2 rounded-full hover:bg-gray-100">
                 <HiOutlineUser size={30} color="gray" />
               </div>
            <h6 className='mt-2 font-semibold text-gray-500 text-base'>{name}</h6>
            <p className='px-2 mt-2  text-base'>{text}</p>
    </div>
  )
}

export default Chats