import React from 'react'

const Navbar = () => {
  return (
    <nav className='w-full h-12 shadow flex items-center justify-around bg-gradient-to-r from-slate-500 via-gray-300 to-gray-200'>
        <div>
            <p className='text-xl font-bold text-white text-capitalise'>Olakitan <span>.</span></p>
        </div>

        <div>
            <a href=""className='me-4 hover:underline hover: text-white'>Home</a>
            <a href=""className='me-4 hover:underline hover: text-white'>About</a>
            <a href=""className='me-4 hover:underline hover: text-white'>Products</a>
            <a href=""className='me-4 hover:underline hover: text-white'>Testimonies</a>
            <a href=""className='me-4 hover:underline hover: text-white'>Contacts</a>
        </div>

        <div>
            <button className='py-1 px-4 border rounded-full hover:animate-bounce hover:bg-gray-800 hover:text-white'>Register</button>
            <button className='py-1 px-4 border rounded-full hover:animate-bounce hover:bg-gray-800 hover:text-white '>Login</button>
        </div>
    </nav>
  )
}

export default Navbar
