import React, { useEffect, useState } from "react";
import { DataService } from '../../config/DataService';
import { endpoints } from '../../config/endpoints';
import SmallSpinner from '../Components/SmallSpinner';

function Esdaliklar() {
    const [apiData, setApiData] = useState();
  const [load, setLoad] = useState(true);
  const fetchData = async () => {
      const response = await DataService.get(endpoints.hotiralar);
    setLoad(!load)
    console.log(response)
      setApiData(response);
    };
    useEffect(() => {
      fetchData();
    }, []);
    document.title = "Izlanishlar | Esdaliklar"
    return(
        <>
            <h1 className="tab_menu_h1">Esdaliklar</h1>
            <div className="div_cont">
            {apiData ? (
                        apiData?.results?.length > 0 ? ( 
                          apiData?.results.map((item) => (
                            <div className='card-item' key={item.id}>
                            <img className='card-item_img' src={item.image} alt=""/>
                            <p className='card-item_h1'>{item.jadid_fullname}</p>
                            <p className='card-item_h1_2'>{item.type}</p>
                          </div>
                        )
                            )
                        ) : (
                            <Nothing_box/> 
                        )
                    ): 
                     (
                        <div className="">
                          <SmallSpinner/>
                        </div>
                    ) 
                   }
            </div>
        </>
    )
}

export default Esdaliklar;