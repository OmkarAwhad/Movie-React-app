import React from 'react'
import { Link } from 'react-router-dom'

function Header({data}) {

     // console.log(data.backdrop_path)

  return (
    <div style={{
          background:`linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.7), rgba(0,0,0,0.9)), url(https://image.tmdb.org/t/p/original/${data.backdrop_path||data.poster_path})`,
          backgroundPosition:'top 10%', 
          backgroundRepeat:"none", 
          backgroundSize:"cover"
          }} 
          className='w-full h-[60vh] flex items-end p-10'>
          <div className='w-1/2 '>
               <h1 className='text-5xl font-black my-8'>{data.title || data.name || data.original_name || data.original_title}</h1>
               <h1 className='my-3'>
                    {data.overview.substr(0,200)+"......."}
                    <Link to={`${data.media_type}/details/${data.id}`} className='text-blue-500'>
                         read more
                    </Link>
               </h1>
               <div className='flex items-center mb-6'>
                    <i className="text-yellow-400 font-semibold ml-2 mr-1 ri-megaphone-fill"></i>
                    {data.release_date ? <h1 className='font-semibold'>{data.release_date}</h1> : <h1>N.A.</h1>}
                    <i className="text-yellow-400 font-semibold ml-5 mr-1 ri-album-fill"></i>
                    <h1 className='font-semibold capitalize'>{data.media_type}</h1>
               </div>
               <Link to={`/movie/details/${data.id}/trailer`} className='bg-[#6556CD] px-6 py-3 rounded-md text-zinc-200 hover:bg-[#7d6bf5] font-black hover:text-white duration-300'>Watch Trailer</Link>
          </div>
    </div>
  )
}

export default Header