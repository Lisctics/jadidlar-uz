
import React, { useEffect, useState } from "react";
import { DataService } from '../../config/DataService';
import { endpoints } from '../../config/endpoints';
import Uneversal_search_tab from '../../Components/Uneversal_search_tab';
import SmallSpinner from "../../Components/Components/SmallSpinner";



function Navbar_Maq() {
    const [apiData, setApiData] = useState();
    const fetchData = async () => {
      const response = await DataService.get(endpoints.maqolalar);
      
      console.log(response)
      setApiData(response);
    };
    useEffect(() => {
      fetchData();
    }, []);
    return(
        <>
        <div className="pt-0">
            <h1 className="tab_menu_h1 mb-10 pl-8">Maqolalar</h1>
           <div className="div_cont">
                                {apiData ? (
                        apiData?.results?.length > 0 ? ( 
                          apiData?.results.map((item) => (
                            <div className='card-item' key={item.id}>
                            <img className='card-item_img' src={item.image} alt=""/>
                            <p className='card-item_h1'>{item.jadid_fullname}</p>
                            <p className='card-item_h1'>{item.type}</p>
                          </div>
                            ))
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
        </>
    )
}

export default Navbar_Maq