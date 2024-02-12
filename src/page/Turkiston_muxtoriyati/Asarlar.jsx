import React, { useEffect, useState } from "react";
import { DataService } from '../../config/DataService';
import { endpoints } from '../../config/endpoints';
import SmallSpinner from "../../Components/Components/SmallSpinner";


function Asarlar() {
    const [apiData, setApiData] = useState();

    const fetchData = async () => {
      const response = await DataService.get(endpoints.asarlar);
      console.log(response)
      setApiData(response);
    };
    useEffect(() => {
      fetchData();
    }, []);
    document.title = "Izlanishlar | Asarlar"

    return(
        <>
            <h1 className="tab_menu_h1 mt-0 pt-20">Asarlar</h1>
           <div className="div_cont">
           {apiData ? (
                        apiData?.results?.length > 0 ? ( 
                            apiData?.results.map((item) => 
                            <div className='card-item' key={item.id}>
                            <img className='card-item_img' src={item.image} alt=""/>
                            <p className='card-item_h1'>{item.jadid_fullname}</p>
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

export default Asarlar