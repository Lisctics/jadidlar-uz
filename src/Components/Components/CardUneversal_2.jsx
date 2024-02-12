import React from 'react'
export default function CardUneversal_2({id, title, image}) {
    return (
      <div>
        <div className='card-item card-item_2 !h-44 !w-28 lg:!h-477 lg:!w-72' id={id == 1? "Ha" : ""} key={id}>
            <p className='!text-xs lg:!text-xl !mb-5'>{title}</p>
            <img className='card-item_img_2 !h-36 !w-28 lg:!h-367 lg:!w-72 !mt-0' alt="" src={image} />
        </div>
      </div>
    )
  }
  