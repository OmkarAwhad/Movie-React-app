import React from 'react'
import ReactPlayer from 'react-player';
import { useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Notfound from '../Notfound';

function Trailer() {

     const navigate = useNavigate()
     const {pathname} = useLocation()
     const category = pathname.includes('movie')?'movie':'tv';
     const ytvideo = useSelector((state) => state[category].info.videos)
     // console.log("https://www.youtube.com/watch?v=",ytvideo.key)

  return ytvideo ?   (
    <div className='absolute top-0 bottom-0 flex w-full h-full z-[100] items-center justify-center bg-[rgba(0,0,0,0.8)]'>
          <Link onClick={()=>navigate(-1)} className='absolute top-7 right-20 font-black text-xl'><i className="ri-close-large-fill"></i></Link>
          <ReactPlayer 
               controls
               width={1200}
               height={700}
               url={`https://www.youtube.com/watch?v=${ytvideo.key}`}
          />
    </div>
  ): (
     <div className='absolute top-0 bottom-0 flex w-full h-full z-[100] items-center justify-center'>
          <Link onClick={()=>navigate(-1)} className='absolute top-7 right-20 font-black text-xl'><i className="ri-close-large-fill"></i></Link>
          <Notfound/>
     </div>
     )
}

export default Trailer