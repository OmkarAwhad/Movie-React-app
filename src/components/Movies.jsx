import React, { useEffect, useState } from 'react'
import TopNav from './partials/TopNav'
import Dropdown from './partials/Dropdown'
import { useNavigate } from 'react-router-dom'
import axios from '../utils/axios'
import Card from './partials/Card'
import InfiniteScroll from 'react-infinite-scroll-component'
import Loading from './Loading'

function Movies() {

     document.title = 'MovieDB | Movies'
     const navigate = useNavigate()
     const [category, setcategory] = useState('now_playing')
     const [movies,setmovies] = useState([])
     const [page, setpage] = useState(1)
     const [hasMore, sethasMore] = useState(true)

     async function getMovies(){
          try {
               const response = await axios.get(`movie/${category}?page=${page}`)
               // setTrending(response.data.results)
               if(response.data.results.length > 0){
                    setmovies((prev) => [...prev, ...response.data.results])
                    setpage(prev => prev+1)
               }else{
                    sethasMore(false)
               }
               console.log(response)
          } catch (error) {
               console.log(error)
          }
     }

     // console.log(trending)

     const refreshHandler = () => {
          if(movies.length === 0){
               getMovies()
          }else{
               setpage(1)
               setmovies([])
               getMovies()
          }
     }

     useEffect(()=>{
          refreshHandler();
     },[category])

  return (
     <div className='w-full h-screen '>
          <div className='flex items-center px-[5%] justify-between'>
               <h1 className='text-2xl font-semibold text-zinc-200'>
                    <i onClick={()=>navigate(-1)} className=" hover:text-[#6556CD] mr-2 duration-150 cursor-pointer ri-arrow-left-line"></i>
                    Movies
               </h1>
               <div className='flex items-center gap-6 w-[70%]'>
                    <TopNav placeholder={'Search Movie'}/>
                    <Dropdown title='Category' options={['now_playing','popular','top_rated','upcoming']} func={(e)=>setcategory(e.target.value)} />
                    {/* <Dropdown title='Duration' options={['week','day']} func={(e)=>setduration(e.target.value)}/> */}
               </div>
          </div>

          <InfiniteScroll
               loader={<Loading/>}
               dataLength={movies.length}
               next={getMovies}
               hasMore={hasMore}
               >
               <Card data={movies} title='movie'/>          
          </InfiniteScroll>

     </div>
  )
}

export default Movies