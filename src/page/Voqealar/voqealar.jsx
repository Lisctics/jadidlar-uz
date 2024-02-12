import React from 'react'
import { useNavigate, useParams } from 'react-router-dom' 
import { useEffect, useState } from 'react'
import Uneversal_search_tab from '../../Components/Uneversal_search_tab'
import Uneversal_Tab from '../Uneversal_Tab'
import Seminarlar from "./seminarlar"
import Yangiliklar from "./yangiliklar"
import Yiginlar from "./yiginlar"
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
          id: "yangiliklar",
          title: 'YANGILIKLAR',
        },
        {
          id: "yiginlar",
          title: 'YIG\'INLAR',
        },
        {
          id: "seminarlar",
          title: 'SEMINARLAR',
        }
      ]
  
      const activePanel = () => {
        switch (activeTab) {
          case "seminarlar":
            return <Seminarlar/>
          case "yangiliklar": 
            return <Yangiliklar/>
          case "yiginlar":
            return <Yiginlar/>
        }
      }
      const [activeTab, setActiveTab] = useState(params?.tab)
      const [search, setSearch] = useState("")
      const onChangeTab = (tab) => {
          setActiveTab(tab)
          navigate(`/voqealar/${tab}`)
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
