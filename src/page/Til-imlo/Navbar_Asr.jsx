import React, { useEffect, useState } from "react";
import { DataService } from '../../config/DataService';
import { endpoints } from '../../config/endpoints';
import SmallSpinner from "../../Components/Components/SmallSpinner";
import Nothing_box from "../../Components/Components/Nothing_box";

function Navbar_Asr() {
    const [apiData, setApiData] = useState();
    const fetchData = async () => {
      const response = await DataService.get(endpoints.asarlar);
      console.log("SFS",response)
      setApiData(response);
    };
    useEffect(() => {
      fetchData();
    }, []);
    return(
        <>
        <div className="pt-0">
                <h1 className="tab_menu_h1 ml-5 !text-2xl mt-10 mb-10 pl-8 lg:text-3xl">Asarlar</h1>
               

                <div className="div_cont">
                    {apiData ? (
                        apiData?.results?.length > 0 ? ( 
                            apiData?.results.map((item) => 
                                <div className='card-item' key={item.id}>
                                    <img className='card-item_img' src={item.image} alt=""/>
                                    <p className='card-item_h1'>{item.jadid_fullname}</p>
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
            </div>
      {/* <div className="pt-0">
                  <h1 className="tab_menu_h1 mt-10 mb-10 pl-8">Asarlar</h1>
            <div className={load == true ? 'block z-200' : "hidden"}>
              <SmallSpinner/>
            </div>

           <div className="div_cont">
           {apiData?.results.map((item) => (
                <div className='card-item' key={item.id}>
                <img className='card-item_img' src={item.image} alt=""/>
                <p className='card-item_h1'>{item.jadid_fullname}</p>
                <p className='card-item_h1'>{item.type}</p>
              </div>
            ))}
           </div>
           </div> */}
        </>
    )
}

export default Navbar_Asr