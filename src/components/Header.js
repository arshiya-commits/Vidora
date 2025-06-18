// import React from 'react'
// import { FaSearch } from 'react-icons/fa';
// import { HiOutlineUser } from 'react-icons/hi';
// const Header = () => {
//   return (
//     <div className=' flex items-center justify-between px-4 py-2 bg-white shadow-sm sticky top-0 '>
//     <div className='flex items-center space-x-4'>
//         <img alt="hamburger" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8AAABLS0vPz8+Wlpb39/ehoaHu7u6NjY3n5+eCgoKsrKy+vr7IyMjv7+8vLy9ycnJbW1t4eHgYGBg5OTnb29tiYmIxMTEJCQlQUFCRkZEfHx+4uLg/Pz8QEBA4ODiTPnadAAACe0lEQVR4nO3dCW7CMBCF4bQQlpawltK9979lRSOEKqqxwZZGb/J/J3ijxCF2BrtpAAAAAAAAAAAAAAAAACC+djHb3OvYzBbtVfXNt3d6tvP8AmfeYW80y71BV95Jb7bKulXbnXfOArtlRoXf3imLPKULfPDOWOghVeDeO2GxfaLCZ++AxZ7tAqfe+SqYmhU+eser4NGscO0dr4K1WaHuj/3ZwazwxTteBS9mhd7pqjArVH5jO9mZFb56x6vg1azwzTteBW9mhSPveBWMzAqbd+98xd7tApuJd8Bik0SF8hcxdQn1R2JiFB5pv3zbr90BhmJyEPYW3jlvtsgrsGmWmpOodc5C28l8rDaPWo2vWPLutfuRjv11Xy0AAAAAAAAAAICUaTcZ65h0ds/lpQ+91qH7jyvq69Q+rfVWXW6Bus3syTb23sY7Z4FNToGaX7hP7AbhX9rNJhntJvrN+ql2Bd2nzEniadN656vAblrQbRY6s9uG9G/S1G366R2vgk+zwi/veBV8mRV6p6ti4Ncw/jiM/yyN/3sY/50mwG2amgUvvQMWS7ZCh58fDmCOr/2X/Kx1GuWnTeZa2wDWS5v4a95H0b9bAAAAAAAAAAAAIcH3iYq+11f4/dp024Yy99wLv2+idrtJRrNJ/P1Lw+9BqzwIe6mhqH4JkxdRfRQe2SMx/p7seo1Cl+x99eOfjeCdrgqzwvhnlKjNmf5jnzOjOW36y24T1n7t7tkv3/p/A06d2SXd5N1LnLs2gLPzhNvYexnN7E/eGYtknGEpfg5p3lGrB++cNzvkLgxHPw+4GcCZzsdbtRM7l7vjhAsAAAAAAAAAAAAAAAAAQ/ADAnZUjrcBInYAAAAASUVORK5CYII="></img>
//         <img alt="youtube icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnEXQdAa-3ljX26kSoD1zDIGZnVP6Wyy4wJg&s"></img>
//     </div>  
// <div>
//     <input type='text'></input>
//     <FaSearch size={24} color="black" />
// </div>

// <div>
    
// <HiOutlineUser size={42} color="black" />
// </div>

//     </div>
//   )
// }

// export default Header
import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { HiOutlineUser } from 'react-icons/hi';
import {useDispatch, useSelector} from 'react-redux';
import { toggleMenu } from "../utils/appToggleSlice"; // ✅ import your action
import {useState,useEffect} from 'react';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { cacheResults } from '../utils/searchSlice';

