import React from 'react'

function PopupContainer({isPopup}) {
  return (
    <div onClick={()=> isPopup(prev => !prev)} className='fixed top-0 z-40 bg-black/20 backdrop-blur-sm w-screen h-full'>
    
    </div>
  )
}

export default PopupContainer
