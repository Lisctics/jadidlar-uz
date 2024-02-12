import React, { useEffect, useState } from 'react'
import { DataService } from '../../config/DataService';
import { endpoints } from '../../config/endpoints';
import Uneversal_search_tab from "../Uneversal_search_tab"
import video_rasm from "../Components/video_rasm.jpg"
import { useParams } from 'react-router';
import SmallSpinner from '../Components/SmallSpinner';


export default function Koruvlar() {
  const route = useParams()
  const [apiData, setApiData] = useState();
  const [load, setLoad] = useState(true);
    const fetchData = async () => {
      const response = await DataService.get(endpoints.videos);
    setLoad(!load)
      console.log(response)
      setApiData(response);
    };
    useEffect(() => {
      fetchData();
    }, []);
  return (
   <div>
     <div>
        <h1 className='tab_menu_h1 mb-10 !mt-5'>Koruvlar</h1>
        <div className='!grid !grid-cols-1 lg:!grid-cols-2 !gap-5 mb-20 md:!gap-x-20'>
          <div className=' transition-all cursor-pointer'>
            <img className='w-1000 ml-10 h-125 object-cover ' src={video_rasm} alt="" />
            <button type="button" className="bg-white h-12 w-12 rounded-full absolute -mt-64 pl-2 ml-96">
              <svg className="h-8 w-8 svg_vid_rasm svg-inline--fa fa-play fa-xl ml-0.5 text-red group-hover:text-white" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path className="" fill="currentColor" d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"></path>
              </svg>
            </button>
          </div>
          <div className='overflow-scroll h-125 scrol_bar lg:!w-96 md:!w-1000 !w-full !ml-10 lg:!ml-0 '>
          <div className={load == true ? 'block z-200 mt-32' : "hidden"}>
              <SmallSpinner/>
            </div>
              {apiData ?.results.map((item)=>
                  <div key={item.id} className='lg:!h-24 lg:!w-96 !w-1000  flex mb-3'>
                      <img src={item.file} alt="" className='lg:!h-24 lg:!w-44 md:!h-60 md:!w-80 !h-44 !w-64 ' />
                      <p className='p-3 lg:!w-52 lg:!h-24 md:!w-96 md:!h-60 !w-64 !h-44 !mt-0 bg-gray-300'>{item.title}</p>
                  </div>

                )}
          </div>  
        </div>
      </div>
   </div>
  )
}
