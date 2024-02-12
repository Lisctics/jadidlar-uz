import React, { useEffect, useRef, useState } from 'react';
import CardUneversal from '../Components/CardUneversal.jsx'
import { DataService } from '../../config/DataService.js';
import {endpoints} from '../../config/endpoints.js'
import { useNavigate, useParams } from 'react-router';
import SmallSpinner from './SmallSpinner.jsx';

export default function Jadidlarpg() {
    const navigate = useNavigate()
    const route = useParams()
        const [load, setLoad] = useState(true);
    const [apiData, setApiData] = useState();
    const fetchData = async () => {
      const response = await DataService.get(endpoints.jadidlar);
            setLoad(!load)
      console.log(response)
      setApiData(response);
    };
    useEffect(() => {
      fetchData();
    }, []);
  return (
    <>
              <div style={{paddingTop: "100px"}} className={load == true ? 'block z-200' : "hidden"}>
              <SmallSpinner/>
            </div>
    <div className='!grid !grid-cols-2 lg:!grid-cols-3 !gap-x-80 md:!gap-x-4'>
        {apiData?.results.map((item)=>
        <CardUneversal  id={item.id} image={item.image} title={item.fullname} yil1={item.birthday} yil2={item.die_day}/>
         )}
        </div>
    </>
  )
}