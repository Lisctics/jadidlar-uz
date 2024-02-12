import React from "react"

export default function Tab_menu(props) {


  return (
    <>
        <div className="kor_esht_oqi -z-10">
        <h1 className="tab_menu_h1">Ko'r-eshit-o'qi</h1>
          <div className="CONtenr">
            <ul className="TABlar">
              {props.children}
            </ul>
          </div>
    </div>
    </>
  )
}
