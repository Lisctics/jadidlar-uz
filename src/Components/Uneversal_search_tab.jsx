import React from 'react'
import SearchUneversal from "./Components/SearchUneversal"
import Nimadir from './Components/Nimadir'
export default function Uneversal_search_tab({soz}) {
  return (
    <div>
            <Nimadir word={soz}/>
             {/* <SearchUneversal/> */}
    </div>
  )
}
