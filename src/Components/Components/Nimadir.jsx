import React from 'react'
import { Link } from 'react-router-dom'

export default function Nimadir({word}) {
  return (
    <div className='flex font-mono font-medium mt-10'>
    <Link to="/jadidlar-uz" className='mr-2 ml-10'>BOSH SAHIFA</Link>
    <Link className='text-red-700'>/{word}</Link>
  </div>
  )
}
