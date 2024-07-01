import React from 'react'

function Dropdown({title,options,func}) {
  return (
    <div className='w-[15vw] text-black '>
          <select onChange={func} defaultValue='0' className='w-full bg-zinc-600 text-white font-bold border-2 border-[#6556CD] outline-none px-3 py-2 rounded-md' name="format" id="format">
               <option value="0" disabled>{title}</option>
               {
                    options.map((item,index)=>{
                         return <option key={index} value={item}>{item.toUpperCase()}</option>
                    })
               }
          </select>
    </div>
  )
}

export default Dropdown