import React from 'react'
export default function CardUneversal_1({id, title, image}) {
    return (
        <div className='card-item' key={id}>
          <img className='card-item_img' src={image} alt=""/>
          <p className='card-item_h1'>{title}</p>
        </div>
    )
}