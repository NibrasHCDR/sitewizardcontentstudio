'use client';
import  { useState, useEffect } from 'react';
import React from 'react';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { motion } from 'framer-motion'

import styles from '../buttons.module.css'


type Props = {}


function Header({}: Props) {
  const handleButtonClick = () => {
    const membershipsSection = document.getElementById('about');
    if (membershipsSection) {
      membershipsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleButtonClick2 = () => {
    const membershipsSection = document.getElementById('howtouse');
    if (membershipsSection) {
      membershipsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleButtonClick3 = () => {
    const membershipsSection = document.getElementById('membersias');
    if (membershipsSection) {
      membershipsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleButtonClick4 = () => {
    const membershipsSection = document.getElementById('contacto');
    if (membershipsSection) {
      membershipsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

    const [nav, setNav] = useState(false);
    const [color, setColor] = useState('#2B60DA')
    const [textColor, setTextColor] = useState('white')
    const [tamañoNav, setTamañoNav] = useState("w-full h-[115px] max-w- fixed left-0 top-0 z-10 ease-in duration-300")
    const [tamañoLogo, setTamañoLogo] = useState("w-[240px] h-[70px] no-select hover:scale-105 transition-all duration-500 cursor-default")
    const [tamañoTexto, setTamañoTexto] = useState("font-afacad")


    const handleNav = () => {
        setNav(!nav);
};

useEffect(() => {
     const changeColor = () => {
        if(window.scrollY >= 90) {
            setColor('#2B60DA')
            setTextColor('#F7F7F7')
            setTamañoNav("w-full h-[82px] max-w-auto fixed left-0 top-0 z-10 shadow-xl ease-in duration-300 shadow-white/40 shadow-lg")
            setTamañoLogo("w-[200px] h-[50px] no-select hover:scale-105 transition-all duration-500 cursor-default")
            setTamañoTexto("font-afacad")
        } else {
            setColor('#2B60DA')
            setTextColor('#ffffff')
            setTamañoNav("w-full h-[115px] fixed left-0 top-0 z-10 ease-in duration-300")
            setTamañoLogo("w-[240px] h-[70px] no-select hover:scale-105 transition-all duration-500 cursor-default")
            setTamañoTexto("font-afacad")
        }
     };
     window.addEventListener('scroll', changeColor);
}, []);


  return (
    <div 
// Duración de la animación
    style={{backgroundColor: `${color}` }}
     className={tamañoNav}
     >
        <motion.div 
            initial={{ opacity: 0, x: 0 }}
            animate={{ opacity: 1.2, x: 0 }}
            transition={{ duration: 1, ease: [0.6, 0.05, 0.5, 0.95] }} 
        className="max-w-[1240px] no-select mx-auto h-auto w-auto flex justify-between items-center p-4 text-white">
            <Link href="/" className="no-select cursor-pointer">
            <motion.img 
              title='SiteWizard'
              className={tamañoLogo + "cursor-pointer"}
              src="https://i.postimg.cc/Cx6fwg43/sitewizard-logo2.png"
              >
              </motion.img>
            </Link>
            <ul style={{color: `${textColor}`}} className="hidden lg:flex justify-end items-end lg:space-x-8 space-x-2">
                <li className="pt-4">

                <button 
                        onClick={handleButtonClick}
                        type="button"
                        className="font-afacad xl:text-xl lg:text-xl text-base transition-all duration-500 hover:scale-105"
                        data-te-ripple-init>Acerca de</button>

                </li>
                <li className="">

                <button
                         onClick={handleButtonClick2}
                         type="button"
                        className="font-afacad xl:text-xl lg:text-xl text-base transition-all duration-500 hover:scale-105"
                        data-te-ripple-init>¿Cómo funciona?</button>

                </li>
                <li className="">
                <button type="button"
                        className="font-afacad xl:text-xl lg:text-xl text-base transition-all duration-500 hover:scale-105"
                        onClick={handleButtonClick3}
                        data-te-ripple-init>Membersías</button>
                </li>

                

            </ul>

            <div className="hidden lg:flex w-[240px] h-[70px] justify-between items-center">
               
               <a 
               href='/contactform'
               className={styles.button17}>
                Contáctanos
               </a>

            </div>

            {/* Botones Móviles */}
            <button title='' onClick={handleNav} className="block lg:hidden z-10 hover:scale-150 hover:text-[#2B60DA] transition duration-150 ease-in-out">
                {nav
                 ? <AiOutlineClose size={25} /> 
                 : <AiOutlineMenu  size={25} style={{color: `${textColor}`}}
                 />
                 }
                
            </button>
            {/* Movile Menu */}
            <div className={
                nav
                 ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
                 : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
                   
                }
                 >
            <ul>

            <li onClick={handleNav}>
              <button  onClick={handleButtonClick} className="p-4 text-4xl font-kanit hover:text-[#2B60DA] transition duration-150 ease-in-out hover:scale-125">
              Acerca de
              </button>
              </li>

              <li onClick={handleNav}>
              <button  onClick={handleButtonClick2} className="p-4 text-4xl font-kanit hover:text-[#2B60DA] transition duration-150 ease-in-out hover:scale-125">
              ¿Cómo se Usa?
              </button>
              </li>

                <li onClick={handleNav} className="p-4 text-4xl font-kanit hover:text-[#2B60DA] transition duration-150 ease-in-out hover:scale-125">
                <button onClick={handleButtonClick3}>
                  Memebrsías
                </button>
                </li>

            </ul>
            </div>
        </motion.div>
    </div>
  )
}

export default Header