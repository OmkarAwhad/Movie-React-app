import React, { useEffect, useState } from 'react'
import TopNav from './partials/TopNav'
import Dropdown from './partials/Dropdown'
import { useNavigate } from 'react-router-dom'
import axios from '../utils/axios'
import Card from './partials/Card'
import InfiniteScroll from 'react-infinite-scroll-component'
import Loading from './Loading'


function Trending() {

     const navigate = useNavigate()
     const [category, setcategory] = useState('all')
     const [duration, setduration] = useState('day')
     const [trending,setTrending] = useState([])
     const [page, setpage] = useState(1)
     const [hasMore, sethasMore] = useState(true)
     document.title = 'MovieDB | Trending'

     async function getTrending(){
          try {
               const response = await axios.get(`/trending/${category}/${duration}?page=${page}`)
               // setTrending(response.data.results)
               if(response.data.results.length > 0){
                    setTrending((prev) => [...prev, ...response.data.results])
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
          if(trending.length === 0){
               getTrending()
          }else{
               setpage(1)
               setTrending([])
               getTrending()
          }
     }

     useEffect(()=>{
          refreshHandler();
     },[category,duration])

  return (
    <div className='w-full h-screen '>
          <div className='flex items-center px-[5%] justify-between'>
               <h1 className='text-2xl font-semibold text-zinc-200'>
                    <i onClick={()=>navigate(-1)} className=" hover:text-[#6556CD] mr-2 duration-150 cursor-pointer ri-arrow-left-line"></i>
                    Trending
               </h1>
               <div className='flex items-center gap-6 w-[70%]'>
                    <TopNav placeholder={'Search Movie or TV show'}/>
                    <Dropdown title='Category' options={['all','movie','tv']} func={(e)=>setcategory(e.target.value)} />
                    <Dropdown title='Duration' options={['week','day']} func={(e)=>setduration(e.target.value)}/>
               </div>
          </div>

          <InfiniteScroll
               loader={<Loading/>}
               dataLength={trending.length}
               next={getTrending}
               hasMore={hasMore}
               >
               <Card data={trending} title={category}/>          
          </InfiniteScroll>

    </div>
  )
}

export default Trending