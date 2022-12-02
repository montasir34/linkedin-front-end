

import React from 'react'

function Avatar({img, name, profile}) {
  return (
    <div onClick={()=> profile(prev => !prev)} className='p-2 flex flex-col cursor-pointer'>
      <img  className='rounded-full w-8 h-8' src={img} alt="" />
    </div>
  )
}

export default Avatar
