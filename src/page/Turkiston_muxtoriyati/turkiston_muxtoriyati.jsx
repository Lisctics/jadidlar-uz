import React from 'react'
import { useNavigate, useParams } from 'react-router-dom' 
import { useEffect, useState } from 'react'
import Uneversal_search_tab from '../../Components/Uneversal_search_tab'
import Uneversal_Tab from '../Uneversal_Tab'
import Asarlar from "./Asarlar"
import Maqolalar from "./Maqolalar"
import Sherlar from "./Sherlar"
import Esdaliklar from './Esdaliklar'
import SearchUneversal from '../../Components/Components/SearchUneversal'
import Nimadir from '../../Components/Components/Nimadir'

export default function turkiston_muxtoriyati() {
    const navigate = useNavigate()
    const params = useParams()
  
    useEffect(()=>{
      setActiveTab(params?.tab)
    },[params?.tab])
  
      const tablist = [
        {
          id: "asarlar",
          title: 'ASARLAR',
        },
        {
          id: "maqolalar",
          title: 'MAQOLALAR',
        },
        {
          id: "sherlar",
          title: 'SHE\'RLAR',
        },
        {
          id: "esdaliklar",
          title: 'ESDALIKLAR',
        }
      ]
  
      const activePanel = () => {
        switch (activeTab) {
          case "asarlar":
            return <Asarlar/>
          case "maqolalar": 
            return <Maqolalar/>
          case "sherlar":
            return <Sherlar />
          case "esdaliklar":
            return <Esdaliklar />
        }
      }
      const [activeTab, setActiveTab] = useState(params?.tab)
      const [search, setSearch] = useState("")
      const onChangeTab = (tab) => {
          setActiveTab(tab)
          navigate(`/turkiston_muxtoriyati/${tab}`)
      }
        const onSearch = (val) => {
          setSearch(val)
        }
  return (
    <div>
    <div className='mt-0 pt-20'>
      <Nimadir word={activeTab}/>
      <SearchUneversal  onSearch={onSearch} />
    </div>
    <Uneversal_Tab elements={tablist} activeTab={activeTab} onChangeTab={onChangeTab} />
    {activePanel()}
  </div>
  )
}
