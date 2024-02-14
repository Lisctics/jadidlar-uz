import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { DataService } from '../config/DataService';
import { endpoints } from '../config/endpoints';

export default function Slayder() {
      // bu qism api lar bilan ishlash uchun
  const [apiData, setApiData] = useState();
  const fetchData = async () => {
    const response = await DataService.get(endpoints.slayder);
    console.log(response)
    setApiData(response);
  };
  useEffect(() => {
    fetchData();
  }, []);
  //
    return(
        <>
          <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{delay: 3500, disableOnInteraction: false, }} navigation={true} modules={[Autoplay,Navigation]}>
          {apiData?.results.map((item, idx)=>
            <SwiperSlide className='Slayd !h-96 lg:!h-720' key={item.id}>
              <h1 className={`h1_` + (idx + 1)}>{item.text}</h1>
              <p className={`p_` + (idx + 1)}>{item.title}</p>
              <button className='btn_1'><a href={item.citations}>Batafsil</a></button>
              <img src={item.image} className='w-full object-cover' />
            </SwiperSlide>
          )}
      </Swiper>
        </>
    )
}