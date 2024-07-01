import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from '../../utils/axios'
import noImage from '../../../public/noimage.jpg'

function TopNav({placeholder}) {
  const [query, setQuery] = useState("");
  const [searches, setSearches] = useState([])

  const getData = async () => {
     try {
          const response = await axios.get(`/search/multi?query=${query}`)
          setSearches(response.data.results)
     } catch (error) {
          console.log(error)
     }
}

     useEffect(()=>{
          getData();
     },[query])

  return (
    <div className="w-full h-[10vh] ">
      <div className=" flex items-center mt-3 ml-20">

        <i className=" text-2xl ri-search-line"></i>
        <input
          type="text"
          placeholder={placeholder}
          value={query}
          name="query"
          onChange={(e) => setQuery(e.target.value)}
          className="w-2/3 p-3 mx-2 text-xl font-semibold text-zinc-200 outline-none bg-transparent"
        />
        {
          query.length>0 && <i onClick={()=>setQuery('')} className=" text-2xl ri-close-large-fill"></i>
        }
        
        
      </div>

      <div className=" z-[100] relative w-[47%] max-h-[40vh] left-[10%] ml-[10%] overflow-auto">
          {
               searches.length > 0 && searches.map((item,index) => {
                    return (
                         <Link to={`${item.media_type}/details/${item.id}`} key={index} className="border-b-2 duration-200 mt-[1px] text-zinc-300 hover:text-zinc-200 bg-zinc-600 border-zinc-400 hover:bg-zinc-400 p-4 rounded flex items-center gap-4">
                              <img 
                                   src={(item.backdrop_path || item.profile_path)? `https://image.tmdb.org/t/p/original/${item.backdrop_path||item.profile_path}` : `${noImage}`} className="h-20 w-28 object-cover rounded shadow-lg" alt="" />
                              <h1 className="font-bold ">{item.title || item.name || item.original_title || item.original_name }</h1>
                         </Link>
                    )
               })
          }       

      </div>

    </div>
  );
}

export default TopNav;
