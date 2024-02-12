import React from 'react'
import { FaSearch } from "react-icons/fa";


export default function SearchUneversal({onSearch}) {
  return (
    <div className='flex mt-10 ml-2 '>
      <input type="search" id='inp_search' onChange={(e) => onSearch(e.target.value)} className='bg-slate-50 lg:!w-1200 lg:!h-14 !h-10 !w-56 p-4 focus:border-e-red-600' placeholder='Search..' />
      <button className='h-10 w-10 lg:!w-14 lg:!h-14 bg-red-700 pl-2'><FaSearch className='text-xl lg:text-3xl text-white' /></button>
    </div>
  )
}
