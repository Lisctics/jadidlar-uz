  import { useEffect, useState } from 'react'
  import Asarlar from './Navbar-Components/Asarlar.jsx'
  import Dissertatsiyalar from './Navbar-Components/Dissertatsiyalar.jsx'
  import Maqolalar from './Components/Maqolalar.jsx'
  import Esdaliklar from './Navbar-Components/Esdaliklar.jsx'
  import Uneversal_Tab from '../page/Uneversal_Tab.jsx'
  import SearchUneversal from './Components/SearchUneversal.jsx'
  import { useNavigate, useParams } from 'react-router-dom' 
import Nimadir from './Components/Nimadir.jsx'

  export default function Izlanishlar(){

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
        id: "disertatsiyalar",
        title: 'DISSERTATSIYALAR',
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
        case "disertatsiyalar":
          return <Dissertatsiyalar />
        case "esdaliklar":
          return <Esdaliklar />
      }
    }
    const [activeTab, setActiveTab] = useState(params?.tab)
    const [search, setSearch] = useState("")
    const onChangeTab = (tab) => {
        setActiveTab(tab)
        navigate(`/izlanishlar/${tab}`)
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

