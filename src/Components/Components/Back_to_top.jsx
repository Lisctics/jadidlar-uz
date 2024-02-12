import React from 'react'
import ScrollToTop from "react-scroll-to-top";
import { IoIosArrowUp } from "react-icons/io";
export default function Back_to_top() {
  return (
    <div>
        <ScrollToTop component={<IoIosArrowUp style={{height: "25px", width: "25px"}}/>} smooth top="500" style={{borderRadius: "20px", paddingLeft: "8px", backgroundColor: "#133654", color: "white"}}/>
    </div>
  )
}
