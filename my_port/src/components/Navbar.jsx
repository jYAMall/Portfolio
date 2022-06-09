import React from 'react';
import { HiMenu, HiOutlineX } from 'react-icons/hi';


const Navbar = () => {
    const [toggleMenu, setToggleMenu] = React.useState(false);
   /* const handleNav = () => {
        setToggleMenu(!toggleMenu);
    }*/


  return (
    <div className='w-full h-[90px] navbar'>
        <div className='max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full '>
            <div className='bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500'></div>
            <div className='hidden md:flex'>
                <ul className='flax text-lg font-sans font-light text-white md:flex hidden list-none flex-row justify-between items-center flex-initial absolute'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Skills</li>
                    <li>Contacts</li>
                    <button class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-2 px-7 mx-4 cursor-pointer hover:bg-[#10ebf9] " > Offer of cooperation </button>
                </ul>
                
            </div>
            <div className='flex relative'>
                {toggleMenu
                    ? <HiOutlineX frontSize={28} className='text-white md:hidden cursor-pointer' onClick={() => setToggleMenu (false)}/>
                    : <HiMenu frontSize={28} className='text-white md:hidden cursor-pointer' onClick={() => setToggleMenu (true)}/>
                }
                {toggleMenu && (
                <div className='z-40 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
                flex flex-col items-center rounded-md blue-glassmorphism text-white animate-slide-in'>
                        <div className='text-white md:hidden cursor-pointer ml-auto px-3 flex justify-between items-center h-[65px]'>
                            <HiOutlineX onClick={() => setToggleMenu(false)} />
                        </div>
                        <li>Home</li>
                        <li>About</li>
                        <li>Skills</li>
                        <li>Contacts</li>
                        <button class="bg-cyan-500 shadow-lg shadow-cyan-500/50 text-white py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#10ebf9]" > Offer of cooperation </button>
                </div>
                )}
            </div>
        </div>
    </div>
  )
}

export default Navbar
