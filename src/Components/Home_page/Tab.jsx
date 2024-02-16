import React from 'react'

export default function Tab({tablist, onChange, active}) {
    
  return (
    <div>
        <div className="tabs_cont jjj mt-7 ml-5">
        <div className="tabs_cont mt-7 ml-5">
    <ul className='uls overflow-scroll'>
      {tablist.map((tab) => (
        <li 
        key={tab.id}
        className={tab.id == active ? "active_tab" : "uls_li"}
        onClick={() => onChange(tab.id)}
        >
          {tab.title}
        </li>
        
      ))}
      </ul>  
      
</div>
</div>
    </div>
  )
}
