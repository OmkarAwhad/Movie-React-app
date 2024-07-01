import React, { useEffect, useState } from 'react'
import SideNav from './partials/SideNav'
import TopNav from './partials/TopNav'
import Header from './partials/Header'
import axios from '../utils/axios'
import { RiH1 } from 'react-icons/ri'
// import { data } from 'autoprefixer'
import HorizontalCards from './partials/HorizontalCards'
import Dropdown from './partials/Dropdown'
import Loading from './Loading'

function Home() {

     const [wallpaper, setWallpaper] = useState(null)
     const [trending, setTrending] = useState([])
     const [filter, setFilter] = useState('all')

     async function getWallpaper(){
          try {
               const response = await axios.get(`/trending/all/day`)
               let randomData = response.data.results[(Math.random() * response.data.results.length).toFixed()]
               setWallpaper(randomData)
               // console.log(response.data.results)
               // console.log(randomData)
          } catch (error) {
               console.log(error)
          }
     }

     async function getTrending(){
          try {
               const response = await axios.get(`/trending/${filter}/day`)
               setTrending(response.data.results)
          } catch (error) {
               console.log(error)
          }
     }


     useEffect(()=>{
          getTrending()
          !wallpaper && getWallpaper();
     },[filter])

  return wallpaper?(
    <div className='flex'>
     <SideNav/>
     <div className='w-[81%] overflow-y-auto overflow-x-auto h-screen'>
     <TopNav placeholder={'Search Movie or TV show'}/>
          <Header data={wallpaper}/>
          <div className='flex justify-between items-center px-5 py-4'>
               <h1 className='font-bold text-zinc-300 text-xl'>Trending</h1>
               <Dropdown title='Filter' options={['tv','movie','all']} func={(e)=>setFilter(e.target.value)} />
          </div>
          <HorizontalCards data={trending}/>
     </div>
    </div>
  ):<Loading/>
}

export default Home