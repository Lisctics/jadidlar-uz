import React from 'react'
import { useEffect, useState } from 'react'
import { DataService } from '../../config/DataService';
import { endpoints } from '../../config/endpoints'
import Hikmatlars from './Hikmatlars_unever';
import SmallSpinner from '../Components/SmallSpinner';
export default function Hikmat() {
    const [apiData, setApiData] = useState();
    const fetchData = async () => {
      const response = await DataService.get(endpoints.hikmatli_sozlar);
      console.log(response)
      setApiData(response);
    };
    useEffect(() => {
      fetchData();
    }, []);
    return (  
      <>
        <h1 className="tab_menu_h1 mt-0 !pt-10 !ml-10">Hikmatlar</h1>
            <div className='hikmatlar_cont ' >
              {apiData ? (
                          apiData?.results?.length > 0 ? ( 
                            apiData?.results.map((e)=>
                            <Hikmatlars text={e.text}/>
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
            <hr className='w-full  bg-gray-500' />
      </> 
    )
}