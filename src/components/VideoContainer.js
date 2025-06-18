import React from 'react'
import {useState,useEffect} from  'react'
import { YOUTUBE_API } from '../utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import Shimmer from './Shimmer';
const VideoContainer = () => {  
  const  [vidoes,setVidoes]=useState([])
  useEffect(
    ()=>{
     getVideos();
    },[]
  )
  const getVideos=async()=>{
    const data= await fetch(YOUTUBE_API);
    const json= await data.json();
   
         setVidoes(json.items)
    }
  

  return (
     <div className="flex flex-wrap">
    {vidoes.length === 0 ? (
      <Shimmer />
    ) : (
      vidoes.map(video => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard info={video} />
        </Link>
      ))
    )}
  </div>
  )
};

export default VideoContainer;