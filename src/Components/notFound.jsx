import React, { useEffect } from "react";
import { FaHome } from "react-icons/fa";
import Board from "../Images/board.png"
import main from "../Images/404main.jpg"
import { Link } from "react-router-dom";

function notFound() {
    useEffect(() => {
        document.title = "Not Found";
    })
    return(
        <div class="container">
            <div class="fof-images">
                <img src={main} alt="" class="fof-image1"/>
                <div class="swing">
                <img src={Board} alt="" class="fof-image2"/>
            </div>
        </div>
        <h1 className="pnf_h1">SAHIFA TOPILMADI!</h1>
        <p className="pnf_p"> Siz qidirayotgan sahifa oʻchirilgan<br/>
          yoki vaqtincha mavjud emas</p>
      <Link to="/jadidlar-uz"><button class="home-btn"><FaHome className="Home"/>UYGA QAYTISH</button></Link>
    </div>
    )
}

export default notFound;