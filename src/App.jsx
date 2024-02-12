import React from 'react'
import Home from './Components/Home.jsx'
import {Route, Routes} from 'react-router-dom';
import Layout from './Components/Layout';
import Koruvlar from './Components/Navbar-Components/Koruvlar.jsx';
import Suratlar from './Components/Navbar-Components/Suratlar.jsx';
import Izlanishlar from './Components/Izlanishlar'
import Sherlar from './Components/Navbar-Components/Sherlar.jsx';
import notFound from './Components/notFound';
import Jadidlarpg from './Components/Components/Jadidlarpg.jsx';
import bittajadid from './page/Bittajadid.jsx';
import Foydalanuvchiga from './Components/Navbar-Components/Foydalanuvchiga.jsx';
import Bizhaqimizda from './Components/Navbar-Components/Bizhaqimizda.jsx';
import Navbar_Asr from './page/Til-imlo/Navbar_Asr.jsx';
import Navbar_Maq from './page/Til-imlo/Navbar_Maq.jsx';
import Nav_Hik from './page/Til-imlo/Navbar_Hik.jsx';
import til_imlo from './page/Til-imlo/til_imlo.jsx';
import turkiston_muxtoriyati from './page/Turkiston_muxtoriyati/turkiston_muxtoriyati.jsx';
import yangiliklar from './page/Voqealar/yangiliklar.jsx';
import Manbalar from './Components/Manbalar.jsx';
import seminarlar from './page/Voqealar/seminarlar.jsx';
import yiginlar from './page/Voqealar/yiginlar.jsx';
import Voqealar from './page/Voqealar/voqealar.jsx'
export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' Component={Layout}>
          <Route path='/' Component={Home}/>
          <Route path='/koruvlar' Component={Koruvlar}/>
          <Route path='/jadidlar' Component={Jadidlarpg}/>
          <Route path='/suratlar' Component={Suratlar}/>
          <Route path='/izlanishlar' Component={Izlanishlar} />
          <Route path='/izlanishlar/:tab' Component={Izlanishlar} />
          <Route path='/manbalar' Component={Manbalar}/>
          <Route path='/manbalar/:tab' Component={Manbalar}/>
          <Route path='/sherlar' Component={Sherlar}/>
          <Route path='/bittajadid/:id' Component={bittajadid}/>
          <Route path='*' Component={notFound} />
          <Route path='/Foydalanuvchiga' Component={Foydalanuvchiga}/>
          <Route path='/Bizhaqimizda' Component={Bizhaqimizda}/>
          <Route path='/Navbar_Asr' Component={Navbar_Asr}/>
          <Route path='/Navbar_Maq' Component={Navbar_Maq}/>
          <Route path='/Navbar_Hik' Component={Nav_Hik}/>
          <Route path='/til_imlo/:tab' Component={til_imlo} />
          <Route path='/turkiston_muxtoriyati/:tab' Component={turkiston_muxtoriyati}/>
          <Route path='/yangiliklar' Component={yangiliklar}/>
          <Route path='/seminarlar' Component={seminarlar}/>
          <Route path='/yiginlar' Component={yiginlar}/>
          <Route path='/voqealar/:tab' Component={Voqealar}/>
        </Route>
      </Routes>
    </>
  ) 
}
