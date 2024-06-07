import React from 'react'
import { mobileNavigation } from '../constants/Navigation'
import { Link } from 'react-router-dom'

const MobileNavigation = () => {
  return (
    <div className='block md:hidden'>
    <div className=' bottom-0 w-full fixed h-16 bg-gray-400 flex justify-between items-center px-3 ' >  
{
  mobileNavigation.map((item,ind)=>{
return (
  <div key={ind} >
  <Link to={item.href} className='text-2xl'>{item.icon} </Link>
  <p>{item.label}</p>
  </div>
)
  })
}
    </div>
    </div>
  )
}

export default MobileNavigation