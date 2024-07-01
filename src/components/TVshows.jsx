import React, { useEffect, useState } from 'react'
import TopNav from './partials/TopNav'
import Dropdown from './partials/Dropdown'
import { useNavigate } from 'react-router-dom'
import axios from '../utils/axios'
import Card from './partials/Card'
import InfiniteScroll from 'react-infinite-scroll-component'
import Loading from './Loading'

function TVshows() {

     document.title = 'MovieDB | TV shows'
     const navigate = useNavigate()
     const [category, setcategory] = useState('airing_today')
     const [tvShows,settvShows] = useState([])
     const [page, setpage] = useState(1)
     const [hasMore, sethasMore] = useState(true)

     async function getTvShows(){
          try {
               const response = await axios.get(`tv/${category}?page=${page}`)
               // setTrending(response.data.results)
               if(response.data.results.length > 0){
                    settvShows((prev) => [...prev, ...response.data.results])
                    setpage(prev => prev+1)
               }else{
                    sethasMore(false)
               }
               // console.log(response)
          } catch (error) {
               console.log(error)
          }
     }

     // console.log(trending)

     const refreshHandler = () => {
          if(tvShows.length === 0){
               getTvShows()
          }else{
               setpage(1)
               settvShows([])
               getTvShows()
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
                    TV Shows
               </h1>
               <div className='flex items-center gap-6 w-[70%]'>
                    <TopNav placeholder={'Search TV Shows'}/>
                    <Dropdown title='Category' options={['airing_today','on_the_air','top_rated','popular']} func={(e)=>setcategory(e.target.value)} />
                    {/* <Dropdown title='Duration' options={['week','day']} func={(e)=>setduration(e.target.value)}/> */}
               </div>
          </div>

          <InfiniteScroll
               loader={<Loading/>}
               dataLength={tvShows.length}
               next={getTvShows}
               hasMore={hasMore}
               >
               <Card data={tvShows} title='tv'/>          
          </InfiniteScroll>

     </div>
  )
}

export default TVshows