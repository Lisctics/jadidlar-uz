import React, { useState } from 'react'

export default function Uneversal_Tab({elements, onChangeTab, activeTab}) {

  return (
    <div className='did !pt-0 pl-5'>
        <ul className='uul overflow-scroll w-56 lg:w-full'>
            {elements.map((tab) => (
            <li id='li' key={tab.id} className={tab.id == activeTab ? "Active text-xs" : "Pustoy text-xs"} onClick={() => onChangeTab(tab.id)}>{tab.title}</li>
            ))}
        </ul>
      <hr className='hr1'/>
    </div>
  )
}
