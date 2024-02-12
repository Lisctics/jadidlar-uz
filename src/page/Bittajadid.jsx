import React, { useEffect, useRef, useState } from 'react';
// import Carduneversalbj from '../Components/Components/Carduneversalbj.jsx';
import CardUneversal from '../Components/Components/CardUneversal.jsx';
import { DataService } from '../config/DataService.js';
import {endpoints} from '../config/endpoints.js'
import Tab from '../Components/Home_page/Tab.jsx';
import { useParams } from 'react-router';
import Carduneversaldeteil from '../Components/Components/Carduneversaldeteil.jsx';
export default function bittajadid() {

    const route = useParams()
    const [apiData, setApiData] = useState();
    const fetchData = async () => {
      const response = await DataService.get(endpoints.jadidlarById(route?.id));
      console.log("bu id orqali olinvoti",response);
      setApiData(response);
    }; 
    useEffect(() => {
      fetchData();
    }, []);



    // const [apiDataa, setApiDataa] = useState();
    // const fetchDataa = async () => {
    //   const response = await DataService.get(endpoints.maqolalar);
    //   console.log("back item for in fronts",response)
    //   setApiDataa(response);
    // };
    // useEffect(() => {
    //   fetchData();
    // }, []);

    const [activeTab, setActiveTab] = useState(1);
  const tablist = [
    {
      id: 1,
      title: "Jadid haqida",
    },
    {
      id: 2, 
      title: "asarlar",
    },
    {
      id: 3,
      title: "maqolalar",
    },
    {
      id: 4,
      title: "sherlar"
    },
    {
      id: 5,
      title: "Esdaliklar"
    },
    {
      id: 6,
      title: "Xikmatli so'zlar"
    }
  ];
  const onChangeTab = (id) => {
    setActiveTab(id);
  };
  const activePanel = () => {
    switch (activeTab) {
      case 1:
        return(
          <div>
           <Carduneversaldeteil
           image={apiData?.image}
           title={apiData?.fullname}
           yil1={apiData?.birthday}
           yil2={apiData?.die_day}
            />
          </div>
        );
        case 2:
        return(
          <div>
          <div className='max-w-full  grid grid-cols-5'>
              {apiData?.asarlar?.map((item)=>
              <CardUneversal name={item.jadid_fullname}  image={item.image} title={item.title}/>               
            )}
          </div>
          </div>
        );
        case 3:
        return(
          <div>
              <div className='max-w-full  grid grid-cols-5'>
              {apiData?.maqolalar?.map((item)=>
              <CardUneversal name={item.jadid_fullname} image={item.image} title={item.title} />               
              )}
         </div>
          </div>
        );
        case 4:
        return(
          <div>
            <div className='max-w-full  grid grid-cols-5'>
            {apiData?.sherlar?.map((item)=>
              <CardUneversal name={item.jadid_fullname} image={item.image} title={item.title}/>               
            )}
          </div>
          </div>
        );
        case 5:
        return(
          <div>
            <div className='max-w-full  grid grid-cols-5'>
            {apiData?.hotiralar?.map((item)=>
              <CardUneversal name={item.jadid_fullname} image={item.image} title={item.title}/>               
            )}
          </div>
          </div>
        ); 
      case 6:
        return(
          <div>
            <div className='max-w-full  grid grid-cols-5'>
            {apiData?.hikmatli_sozlar?.map((item)=>
              <CardUneversal name={item.jadid_fullname} title={item.title} />               
            )}
            </div>
          </div>
        );
    }
  }
  return (
    <div>    
    {/* <div className='max-w-full  grid grid-cols-5'>
    {apiData?.results.map((item)=>
        <Carduneversalbj id={item.id} image={item.image} title={item.fullname} yil1={item.birthday} yil2={item.die_day}/>
        )}
    </div> */}
    <div  className="no-underline pt-20">
      <Tab tablist={tablist} onChange={onChangeTab} active={activeTab} />
      <li className="li no-underline list-none">{activePanel()}</li>
    </div>
  
   </div>
)
}