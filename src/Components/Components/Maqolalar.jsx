import React from 'react'
import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { DataService } from '../../config/DataService';
import CardUneversal_1 from "../Components/CardUneversal_1"
import { endpoints } from '../../config/endpoints'
import SmallSpinner from '../Components/SmallSpinner';

export default function Hikmatlar() {
    const [apiData, setApiData] = useState();
  const [load, setLoad] = useState(true);
  const fetchData = async () => {
      const response = await DataService.get(endpoints.maqolalar);
    setLoad(!load)
    console.log("back item for in fronts",response)
      setApiData(response);
    };
    useEffect(() => {
      fetchData();
    }, []);
    return (
      <>

            <div className={load == true ? 'block z-200' : "hidden"}>
              <SmallSpinner/>
            </div>
          <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          '@0.75': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '@1.00': {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          '@1.50': {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }} 
        modules={[Pagination]}
        className=" max-w-full 
       shadow-md card_contenier gap-20 mt-8 !ml-0 !-left-5"  
      >
    {apiData?.results.map((e)=>
    <SwiperSlide className='swiper-slidee' key={e.id}>
       <CardUneversal_1  key={e.id} title={e.title} image={e.image}/>
    </SwiperSlide>
    )}
    </Swiper>
      </>
    )
}
