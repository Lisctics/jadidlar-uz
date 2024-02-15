import React from "react"

export default function Tab_menu(props) {


  return (
    <>
        <div className="kor_esht_oqi -z-10">
        <h1 className="tab_menu_h1 !mt-20 !ml-10">Ko'r-eshit-o'qi</h1>
          <div className="CONtenr">
            <ul className="TABlar !gap-20">
              {props.children}
            </ul>
          </div>
    </div>
    </>
  )
}
