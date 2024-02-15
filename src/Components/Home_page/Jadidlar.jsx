import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import CardUneversal from '../Components/CardUneversal.jsx'
import { DataService } from '../../config/DataService.js';
import {endpoints} from '../../config/endpoints.js'

export default function App() {
  const [apiData, setApiData] = useState();
  const fetchData = async () => {
    const response = await DataService.get(endpoints.jadidlar);
    console.log(response)
    setApiData(response);
  };
  useEffect(() => {
    fetchData();
  }, []);
  //
  return (
    <>
    <h1 className='tab_menu_h1 !mt-20 !ml-10'>Jadidlar</h1>

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
        className="mySwiperr max-w-full 
       shadow-md"  
      >
        {apiData?.results.map((item)=>
          <SwiperSlide className='swiper-slidee' key={item.id}>
           <CardUneversal id={item.id} image={item.image} title={item.fullname} yil1={item.birthday} yil2={item.die_day}/>
          </SwiperSlide>  
        )}
        {/* <SwiperSlide className='swiper-slidee'><img src={Fitrat} alt="" /></SwiperSlide>
        <SwiperSlide className='swiper-slidee'><img src={Fitrat} alt="" /></SwiperSlide>
        <SwiperSlide className='swiper-slidee'><img src={Fitrat} alt="" /></SwiperSlide>
        <SwiperSlide className='swiper-slidee'><img src={Fitrat} alt="" /></SwiperSlide>
        <SwiperSlide className='swiper-slidee'><img src={Fitrat} alt="" /></SwiperSlide>
        <SwiperSlide className='swiper-slidee'><img src={45 y} alt="" /></SwiperSlide>
        <SwiperSlide className='swiper-slidee'><img src={Fitrat} alt="" /></SwiperSlide>
        <SwiperSlide className='swiper-slidee'><img src={Fitrat} alt="" /></SwiperSlide>
        <SwiperSlide className='swiper-slidee'><img src={Fitrat} alt="" /></SwiperSlide>
        <SwiperSlide className='swiper-slidee'><img src={Fitrat} alt="" /></SwiperSlide> */}
      </Swiper>
    </>
  );
}