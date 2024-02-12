import React, { useEffect, useState } from 'react'
import { DataService } from "../../config/DataService";
import { endpoints } from "../../config/endpoints";
import Uneversal_search_tab from '../../Components/Uneversal_search_tab';
import Hikmat from '../../Components/Components/Hikmatlars_unever';
import SmallSpinner from "../../Components/Components/SmallSpinner";

export default function Nav_Hik() {
    const [apiData, setApiData] = useState()
    const fetchData = async () => {
      const response = await DataService.get(endpoints.hikmatli_sozlar);
      console.log(response)
      setApiData(response);
    };
    useEffect(() => {
      fetchData();
    }, []);
  return (
    <div className='pt-0'>
         <h1 className='tab_menu_h1'>Hikmatlar</h1>

         {/* {apiData?.results.map((e)=>
         <Hikmat text={e.text}/>
         )} */}
                  {apiData ? (
                        apiData?.results?.length > 0 ? ( 
                          apiData?.results.map((e)=>
                              <Hikmat text={e.text}/> 
                            )
                        ) : (
                            <Nothing_box/> 
                        )
                    ): 
                     ( // agar load true bo'lsa spinner chiqarish
                        <div className="">
                          <SmallSpinner/>
                        </div>
                    ) 
                   }
    </div>
  )
}