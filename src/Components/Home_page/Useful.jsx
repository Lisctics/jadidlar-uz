import React, { Component, useEffect, useState } from 'react'
// import First from "../../Images/ipp5qma0WikQNv9sArvEF6ntKGHNlGzfBbGjMNBB.png"
// import Second from "../../Images/x38HKWDiKiepvEt7yugHfOKU8MfPimKcAgLvWgPX.png"
// import Third from "../../Images/fiBjx6TD8rtzCwxTM709skXEfFZkHHQ9ueKgnVRO.png"
// import Fourty from "../../Images/g2vKvUOfpfu97IeTygOvaAjfITWcCLpfmVHGyJXa.png"
// import Fifty from "../../Images/PmCFPri4Mq1iS98DxSPX4N0ibS0BtKs6HpqwDH0o.png"
// import Sixty from "../../Images/5UjVFlzW7BHTQEYW4rpPgntE0gqNr6Bh3QjOtJNd.png"
import { endpoints } from '../../config/endpoints'
import { DataService } from '../../config/DataService'


export default function Useful() {
  const [apiData, setApiData] = useState();
  const fetchData = async () => {
    const response = await DataService.get(endpoints.foydali_havolalar);
    setApiData(response);
  };
  useEffect(() => {
    fetchData();
  }, []);
  //
  return (
    <div className='useful grid !grid-cols-1 lg:grid-cols-3 md:!grid-cols-2'>
      {apiData ?.results.map((item)=>
        <div key={item.id} className='Father mr-20 !w-96 lg:!w-450' id={item.id == 2? "div_left" : item.id == 4? "div_left" : ""}>
          <img src={item.logo_image} className='Logo' alt="" />
          <p className='title !text-xs !w-48'>{item.title}</p>
          <a href={item.link} className='Link'>VEB SAYTGA O'TISH</a>
        </div>
      )}
    </div>
  )
}
