import React from 'react'
import { Link } from 'react-router-dom'
import noImage from '../../../public/noimage.jpg'


function HorizontalCards({data}) {
     return (
               
          <div className='flex gap-3 h-[54vh] px-5 py-3 overflow-x-auto'>
               {
                    data.map((item,index) => {
                         return(
                              <Link to={`/${item.media_type}/details/${item.id}`} key={index} className='min-w-[16vw] min-h-[45vh] bg-zinc-900 '>
                                   <img src={item.backdrop_path||item.poster_path ? `https://image.tmdb.org/t/p/original/${item.backdrop_path||item.poster_path}`: noImage} className='h-[30vh] w-full top-5 object-cover' alt="" />
                                   <div className='p-2 '>
                                        <h1 className='text-lg font-bold my-1'>{item.title || item.name || item.original_name || item.original_title}</h1>
                                        <p className='text-sm font-medium'>{item.overview.substr(0,90)+"....."} <span className='text-zinc-400 text-xs'>more</span> </p>
                                   </div>
                              </Link>
                         )
                    })
               }
          </div>
     )
}

export default HorizontalCards