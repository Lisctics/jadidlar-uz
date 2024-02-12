import React, { useEffect, useState } from 'react'
import { DataService } from "../../config/DataService";
import { endpoints } from "../../config/endpoints";
import Uneversal_search_tab from '../Uneversal_search_tab';
import Nothing_box from '../Components/Nothing_box';

export default function Hikmatlar() {
    const [apiData, setApiData] = useState();
    const fetchData = async () => {
      const response = await DataService.get(endpoints.documents);
      console.log(response)
      setApiData(response);
    };
    useEffect(() => {
      fetchData();
    }, []);
  return (
    <div className='pt-20'>
         <Uneversal_search_tab word={"Hikmatlar"}/>
         <h1 className='tab_menu_h1'>Hikmatlar</h1>
         <Nothing_box/>
    </div>
  )
}
