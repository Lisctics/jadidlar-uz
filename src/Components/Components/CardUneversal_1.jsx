import React from 'react'
export default function CardUneversal_1({id, title, image}) {
    return (
      <div className=''>
        <div className='card-item !h-44 !w-28 lg:!h-477 lg:!w-72' key={id}>
                            <img className='card-item_img !h-36 !w-28 lg:!h-367 lg:!w-72' src={image} alt=""/>
                            <p className='card-item_h1 !text-xs lg:!text-xl lg:pt-5'>{title}</p>
                          </div>

      </div>
    )
}