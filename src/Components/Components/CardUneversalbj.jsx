import React from 'react'

export default function Carduneversalbj({id , title, image, yil1, yil2}) {
  return (
    <div className='jadid-card  shadow-xl w-60 h-80 mt-40' key={id}>
    <img className='w-96 h-96' src={image} />
    <h3 className='line-clamp-1' >{title}</h3>
    <p className='text-red-800'>({yil1}-{yil2} )</p>
</div>  
  )
}
