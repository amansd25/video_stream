import React from 'react'

const VideoCard = ({info}) => { 

   {/*console.log(info);*/ } 
    const{snippet, statistics} = info;
    const {channelTitle , thumbnails , title} = snippet                                                 
  return (
    <div className='flex flex-wrap max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-lg'>
      <img  alt ="title"src={thumbnails.high.url}/>
      <span class="bg-black text-white rounded-full p-2 absolute top-2 right-2">
      <i class="far fa-play-circle"></i>
    </span>
    <div class="p-4">
    <h2 class="text-lg font-semibold text-gray-900">{title}</h2>
  <p class="text-sm text-gray-600">{channelTitle}</p>
    <p class="text-sm text-gray-600">{statistics.viewCount}</p>
  </div>
    </div>
  )
}

export default VideoCard