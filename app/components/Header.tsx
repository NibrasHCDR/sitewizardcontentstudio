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
    const membershipsSection = document.getElementById('memberships');
    if (membershipsSection) {
      membershipsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleButtonClick0 = () => {
    const membershipsSection = document.getElementById('diseños');
    if (membershipsSection) {
      membershipsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleButtonClick2 = () => {
    const membershipsSection = document.getElementById('contact');
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
            <Link href="https://xplendev.com/" className="no-select cursor-pointer">
            <motion.img 
              title='comon'
              className={tamañoLogo + "cursor-pointer"}
              src="https://i.postimg.cc/Cx6fwg43/sitewizard-logo2.png"
              >
              </motion.img>
            </Link>
            <ul style={{color: `${textColor}`}} className="hidden lg:flex justify-end items-end lg:space-x-8 space-x-2">
                <li className="pt-4">
                <Link href="/obras">
                <button type="button"
                        className="font-afacad xl:text-xl lg:text-xl text-base"
                        data-te-ripple-init>About us</button>
                </Link>
                </li>
                <li className="">
                <Link href={"/mundodigital"}>
                <button type="button"
                        className="font-afacad xl:text-xl lg:text-xl text-base"
                        data-te-ripple-init>How to use</button>
                </Link>
                </li>
                <li className="">
                <button type="button"
                        className="font-afacad xl:text-xl lg:text-xl text-base"
                        onClick={handleButtonClick0}
                        data-te-ripple-init>Membership</button>
                </li>

                

            </ul>

            <div className="hidden lg:flex w-[240px] h-[70px] justify-between items-center">
               
               <button className={styles.button17}>
                Contactanos
               </button>

            </div>

            {/* Botones Móviles */}
            <button title='comon' onClick={handleNav} className="block lg:hidden z-10 hover:scale-150 hover:text-[#2B60DA] transition duration-150 ease-in-out">
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
            <Link href={"/obras"}>
            <li>
              <button onClick={handleNav} className="p-4 text-4xl font-kanit hover:text-[#2B60DA] transition duration-150 ease-in-out hover:scale-125">
              About us
              </button>
              </li>
              </Link>

              <Link href={"/mundodigital"}>
              <li>
              <button onClick={handleNav} className="p-4 text-4xl font-kanit hover:text-[#2B60DA] transition duration-150 ease-in-out hover:scale-125">
              How to use
              </button>
              </li>
                </Link>

                <li onClick={handleNav} className="p-4 text-4xl font-kanit hover:text-[#2B60DA] transition duration-150 ease-in-out hover:scale-125">
                <button onClick={handleButtonClick0}>
                  Membersip
                </button>
                </li>

            </ul>
            </div>
        </motion.div>
    </div>
  )
}

export default Header