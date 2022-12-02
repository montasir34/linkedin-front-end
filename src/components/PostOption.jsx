

import React from 'react'

function PostOption({Icon, title}) {
  // function iLike(likes){
  //   if(likes.filter(it => it.user.id === user.id)){
  //     return true
  //   }
  //   return false
  // }
  // likes.map(it => {
  //   console.log(it)
  // })
  return (
    <div className='flex cursor-pointer p-2 hover:bg-gray-200 gap-x-2 items-center'>
      <Icon className='md:text-2xl text-xl' />
      <h4>{title}</h4>
    </div>
  )
}

export default PostOption
