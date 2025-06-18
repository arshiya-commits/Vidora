import React,{useState} from 'react'
import { nthPrime } from './Generate'

const Demo = () => {
     const[text,setText]=useState("");
     const[isDark,setDarkTheme]=useState(false)
     const prime=nthPrime(text)
  return (
   
    <div className={`m-8 p-2 w-96 h-96 border-dotted bg-pink-100 shadow-xl hover:scale-105 transform transition-all duration-300 rounded ${isDark?'bg-gray-900 text-white':'bg-pink-100 text-black'}`} >
        <input 
        type='number'
        className='mt-4  w-full p-2 bg-gray-100 $'
        placeholder='enter a num'
       
        //if we type now the ui won't update even if we type also
         value={text}
         //so to update it we need to use the setText
         onChange={(e)=>setText(e.target.value)}
        >
            </input>
            <div className=''>
              <h6>Nthprime:{prime}</h6>  
            </div>
            <button 
            className='p-2 ml-12 bg-black'
            onClick={()=>setDarkTheme(!isDark)}
        
            >toggle</button>
    </div>
  )
}

export default Demo