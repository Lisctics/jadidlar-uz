import React from 'react'
import {SyncLoader} from "react-spinners"
export default function SmallSpinner() {
  return (
    <div className='smallspinners !h-96 !w-96 m-10 !ml-400 !pl-96 !mt-36'>
        <SyncLoader color='#36d7b7' className='' size={15}/>
    </div>
  )
}
