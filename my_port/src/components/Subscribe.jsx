import React from 'react'

const Subscribe = () => {
  return (
    <div className='w-full px-4 '>
        <h1 className='text-center text-white'> Contacts</h1>
        <div className='grid sm:grid-cols-1 lg:grid-cols-2 gap-2  '>
            <div className='flex flex-col skills'>
                <h3 className='font-sans font-light text-left text-white'>Contact me</h3>
                <input className='my-4' type='email' placeholder='Enter your email'/>
                <input className='my-4' type='message' placeholder='Enter your message'/>
                <button className=' my-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-2 px-7 mx-4 cursor-pointer hover:bg-[#10ebf9] ' > Send </button>
            </div>
                <div className='flex flex-col skills'>trum</div>
        </div>
    </div>
  )
}

export default Subscribe