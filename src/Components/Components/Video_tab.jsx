import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination } from 'swiper/modules';
import { DataService } from '../../config/DataService';
import { endpoints } from '../../config/endpoints';

export default function Video_tab() {
  const [apiData, setApiData] = useState();
  const fetchData = async () => {
    const response = await DataService.get(endpoints.videos);
    console.log(response)
    setApiData(response);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>

      <div
        className="grid grid-cols-1 gap-0 md:grid-cols-4  lg:grid-cols-6 lg:!gap-500"
      >
        {/* <div className='videos_ gap-16'> */}
        {apiData ?.results.map((item)=>
          <div className='!w-96  md:!w-500 lg:!w-400 lg:!h-56 !h-80 !m-8 'key={item.id}>
            <img className='!w-full !h-full min-h-52' src={item.file} alt="" />
            <button className=' !-mt-32 !ml-40 rounded-full h-16 w-16 bg-white absolute hover:bg-pink-950 '>
                <svg className="h-h-100 w-8 !ml-4 svg-inline--fa fa-play fa-xl text-red group-hover:text-white" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path className="" fill="rgb(120, 0, 0)" d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"></path>
                </svg>
            </button>
          </div>
        )}
          {/* </div> */}
        
      </div>
      <hr className='w-full  bg-gray-500' />
      
        {/* <img className='h-96 m-7' src={Vid_rasm} alt="" />
<button type="button" class="w-16 h-16 rounded-full absolute -my-36 bg-white mx-80">

</button> */}
        

    </div>
  )
}
