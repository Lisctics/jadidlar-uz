import React, { useEffect, useState } from 'react'
import { DataService } from '../config/DataService';
import { endpoints } from '../config/endpoints';
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";

export default function Footer() {
  const [telegram, setTelegram] = useState("")
  const [instagram, setInstagram] = useState("")
  const [apiData, setApiData] = useState();
  const fetchData = async () => {
      const response = await DataService.get(endpoints.footer);
      console.log("Result of footer", response)
      setApiData(response);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
        <div className='h-96 !w-full !mb-0 lg:!w-full footer' style={{backgroundColor: "#0E2B65"}}>
          <h1 className='footer_h1 !pl-10 lg:!pl-40'>JADIDLAR</h1>
          <div className='footer_contacts'>
            {apiData?.results.map((item) => 
              <div key={item.id}>
                <p className='!m-0 !mt-10 !ml-5 !text-xs md:!ml-20 md:!-mt-9 lg:!ml-40 lg:!-mt-9 lg:!text-xl' style={{borderBottom: "3px solid white", height:"35px", marginLeft: "150px", marginTop: "-35px"}}>{item.id == 3? item.qiymat : item.id == 4? item.qiymat : ""}</p>
                {item.id === 1 && <a href={item.qiymat} className='father_footer !mt-20 !ml-16 md:!ml-800 md:!-mt-8 lg:!mt-4 lg:!ml-1125'><FaInstagram className='instagram'/></a>}
                {item.id === 2 && <a href={item.qiymat} className='father_footer !mt-20 !ml-24 md:!ml-800 md:!-mt-8 ff2 lg:!ml-1040 lg:!mt-4'><FaTelegram  className='telegram'/></a>}
                </div>
            )}
           <p className='footer_p !m-0 !mt-24 !-ml-56 md:!ml-20 md:!-mt-9 lg:!ml-36 lg:!-mt-9'>Ijtimoiy tarmoq</p>
          </div>
          <center>
          <hr className='footer_hr'/>
          <p className='footer_p2 !text-xs !ml-8 lg:!text-xl'><MdKeyboardDoubleArrowLeft style={{marginTop: "1px", height: "20px", width: "20px"}} />WEB DEVELOPERS<MdKeyboardDoubleArrowRight style={{marginTop: "1px", height: "20px", width: "20px"}} /> barcha huquqlar qo'riqlanadi</p>
          </center>
          <p className='footer_p3 !ml-10 !mt-1 md:!ml-700 md:!-mt-6 !text-xs lg:!text-xl lg:!ml-1000 lg:!-mt-6'>©Copyright 2024 - Web Developers.</p>
        </div>
    </>
  )
}
