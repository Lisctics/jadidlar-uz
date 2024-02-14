import React from 'react'

export default function Hikmatlars({text}) {
  return (
    <div>
        <p className='hikmatlar_p text-2xl m-10' 
        dangerouslySetInnerHTML={{ __html: text }}></p>
        < hr className='bg-red-500 h-1'/>
    </div>
  )
}
