import React from 'react'
import { Link } from 'react-router-dom'

function Notfound() {
  return (
     <div className='w-full h-screen flex items-center bg-[rgba(0,0,0,0.7)] justify-center'>
          
          <img src='/gif/404.gif' alt="" className='h-[50%] ' />
     </div>
  )
}

export default Notfound