const Header = () => {
  const[suggestions,setSuggestions]=useState([]);
  const[showSuggestions,setshowSuggestions]=useState();
  const [search,setSearch]=useState("");
  const searchCache=useSelector((store)=>store.search);
 
  

  useEffect(()=>{
 //make an api call anad thenafter every press their should be diffeernce of 200ms , for better performance 
 //if it is less thann 200ms decline the api call, for that we need to clear the settimeout
//  console.log("api-call",search);
 const timer=setTimeout(()=>{

  if(searchCache[search]){
       setSuggestions(searchCache[search]);
  }
  else{
    getSearch();
  }
},200);
 //clear the timer if the key press is lesser than 200
 return()=>{
  clearTimeout(timer);
 }

 
  },[search]);
  const getSearch=async()=>{
    const data=await fetch(YOUTUBE_SEARCH_API+search);
    const json=await data.json();
    // console.log("api call",json);
    setSuggestions(json[1])
    //adding the data
    //iphone:{ip,ipho,iphone}
    dispatch(cacheResults({
      [search]:json[1],
    }

    ));

  }
  const dispatch=useDispatch();
  const handleIcon=()=>{
      dispatch(toggleMenu());
  }
  return (
    <div className="flex items-center justify-between px-4 py-2   sticky top-0 bg-white">
      {/* Left side - Logo and hamburger menu */}
      <div className="flex items-center space-x-4">
        <img 
          alt="hamburger" 
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8AAABLS0vPz8+Wlpb39/ehoaHu7u6NjY3n5+eCgoKsrKy+vr7IyMjv7+8vLy9ycnJbW1t4eHgYGBg5OTnb29tiYmIxMTEJCQlQUFCRkZEfHx+4uLg/Pz8QEBA4ODiTPnadAAACe0lEQVR4nO3dCW7CMBCF4bQQlpawltK9979lRSOEKqqxwZZGb/J/J3ijxCF2BrtpAAAAAAAAAAAAAAAAACC+djHb3OvYzBbtVfXNt3d6tvP8AmfeYW80y71BV95Jb7bKulXbnXfOArtlRoXf3imLPKULfPDOWOghVeDeO2GxfaLCZ++AxZ7tAqfe+SqYmhU+ecer4NGscO0dr4K1WaHuj/3ZwazwxTteBS9mhd7pqjArVH5jO9mZFb56x6vg1azwzTteBW9mhSPveBWMzAqbd+98xd7tApuJd8Bik0SF8hcxdQn1R2JiFB5pv3zbr90BhmJyEPYW3jlvtsgrsGmWmpOodc5C28l8rDaPWo2vWPLutfuRjv11Xy0AAAAAAAAAAICUaTcZ65h0ds/lpQ+91qH7jyvq69Q+rfVWXW6Bus3syTb23sY7Z4FNToGaX7hP7AbhX9rNJhntJvrN+ql2Bd2nzEniadN656vAblrQbRY6s9uG9G/S1G366R2vgk+zwi/veBV8mRV6p6ti4Ncw/jiM/yyN/3sY/50mwG2amgUvvQMWS7ZCh58fDmCOr/2X/Kx1GuWnTeZa2wDWS5v4a95H0b9bAAAAAAAAAAAAIcH3iYq+11f4/dp024Yy99wLv2+idrtJRrNJ/P1Lw+9BqzwIe6mhqH4JkxdRfRQe2SMx/p7seo1Cl+x99eOfjeCdrgqzwvhnlKjNmf5jnzOjOW36y24T1n7t7tkv3/p/A06d2SXd5N1LnLs2gLPzhNvYexnN7E/eGYtknGEpfg5p3lGrB++cNzvkLgxHPw+4GcCZzsdbtRM7l7vjhAsAAAAAAAAAAAAAAAAAQ/ADAnZUjrcBInYAAAAASUVORK5CYII="
          className="h-6 w-6 cursor-pointer"
         onClick={()=>handleIcon()}
        />
        <img 
          alt="youtube icon" 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnEXQdAa-3ljX26kSoD1zDIGZnVP6Wyy4wJg&s"
          className="h-16 cursor-pointer"
        />
      </div>
      
      {/* Middle - Search bar */}
      <div className="flex justify-center items-center mx-2 w-2/4">
        <div className="relative w-full relative cursor-pointer">
          <input 
            type="text" 
            placeholder="Search" 
            className="w-full px-2 py-2 border border-gray-300 rounded-l-full focus:outline-none focus:border-blue-500"
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            onFocus={()=>setshowSuggestions(true)}
            onBlur={()=>setshowSuggestions(false)}
          />
        {showSuggestions &&   <ul className="rounded-lg absolute top-full left-0 w-full bg-white z-50 shadow-md max-h-60 overflow-y-auto">
          {suggestions.map((s)=>(
            <li key={s} className='ml-2 shadow-sm py-2 hover:bg-gray-100 flex text-base' 
            
            
            >
              <span className="mr-2 mt-1">
               <FaSearch size={15} color="gray" />
                </span>
              {s}</li>
              ) )}
          </ul>
}
            </div>
          <button className="bg-gray-100 px-3 py-2.5 border border-l-0 border-gray-300 rounded-r-full hover:bg-gray-200">
            <FaSearch size={20} color="gray" />
          </button>
           
          
          </div>
    
        
         
        
      
      {/* Right - User profile */}
      <div className="flex items-center justify-end">
        <div className="cursor-pointer p-2 rounded-full hover:bg-gray-100">
          <HiOutlineUser size={28} color="gray" />
        </div>
      </div>
    </div>
  );
};

export default Header;      