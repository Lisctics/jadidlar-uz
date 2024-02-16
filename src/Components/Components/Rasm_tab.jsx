import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination } from 'swiper/modules';
import CardUneversal from "./CardUneversal_1";
import { DataService } from "../../config/DataService";
import { endpoints } from "../../config/endpoints";

export default function Rasim_tab() {
  const [apiData, setApiData] = useState();
  const fetchData = async () => {
    const response = await DataService.get(endpoints.photos);
    console.log(response)
    setApiData(response);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
      // <Swiper 
      //   slidesPerView={1}
      //   spaceBetween={10}
      //   pagination={{
      //     clickable: true,
      //   }}
      //   breakpoints={{
      //     '@0.00': {
      //       slidesPerView: 1,
      //       spaceBetween: 10,
      //     },
      //     '@0.75': {
      //       slidesPerView: 2,
      //       spaceBetween: 20,
      //     },
      //     '@1.00': {
      //       slidesPerView: 3,
      //       spaceBetween: 40,
      //     },
      //     '@1.50': {
      //       slidesPerView: 4,
      //       spaceBetween: 50,
      //     },
      //   }}
        // modules={[Pagination]}
        // className="div_cont"
      // >
      <div className='div_cont'>
        {apiData ?.results.map((item)=>
              <div className='card-item' key={item.id}>
                <img className='card-item_img' src={item.image} alt=""/>
                <p className='card-item_h1'>{item.title}</p>
              </div>
        )}
      </div>
        // </Swiper>
  );
}
