import React from 'react'
import { useNavigate, useParams } from 'react-router-dom' 
import { useEffect, useState } from 'react'
import Uneversal_search_tab from '../../Components/Uneversal_search_tab'
import Uneversal_Tab from '../Uneversal_Tab'
import Asarlar from "./Navbar_Asr"
import Hikmatlar from './Navbar_Hik'
import Maqolalar from "./Navbar_Maq"
import SearchUneversal from '../../Components/Components/SearchUneversal'
import Nimadir from '../../Components/Components/Nimadir'

export default function til_imlo() {

    const navigate = useNavigate()
    const params = useParams()
    const [activeTab, setActiveTab] = useState(params?.tab)
    const [search, setSearch] = useState("")

    const onSearch = (val) => {
        setSearch(val)
    }

    useEffect(()=>{
        setActiveTab(params?.tab)
    },[params?.tab])

    const activePanel = () => {
      switch (activeTab) {
        case "asarlar":
            return <Asarlar/>
        case "maqolalar": 
            return <Maqolalar/>
        case "hikmatlar":
            return <Hikmatlar />
      }
    }

    const onChangeTab = (tab) => {
        setActiveTab(tab)
        navigate(`/til_imlo/${tab}`)
    }

    const tablist = [
        {
            id: "asarlar",
            title: "ASARLAR"
        },
        {
            id: "maqolalar",
            title: "MAQOLALAR"
        },
        {
            id: "hikmatlar",
            title: "HIKMATLAR"
        }
    ]
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
