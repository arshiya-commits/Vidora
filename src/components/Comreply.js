import React from 'react'
import { HiOutlineUser } from 'react-icons/hi'
const Comreply = ({data}) => {

  const{name,comment}=data
  return (
    <div className='ml-28'>
      
    <div className="cursor-pointer p-2 rounded-full hover:bg-gray-100 flex flex-row">
              <HiOutlineUser size={28} color="gray" />
              <h4 className='text-sm mt-2'>@{name}</h4>
            </div>
            <p className='ml-8 text-sm'>{comment}</p>

            
    </div>
  )
}

export default Comreply