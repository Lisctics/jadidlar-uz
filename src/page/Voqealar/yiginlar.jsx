import React, { useEffect, useState } from 'react'
import { DataService } from '../../config/DataService';
import { endpoints } from '../../config/endpoints';
import SmallSpinner from "../../Components/Components/SmallSpinner";

export default function yangiliklar() {
    const [apiData, setApiData] = useState();
    const fetchData = async () => {
      const response = await DataService.get(endpoints.kanfereysiyalar);
      console.log(response)
      setApiData(response);
    };
    useEffect(() => {
      fetchData();
    }, []);
  return (
    <>
            <h1 className="tab_menu_h1 mt-0">Yig'inlar</h1>
    <div className="div_cont_3">
    {apiData ? (
                        apiData?.results?.length > 0 ? ( 
                            apiData?.results.map((item) => 
                            <div className='card-item_3' id={item.id == 2 || item.id == 4 || item.id == 6 ? "right" : "left"} key={item.id}>
                            <img className='card-item_img_3' src={item.image} alt=""/>
                            <p className='card-item_title_3'>{item.title}</p>
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
