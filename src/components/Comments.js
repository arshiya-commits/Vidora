import React from 'react'
import Comreply from './Comreply'

const comments = () => {
  const list=[
    {
      name:"arshiya",
      comment:"the video is amazing",
      replies:[
        {
      name:"arshiya",
      comment:"the video is amazing",
      replies:[
           {
      name:"arshiya",
      comment:"the video is amazing",
      replies:[
{
      name:"arshiya",
      comment:"the video is amazing",
      replies:[
          {
      name:"arshiya",
      comment:"the video is amazing",
      replies:[]}
      ]}
      ]}
      ]}
      ]
    },
    {
      name:"arshiya",
      comment:"the video is amazing",
      replies:[

      ]},
      {
      name:"arshiya",
      comment:"the video is amazing",
      replies:[

      ]}
      
     
   


    
  ]

  const Commentlist=({comments})=>{

    return comments.map((comment,index)=>(
    <div>  
    <Comreply key={index} data={comment}/>
    <div className='pl-8  border border-l-black ml-5 shadow-sm'>
      <Commentlist  comments={comment.replies}/>
    </div>
    </div>))
  }
  return (
    <div className='ml-5'>
      <h4 className='font-bold text-xl' >Comments</h4>
    <Commentlist comments={list}/>
       
    </div>
  )
}

export default comments