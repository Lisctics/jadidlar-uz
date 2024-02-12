import { useEffect, useState } from 'react'
import Uneversal_Tab from '../page/Uneversal_Tab.jsx'
import SearchUneversal from './Components/SearchUneversal.jsx'
import Arxiv_hujjatlar from './Navbar-Components/Arxiv_hujjatlar.jsx';
import Matbuot from './Navbar-Components/Matbuot.jsx';
import Suratlar from './Navbar-Components/Suratlar.jsx';
import Koruvlar from './Navbar-Components/Koruvlar.jsx';
import Eshituvlar from './Navbar-Components/Eshituvlar.jsx';
import { useNavigate, useParams } from 'react-router-dom' 
import Nimadir from './Components/Nimadir.jsx';

export default function Manbalar(){

const navigate = useNavigate()
const params = useParams()

useEffect(()=>{
  setActiveTab(params?.tab)
},[params?.tab])

  const tablist = [
    {
      id: "arxiv_hujjatlar",
      title: 'Arxiv_Hujjatlar',
    },
    {
      id: "matbuot",
      title: 'MATBUOT',
    },
    {
      id: "suratlar",
      title: 'SURATLAR',
    },
    {
      id: "ko'ruvlar",
      title: "KO'RUVLAR",
    },
    {
        id: "eshituvlar",
        title: 'ESHITUVLAR',
    }
  ]

  const activePanel = () => {
    switch (activeTab) {
      case "arxiv_hujjatlar":
        return <Arxiv_hujjatlar/>
      case "matbuot": 
        return <Matbuot/>
      case "suratlar":
        return <Suratlar />
      case "ko'ruvlar":
        return <Koruvlar />
      case "eshituvlar":
        return <Eshituvlar/>
    }
  }
  const [activeTab, setActiveTab] = useState(params?.tab)
  const [search, setSearch] = useState("")
  const onChangeTab = (tab) => {
      setActiveTab(tab)
      navigate(`/manbalar/${tab}`)
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

