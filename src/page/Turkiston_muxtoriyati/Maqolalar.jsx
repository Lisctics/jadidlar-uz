import React from 'react'
import { useEffect, useState } from 'react'
import { DataService } from '../../config/DataService';
import CardUneversal_1 from "../../Components/Components/CardUneversal_1"
import { endpoints } from '../../config/endpoints'
import SmallSpinner from "../../Components/Components/SmallSpinner";

export default function Hikmatlar() {

    const [apiData, setApiData] = useState();
    const fetchData = async () => {
      const response = await DataService.get(endpoints.maqolalar);
      console.log("back item for in fronts",response)
      setApiData(response);
    };
    useEffect(() => {
      fetchData();
    }, []);
    return (
      <>
      <h1 className="tab_menu_h1 mt-0 pt-20">Maqolalar</h1>
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
