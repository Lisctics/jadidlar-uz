import React, { useEffect, useState } from 'react'
import { DataService } from '../../config/DataService';
import { endpoints } from '../../config/endpoints';
import SmallSpinner from "../../Components/Components/SmallSpinner";

export default function yangiliklar() {
    const [apiData, setApiData] = useState();
    const fetchData = async () => {
      const response = await DataService.get(endpoints.yangiliklar);
      console.log(response)
      setApiData(response);
    };
    useEffect(() => {
      fetchData();
    }, []);
  return (
    <>
            <h1 className="tab_menu_h1 mt-0">Yangiliklar</h1>
    <div className="div_cont_3 pt-10 pl-12 grid ddd !grid-cols-3 !ml-2 !gap-x-10  lg:!gap-x-10 lg:!grid-cols-4 md:!gap-x-0 md:!grid-cols-4">
    {apiData ? (
                        apiData?.results?.length > 0 ? ( 
                            apiData?.results.map((item) => 
                            <div className='card-item !h-44 !w-28 lg:!h-477 lg:!w-72' key={item.id}>
                            <img className='card-item_img !h-36 !w-28 lg:!h-367 lg:!w-72' src={item.image} alt=""/>
                            <p className='card-item_h1 !text-xs lg:!text-xl lg:pt-5'>{item.jadid_fullname}</p>
                            <p className='card-item_h1'>{item.type}</p>
                          </div>
                            )
                        ) : (
                            <Nothing_box/> 
                        )
                    ): 
                     ( // agar load true bo'lsa spinner chiqarish
                        <div className="">
                          <SmallSpinner/>
                        </div>
                    ) 
                   }
    </div>
    </>
    )
  }
