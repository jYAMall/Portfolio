import React from 'react'

import videoSite from '../src/components/video.mp4'

const Body =  () => {
  return (
    <div className='w-full h-[90vh] top-[90px]'>
        <video scr={videoSite} autoPlay loop muted />
    </div>
  )
}

export default Body