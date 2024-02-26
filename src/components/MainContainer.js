import React from 'react'
import VideoContainer from './VideoContainer'
import ButtonList from './ButtonList'
const MainContainer = () => {
  return (
    <div className='flex flex-wrap'>
      <ButtonList/>
    <VideoContainer />
    </div>
    
  )
}

export default MainContainer