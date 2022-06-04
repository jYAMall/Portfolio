import React from 'react'

import videoSite from '../video1.mp4'

const Body =  () => {
  return (
    <div className='w-full h-[90vh] top-[90px]'>
        <video src={videoSite} autoPlay loop muted/>
    </div>
  )
}

export default Body