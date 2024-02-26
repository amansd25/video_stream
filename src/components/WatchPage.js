import React, { useEffect } from 'react'
import { closeMenu } from '../utils/appSlice'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom'

const WatchPage = () => {

  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));


 const dispatch = useDispatch();
  useEffect(()=>{
dispatch(closeMenu());
  },[])
  return (
    <div className='px-8'>
    <iframe
   width="1110" 
    height="525"
     src={"https://www.youtube.com/embed/"+ searchParams.get("v")}
     title="YouTube video player"
      frameborder="0"
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen>
      </iframe></div>
  )
}

export default WatchPage