import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"

export default function Header() {
    const [searchVisble, setSearchVisble] = useState(false);
    return (
        <>
            <div>
                
            <nav className="navbar !w-full lg:!w-full " id='to_top'>
                    <div className="navbar-container container">
                        <input type="checkbox" className='!bg-red-600 z-2000' name="" id="" />
                        <div className="hamburger-lines">
                            <span className="line line1"></span>
                            <span className="line line2"></span>
                            <span className="line line3"></span>
                        </div>
                        <ul className="menu-items">
                            <li className='navbar-jadid'><Link to="/jadidlar">JADIDLAR</Link></li>
                            <li className="dropdown">
                                <button className="dropdown-button button_nav">TIL VA IMLO</button>
                                <div className="dropdown-content">
                                    <Link to="jadidlar-uz/til_imlo/asarlar">Asarlar</Link>
                                    <Link to="jadidlar-uz/til_imlo/maqolalar">Maqolalar</Link>
                                    <Link to="jadidlar-uz/til_imlo/hikmatlar">Hikmatlar</Link>
                                    </div>
                                </li>
                                <li className="dropdown">
                                <button className="dropdown-button">MANBALAR</button>
                                <div className="dropdown-content">
                                    <Link to="jadidlar-uz/manbalar/arxiv_hujjatlar" count="1">Arxiv hujjatlari</Link>
                                    <Link to="jadidlar-uz/manbalar/matbuot" count="2">Matbuot</Link>
                                    <Link to="jadidlar-uz/manbalar/suratlar" count="3">Suratlar</Link>
                                    <Link to="jadidlar-uz/manbalar/ko'ruvlar" count="4">Ko'ruvlar</Link>
                                    <Link to="jadidlar-uz/manbalar/eshituvlar" count="5">Eshituvlar</Link>
                                </div>
                            </li>
                            <li className="dropdown">

                                <button className="dropdown-button">IZLANISHLAR</button>
                                <div className="dropdown-content">
                                    <Link to="jadidlar-uz/izlanishlar/asarlar" count="1">Asarlar</Link>
                                    <Link to="jadidlar-uz/izlanishlar/maqolalar" count="2">Maqolalar</Link>
                                    <Link to="jadidlar-uz/izlanishlar/disertatsiyalar" count="3">Dissertatsiyalar</Link>
                                    <Link to="jadidlar-uz/izlanishlar/esdaliklar" count="4">Estaliklar</Link>
                                    {/* <a href="#">Eshituvlar</a> */}
                                </div>
                            </li>
                            <li className="dropdown">
                                <button className="dropdown-button button_nav">TURKISTON MUXTORIYATI</button>
                                <div className="dropdown-content">
                                    <Link to="jadidlar-uz/turkiston_muxtoriyati/asarlar">Asarlar</Link>
                                    <Link to="jadidlar-uz/turkiston_muxtoriyati/maqolalar">Maqolalar</Link>
                                    <Link to="jadidlar-uz/turkiston_muxtoriyati/sherlar">Sherlar</Link>
                                    <Link to="jadidlar-uz/turkiston_muxtoriyati/esdaliklar">Esdaliklar</Link>
                                    {/* <a href="#">Eshituvlar</a> */}
                                </div>
                            </li>
                            <li className="dropdown">
                                <button className="dropdown-button">VOQEALAR</button>
                                <div className="dropdown-content">
                                    <Link to="jadidlar-uz/voqealar/yangiliklar">Yangiliklar</Link>
                                    <Link to="jadidlar-uz/voqealar/yiginlar">Yig'inlar</Link>
                                    <Link to="jadidlar-uz/voqealar/seminarlar">Seminarlar</Link>
                                    {/* <a href="#">Estaliklar</a> */}
                                    {/* <a href="#">Eshituvlar</a> */}
                                </div>
                            </li>
                            <li><Link to="jadidlar-uz/Foydalanuvchiga">FOYDALANUVCHIGA</Link></li>
                            <li><Link to="jadidlar-uz/Bizhaqimizda">BIZ HAQIMIZDA</Link></li>
                            <div className='btn_search'>
                            <motion.button initial={{x:0}}  animate={{x:0}} 
                            onClick={()=> setSearchVisble(!searchVisble)} style={{ marginLeft: 20 }} className='searcher !z-30'><i style={{ color: '#ffffff' }} className="fa-solid fa-magnifying-glass"></i></motion.button>
                            {
                                searchVisble && (
                                    <motion.div 
                                    initial={{ x:1000}}
                                    animate={{ x: 0 }}
                                    transition={{ ease: "easeOut", duration: 0.5 }}
                                    className='Search_div_header'
                                    >
                                        <input type="text" placeholder='Search....' />
                                    </motion.div>
                                )
                            }
                            </div>
                        </ul>
                        <Link to='/jadidlar-uz'><h1 className="logo">JADIDLAR</h1></Link>
                    </div>
                </nav>
            </div>
        </>
    )
}
