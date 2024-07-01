import React, { useEffect, useState } from 'react'
import TopNav from './partials/TopNav'
import Dropdown from './partials/Dropdown'
import { useNavigate } from 'react-router-dom'
import axios from '../utils/axios'
import Card from './partials/Card'
import InfiniteScroll from 'react-infinite-scroll-component'
import Loading from './Loading'

function Popular() {
     document.title = 'MovieDB | Popular'
     const navigate = useNavigate()
     const [category, setcategory] = useState('movie')
     const [popular,setPopular] = useState([])
     const [page, setpage] = useState(1)
     const [hasMore, sethasMore] = useState(true)

     async function getPopular(){
          try {
               const response = await axios.get(`/${category}/popular?page=${page}`)
               // setTrending(response.data.results)
               if(response.data.results.length > 0){
                    setPopular((prev) => [...prev, ...response.data.results])
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
          if(popular.length === 0){
               getPopular()
          }else{
               setpage(1)
               setPopular([])
               getPopular()
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
                    Popular
               </h1>
               <div className='flex items-center gap-6 w-[70%]'>
                    <TopNav placeholder={'Search Movie or TV show'}/>
                    <Dropdown title='Category' options={['movie','tv']} func={(e)=>setcategory(e.target.value)} />
                    {/* <Dropdown title='Duration' options={['week','day']} func={(e)=>setduration(e.target.value)}/> */}
               </div>
          </div>

          <InfiniteScroll
               loader={<Loading/>}
               dataLength={popular.length}
               next={getPopular}
               hasMore={hasMore}
               >
               <Card data={popular} title={category}/>          
          </InfiniteScroll>

     </div>
  )
}

export default Popular