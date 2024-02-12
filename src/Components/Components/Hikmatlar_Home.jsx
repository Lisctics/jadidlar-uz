import React from 'react'
import { useEffect, useState } from 'react'
import { DataService } from '../../config/DataService';
import { endpoints } from '../../config/endpoints'
import Hikmatlars from './Hikmatlars_unever';
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
            <div className='hikmatlar_cont ' >
    {apiData?.results.map((e)=>
    <Hikmatlars text={e.text}/>                   
    )}
          </div> 
    )
}