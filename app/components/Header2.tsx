'use client';
import  { useState, useEffect } from 'react';
import React from 'react';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { motion } from 'framer-motion'

import styles from '../buttons.module.css'


type Props = {}


function Header2({}: Props) {
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
    const [tamañoNav, setTamañoNav] = useState("w-full h-[82px] max-w-auto fixed left-0 top-0 z-10 left-0 top-0 z-10 ease-in duration-300")
    const [tamañoLogo, setTamañoLogo] = useState("w-[200px] h-[50px] no-select hover:scale-105 transition-all duration-500 cursor-default")
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
            setTamañoNav("w-full h-[82px] max-w-auto fixed left-0 top-0 z-10 shadow-xl ease-in duration-300")
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
            <Link href="http://localhost:3000/" className="no-select cursor-pointer">
            <motion.img 
              title='SiteWizard'
              className={tamañoLogo + "cursor-pointer"}
              src="https://i.postimg.cc/Cx6fwg43/sitewizard-logo2.png"
              >
              </motion.img>
            </Link>

        </motion.div>
    </div>
  )
}

export default Header2