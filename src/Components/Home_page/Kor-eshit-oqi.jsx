import { useState } from "react"
import Tab2 from "../Components/Tab_menu"
import Rasm_tab from "../Components/Rasm_tab";
import Video_tab from "../Components/Video_tab";

export default function Kor_esht_oqi() {
  const [activeTab, setActiveTab] = useState(1);
  const tablist = [
    {
      id: 1,
      title: "Rasmlar",
    },
    {
      id: 2,
      title: "Video",
    },
  ];
  const onChangeTab = (id) => {
    setActiveTab(id);
  };
  const activePanel = () => {
    switch (activeTab) {
      case 1:
        return <Rasm_tab/>
        case 2:
          return <Video_tab/>
    }
  };
  return (
    <div className="z-10">
        <Tab2>
        {tablist.map((tab) =>(
              <li key={tab.id}
              className={tab.id == activeTab ? "MAin" : ""}
              onClick={()=> onChangeTab(tab.id)}>
                {tab.title}
              </li>
            ))}
            
        </Tab2>
        {activePanel()}
        <hr />
    </div>
  )
}

