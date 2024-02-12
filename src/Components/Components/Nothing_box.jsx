import React from 'react'
import { BiBookAlt } from "react-icons/bi";
import emtp from "./empty-folder.png"

export default function Nothing_box() {
  return (
    <div>
       <center>
            <img src={emtp} className='h-36 w-36 text-gray-300'/>
            <h1 className='text-blue-950 text-xl '>MA'LUMOT TOPILMADI</h1>
         </center>
    </div>
  )
}
