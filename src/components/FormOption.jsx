


import React from 'react'

function FormOption({Icon, title, color}) {
  return (
    <div className='flex items-center gap-x-1 p-1 mt-3 cursor-pointer hover:bg-gray-200' >
      <Icon className={color} />
      <h2 className='font-bold whitespace-nowrap text-sm text-gray-500'>{title}</h2>
    </div>
  )
}

export default FormOption
