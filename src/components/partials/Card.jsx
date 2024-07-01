import React from 'react'
import { Link } from 'react-router-dom'
import noImage from '../../../public/noimage.jpg'


function Card({ data, title }) {
  console.log(title)
  return (
    <div className=' w-[100%] h-full bg-[#1F1E24] px-[5%]'>
      <div className='flex w-[90%] mx-auto  gap-5 flex-wrap'>
        {
          data.map((item, index) => {
            return (
              <Link to={`/${item.media_type || title}/details/${item.id}`} key={index} className='relative h-[40vh] w-[15vw] mb-5 '>
                <img
                  src={ item.backdrop_path || item.poster_path || item.profile_path ? `https://image.tmdb.org/t/p/original/${item.backdrop_path || item.poster_path || item.profile_path}` : noImage}
                  alt=""
                  className='h-[90%]  object-cover shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)]'
                />
                <h1 className='font-bold text-lg px-3 py-1'>{item.title || item.name || item.original_name || item.original_title}</h1>

              {
                item.vote_average && 
                <div className='absolute -right-4 font-bold text-lg top-2/3 bg-yellow-500 h-[50px] w-[50px] flex items-center justify-center rounded-full '>
                  {(item.vote_average * 10).toFixed()}
                  <sup>%</sup>
                </div>
              }
                
              </Link>
            )
          })}
      </div>
    </div>


  )
}

export default Card