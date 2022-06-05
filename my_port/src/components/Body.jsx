import React from 'react'

import videoSite from '../video1.mp4'

const Body =  () => {
  return (
    <div className='w-full h-[90vh] top-[90px]'>
        <video className="object-cover h-full w-full absolute -z-10" src={videoSite} autoPlay loop muted/>
        <div className='text-4xl w-full h-[90%] flex flex-col justify-center items-center text-white px-4' >
          <h1 className='py-0'>Hello 👋, I'm <span className='bg-gradient-to-r from-cyan-500 to-blue-500'> Eugene Martsynenko</span>.</h1>
          <h2 className='py-8'>I'm a full-stack blockchain developer.</h2>
          <button className='text-lg  font-sans bg-[#3ac9ff] hover:bg-blue-700 text-white py-2 px-4 rounded-full'>View my work</button>
        </div>
        <div>
          <p className='text-center blockchain  '>Blockchain solutions | DAO | NFT | DeFi | DEX | Cryptocurrency | Web3.0</p>
        </div>
    </div>
  )
}

export default Body