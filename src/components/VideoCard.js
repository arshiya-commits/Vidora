// import React from 'react'

// const VideoCard = ({info}) => {
//     console.log(info);
//     if (!info || !info.snippet || !info.statistics) {
//     return <div>Loading...</div>; // or return nothing/null
//   }
//     const {statistics,snippet}=info;
//     const{channelTitle,title,thumbnails}=snippet;

   
//   return (
//     <div>
//         <div>
//             <img alt="thumnail">
//             src={thumbnails.medium.url}
//             </img>
//             <ul>
//                 <li>
//                    { title}
//                 </li>
//                  <li>
//                    { channelTitle}
//                 </li>
//                  <li>
//                     {statistics.viewCount}
//                  </li>

//             </ul>
//         </div>
//     </div>
//   )
// }

// export default VideoCard
import React from 'react';


  
  const getTimeAgo=(dateStr)=>{
    const publishedDate=new Date(dateStr);
    const currentDate=new Date();
    const diff=currentDate-publishedDate;
    const years=Math.floor(diff/(1000*60*60*24*365));
  
  if(years>=1) return `${years}y ago`;
  const months=Math.floor(diff/(1000*60*60*24*30));
  if (months >= 1) return `${months}mo ago`;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  if (days >= 1) return `${days}d ago`;
  return 'Today';
}
  const formatViews = (num) => {
  if (num >= 1_000_000_000) return (num / 1_000_000_000).toFixed(1) + 'B';
  if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + 'M';
  if (num >= 1_000) return (num / 1_000).toFixed(1) + 'K';
  return num;
};
const VideoCard = ({ info }) => {
  return (
  
    <div className='px-2 py-2 mt-3  w-[300px] font-sans '>
      
        <img
          alt="thumbnail"
          src={info.snippet.thumbnails.medium.url}
          className='rounded-xl shadow-sm w-full h-auto hover:rounded-none cursor-pointer'
        />
        <ul>
          <li className='font-semibold truncate'>{info.snippet.title}</li>
          <li className='font-semibold text-gray-400 '>{info.snippet.channelTitle}</li>
          <li>{formatViews(Number(info.statistics.viewCount))} views •  {getTimeAgo(info.snippet.publishedAt)}
           
            
          </li>

        </ul>
     
    </div>
  );
};

export default VideoCard;
