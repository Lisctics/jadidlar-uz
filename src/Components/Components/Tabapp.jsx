import { useState } from 'react'
import Tab from "../Home_page/Tab"
import Asarlar from './Asarlar';
import Maqolalar from './Maqolalar';
import Hikmatlar from './Hikmatlar_Home'
// import Hikmatlar from './Hikmatlar';

function Tabapp() {
  const [activeTab, setActiveTab] = useState(1)
  const tablist = [
    {
      id:1,
      title: "Asarlar",
    },
    {
      id:2,
      title: "Maqolalar",
    },
    {
      id:3,
      title: "Hikmatlar",
    },
  ];
  const onChangetab = (id) => {
    setActiveTab(id)
    console.log(id)
  };
  const activePanel = () => {
    switch (activeTab) {
      case 1:
        return (
          <Asarlar/>
        );
        case 2:
        return (
          <Maqolalar/>
        );
        case 3:
        return (
          <Hikmatlar/>
        );
    }
  };
  return (
    <>
     <div className="talistt"><Tab tablist={tablist} onChange={onChangetab} active={activeTab} />
    {activePanel()}
    </div>
    </>
  )
}

export default Tabapp
