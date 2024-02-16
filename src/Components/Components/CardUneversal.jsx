import React from 'react'
import { useNavigate } from 'react-router'
export default function CardJadids({id , title, image, yil1, yil2, name}) {
  const navigate = useNavigate()
  return (

<div className=' jadidlar-contenier'>
        <div className='jadid-card mt-24 sm:ml-10 ml-10  shadow-xl !w-44 !h-64 lg:!w-60 lg:!h-80' key={id} onClick={()=> navigate(`/bittajadid/${id}`)}>
                <img  className='!w-full !h-48 lg:!w-full lg:!h-60 swiper-slideee' src={image} />  
               <center> <h3 className='line-clamp-1' >{title}</h3>
               <center><h3>{name}</h3></center>
                </center>
        </div>  
                {/* <p className='text-red-800'>({yil1}-{yil2} )</p> */}
    </div>
  )
} 