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
          <Route path='/jadidlar-uz' Component={Home}/>
          <Route path='jadidlar-uz/koruvlar' Component={Koruvlar}/>
          <Route path='jadidlar-uz/jadidlar' Component={Jadidlarpg}/>
          <Route path='jadidlar-uz/suratlar' Component={Suratlar}/>
          <Route path='jadidlar-uz/izlanishlar' Component={Izlanishlar} />
          <Route path='jadidlar-uz/izlanishlar/:tab' Component={Izlanishlar} />
          <Route path='jadidlar-uz/manbalar' Component={Manbalar}/>
          <Route path='jadidlar-uz/manbalar/:tab' Component={Manbalar}/>
          <Route path='jadidlar-uz/sherlar' Component={Sherlar}/>
          <Route path='jadidlar-uz/bittajadid/:id' Component={bittajadid}/>
          <Route path='jadidlar-uz*' Component={notFound} />
          <Route path='jadidlar-uz/Foydalanuvchiga' Component={Foydalanuvchiga}/>
          <Route path='jadidlar-uz/Bizhaqimizda' Component={Bizhaqimizda}/>
          <Route path='jadidlar-uz/Navbar_Asr' Component={Navbar_Asr}/>
          <Route path='jadidlar-uz/Navbar_Maq' Component={Navbar_Maq}/>
          <Route path='jadidlar-uz/Navbar_Hik' Component={Nav_Hik}/>
          <Route path='jadidlar-uz/til_imlo/:tab' Component={til_imlo} />
          <Route path='jadidlar-uz/turkiston_muxtoriyati/:tab' Component={turkiston_muxtoriyati}/>
          <Route path='jadidlar-uz/yangiliklar' Component={yangiliklar}/>
          <Route path='jadidlar-uz/seminarlar' Component={seminarlar}/>
          <Route path='jadidlar-uz/yiginlar' Component={yiginlar}/>
          <Route path='jadidlar-uz/voqealar/:tab' Component={Voqealar}/>
        </Route>
      </Routes>
    </>
  ) 
}
