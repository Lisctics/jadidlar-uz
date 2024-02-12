import React, { useEffect, useState } from 'react'
import { DataService } from "../../config/DataService";
import { endpoints } from "../../config/endpoints";
import Uneversal_search_tab from '../Uneversal_search_tab';
// import CardUneversal_1 from '../Components/CardUneversal_1';
import Nothing_box from '../Components/Nothing_box';
import SmallSpinner from '../Components/SmallSpinner';
import CardUneversal_1 from '../Components/CardUneversal_1';


export default function Matbuot() {
    const [apiData, setApiData] = useState();
  const [load, setLoad] = useState(true);
  const fetchData = async () => {
      const response = await DataService.get(endpoints.matbuot);
    setLoad(!load)
    console.log(response)
      setApiData(response);
    };
    useEffect(() => {
      fetchData();
    }, []);
  return (
    <div className='pt-0'>
         <h1 className='tab_menu_h1'>Matbuot</h1>
            <div className='grid grid-cols-4 gap-16 m-10' >
                        {apiData ? (
                        apiData?.results?.length > 0 ? ( 
                          apiData ?.results.map((item)=>
                          <CardUneversal_1 id={item.id} image={item.image} title={item.title}/>
                            )
                        ) : (
                            <Nothing_box/> 
                        )
                    ): 
                     (
                        <div className="">
                          <SmallSpinner/>
                        </div>
                    ) 
                   }
         </div>
    </div>
  )
}