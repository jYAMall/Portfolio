import React from 'react'
import fotoSite from '../photo.jpg'

const About = () => {
  return (
    <div className='w-full mx-auto px-4 py-8 bg-[#030a19] text-white text-center'>
        <div>Who I am</div>
        <div className='grid sm:grid-cols-1 lg:grid-cols-2 gap-2 py-16'>
            <div>
                <img  src={fotoSite} autoPlay loop muted/>
            </div> 
            <div className='flex flex-col'>
                <p className='text-lg  font-sans font-light'>
                    I am a full-stack blockchain developer. I have a passion for blockchain and I am always looking for new ways to solve problems.
                </p>
            </div>
            
        </div>
    </div>
  )
}

export default About