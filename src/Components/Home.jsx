import React, { Component } from 'react'
import Kor_esht_oqi from './Home_page/Kor-eshit-oqi'
import Useful from './Home_page/Useful.jsx';
import Jadidlar from './Home_page/Jadidlar.jsx';
import Tab from './Components/Tabapp.jsx';
import 'swiper/css';
import 'swiper/css/navigation';
import Back_to_top from './Components/Back_to_top';
import Slayder from '../Components/Slayder.jsx';
export class Home extends Component {
  render() {
    document.title = "Jadidlar"
    return (
      <>
      <Slayder/>
      <Tab/>
      <Jadidlar />
      <Back_to_top />
      <Kor_esht_oqi/>
      <Useful/>
      </>
    )
  }
}
export default Home; 