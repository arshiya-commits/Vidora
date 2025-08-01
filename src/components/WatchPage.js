import React from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { closeMenu } from "../utils/appToggleSlice";
import { useSearchParams } from 'react-router-dom';
import Comments  from './Comments';
import LiveChat from './LiveChat';
const WatchPage = () => {
    const[searchParams]=useSearchParams();

    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(closeMenu());
    },[])
  return (
    <div >
    <div className='p-5 ml-4 flex '> 
        <iframe className="rounded-xl"width="1000" height="400" 
        src={"https://www.youtube.com/embed/"+searchParams.get("v")}
        title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        <div>
      <LiveChat/>
    </div>
    </div>

    <div className='flex flex-col'>
       <Comments/>
    </div>
    </div>
  )
}

export default WatchPage