import React, { useEffect, useState } from 'react'
import { DataService } from "../../config/DataService";
import { endpoints } from "../../config/endpoints";
import CardUneversal_1 from '../Components/CardUneversal_1';
import SmallSpinner from '../Components/SmallSpinner';

export default function Arxiv_hujjatlar() {
    const [apiData, setApiData] = useState();
  const [load, setLoad] = useState(true);
    const fetchData = async () => {
      const response = await DataService.get(endpoints.documents);
    setLoad(!load)
      console.log(response)
      setApiData(response);
    };
    useEffect(() => {
      fetchData();
    }, []);
  return (
    <div className='pt-0'>
         <h1 className='tab_menu_h1'>Arxiv hujjatlar</h1>
         <div className=' gap-16 m-10 !grid !grid-cols-3 !ml-2 !gap-x-10  lg:!gap-x-10 lg:!grid-cols-4 md:!gap-x-0 md:!grid-cols-4' >
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