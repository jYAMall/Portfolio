import React from 'react'

import videoSite from '../video1.mp4'


const Body =  () => {
  return (
    <div className='w-full h-[90vh] top-[90px]'>
        <video className="object-cover h-full w-full absolute -z-10 cover" src={videoSite} autoPlay loop muted/>
        <div className='text-4xl w-full h-[90%] flex flex-col justify-center items-center text-white px-4' >
          <h1 className='py-0'>Hello 👋, I'm Eugene Martsynenko.</h1>
          <h2 className='py-8'>I'm a full-stack blockchain developer.</h2>
          <button className='text-lg  font-sans bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-2 px-4 '>View my work</button>
        </div>
        <div>
        <div className='text-center text-white front-uppercase'>Blockchain solutions | DAO | NFT | DeFi | DEX | Cryptocurrency | Web3.0</div>
        </div>
    </div>
  )
}

export default Body