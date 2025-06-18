import React, { useEffect, useState } from 'react'
import Chats from './Chats';
import { FaAngleDown } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { appendChat } from '../utils/chatSlice';
import {getRandomName,getRandomMessage} from './Generate'
import { MdSend} from 'react-icons/md';
const LiveChat = () => {
    const displaychat=useSelector((store)=>store.chat.messages)
    const[LiveMessage,setLiveMessage]=useState("");
    const dispatch=useDispatch();
    //api poling
    useEffect(()=>{
          const i= setInterval(()=>{
            console.log("api useEffect")
            //here using some data to store in the redux using the dipatch 
            dispatch(appendChat({
                name:getRandomName(),
                message:getRandomMessage()
            }))
           },2000)
           return()=>{
            clearInterval(i);
           }
    },[])
  return (
    <div  className='ml-4 w-96 h-[450px] border border-gray-300 rounded-xl  '>
        <div className='px-3 text-lg border shadow-sm py-2 flex ' >
            Top Chat
            <span className='mt-2 px-2 '><FaAngleDown/></span>
        </div>
        <div className='flex flex-col-reverse h-[400px] overflow-y-scroll px-2'> 
          {
            displaychat.map(
                (c,i)=><Chats
                key={i}
                name={c.name}
                text={c.message}
                /> 
            )
          }

          </div>
          <form className=' py-2 border w-full rounded-md mt-1 flex'
        //    
        onSubmit={(e)=>{
            e.preventDefault()
            dispatch(appendChat({
                name:"sahil",
                message:LiveMessage,
            }))
            setLiveMessage(" ");
        }}

        >
               <input type='text'
               className=' rounded-sm bg-slate-100 w-3/4 ml-2 border-solid shadow-sm text-black' 
               placeholder='  Chats... 
                                                          😄  '
                value={LiveMessage}
             onChange={(e)=>{
               
                setLiveMessage(e.target.value)}
             }
               ></input>
              <button type="submit" className='ml-2 bg-black-100 mt-1'>
              <MdSend size={25}/>
               </button>
          </form>
   
    </div>
  )
}

export default LiveChat;