import axios from '../../utils/axios'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

function SideNav() {



  return (
     <div className='w-[20%] h-screen border-r-[1px] flex flex-col gap-y-4 border-zinc-300 p-3'>
          <h1 className='text-[#6556CD] text-2xl px-5'>
               <i className="ri-tv-2-fill"></i>
               <span className='font-black text-white pl-2'>SCSDB.</span>
          </h1>

          <nav className='w-full flex flex-col gap-2'>
               <h1 className='text-lg font-bold font-sans'>New Feeds</h1>
               <Link to='/trending' className='py-4 pl-8 w-full hover:bg-[#6556CD] font-bold rounded-md duration-200 text-lg'>
                    <i className=" mr-4 ri-fire-fill"></i>
                    Trending
               </Link>
               <Link to='/popular' className='py-4 pl-8 w-full hover:bg-[#6556CD] font-bold rounded-md duration-200 text-lg'>
                    <i className=" mr-4 ri-bard-fill"></i>
                    Popular
               </Link>
               <Link to='/movie' className='py-4 pl-8 w-full hover:bg-[#6556CD] font-bold rounded-md duration-200 text-lg'>
                    <i className=" mr-4 ri-movie-fill"></i>
                    Movies
               </Link>
               <Link to='/tv' className='py-4 pl-8 w-full hover:bg-[#6556CD] font-bold rounded-md duration-200 text-lg'>
                    <i className=" mr-4 ri-tv-line"></i>
                    TV Shows
               </Link>
               <Link to='/person' className='py-4 pl-8 w-full hover:bg-[#6556CD] font-bold rounded-md duration-200 text-lg'>
                    <i className=" mr-4 ri-team-fill"></i>
                    People
               </Link>
          </nav>

          <hr className=' border-[1px] mx-2 border-zinc-400' />
          <nav className='w-full flex flex-col gap-2'>
               <h1 className='text-lg font-bold font-sans'>Website Information</h1>
               <Link to='/about' className='py-4 pl-8 w-full hover:bg-[#6556CD] font-bold rounded-md duration-200 text-lg'>
                    <i className=" mr-4 ri-information-fill"></i>
                    About SCSDB
               </Link>
               <Link to='/contactUs' className='py-4 pl-8 w-full hover:bg-[#6556CD] font-bold rounded-md duration-200 text-lg'>
                    <i className=" mr-4 ri-phone-fill"></i>
                    Contact Us
               </Link>
               
          </nav>
     </div>
  )
}

export default SideNav