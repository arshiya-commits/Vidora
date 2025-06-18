import React from 'react'
import { MdHome, MdWhatshot, MdSubscriptions, MdVideoLibrary, MdHistory, MdWatchLater, MdThumbUp, MdOutlineVideoLibrary } from 'react-icons/md';
import { GiCricketBat } from 'react-icons/gi';
import { FaHome, FaHistory, FaMusic, FaVolleyballBall, FaReact, FaUser } from 'react-icons/fa';
import {useSelector} from 'react-redux';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const istoggleOpen=useSelector((store)=>store.toggle.istoggle)
  if(!istoggleOpen) return null;
  return (
    <div className= 'shadow-xl p-4 h-screen cursor-pointer  '>
       <ul className='space-y-3 '>
        <li className='flex items-center gap-4 p-2 hover:bg-gray-400 rounded-lg'>
           <MdHome size={24} />
         <Link to='/' ><span className='text-sm font-medium  '>Home</span></Link>
        
        </li>
         <li className="flex items-center gap-4 p-2 hover:bg-gray-400 cursor-pointer rounded-lg">
          <MdWhatshot size={24} />
          <span className="text-sm font-medium">Trending</span>
        </li>
        <li className="flex items-center gap-4 p-2 hover:bg-gray-400 cursor-pointer rounded-lg">
          <MdSubscriptions size={24} />
          <span className="text-sm font-medium">Shorts</span>
        </li>
        <hr  />
         <li className="flex items-center gap-4 p-2 hover:bg-gray-400 cursor-pointer rounded-lg">
          
          <span className="text-base font-medium">Subscriptions</span>
        </li>
        {/* -------------------------------------- */}
         <li className="flex items-center gap-4 p-2 hover:bg-gray-400 cursor-pointer rounded-lg">
          <GiCricketBat size={24} />
          <span className="text-sm font-medium">Cricket</span>
        </li>
         <li className="flex items-center gap-4 p-2 hover:bg-gray-400 cursor-pointer rounded-lg">
         <FaReact  size={24} />
          <span className="text-sm font-medium">Namsate React</span>
        </li>
         <li className="flex items-center gap-4 p-2 hover:bg-gray-400 cursor-pointer rounded-lg">
          <FaMusic size={24} />
          <span className="text-sm font-medium">Music</span>
        </li>
         <li className="flex items-center gap-4 p-2 hover:bg-gray-400 cursor-pointer rounded-lg">
          <FaVolleyballBall size={24} />
          <span className="text-sm font-medium">Sports</span>
        </li>
         <hr/>
        <li className="flex items-center gap-4 p-2 hover:bg-gray-400 cursor-pointer rounded-lg">
          <MdVideoLibrary size={24} />
          <span className="text-sm font-medium">Library</span>
        </li>
        <li className="flex items-center gap-4 p-2 hover:bg-gray-400 cursor-pointer rounded-lg">
          <MdHistory size={24} />
          <span className="text-sm font-medium">History</span>
        </li>
        <li className="flex items-center gap-4 p-2 hover:bg-gray-400 cursor-pointer rounded-lg">
          <MdOutlineVideoLibrary size={24} />
          <span className="text-sm font-medium">Your Videos</span>
        </li>
        <li className="flex items-center gap-4 p-2 hover:bg-gray-400 cursor-pointer rounded-lg">
          <MdWatchLater size={24} />
          <span className="text-sm font-medium">Watch Later</span>
        </li>
        <li className="flex items-center gap-4 p-2 hover:bg-gray-400 cursor-pointer rounded-lg">
          <MdThumbUp size={24} />
          <span className="text-sm font-medium">Liked Videos</span>
        </li>
         
      </ul>


</div>

    
  )
}

export default Sidebar;