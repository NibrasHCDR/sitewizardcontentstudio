"use client"
import React, { useEffect, useState } from 'react'
import styles from '../buttons.module.css'

import { HiBadgeCheck } from "react-icons/hi";

import { FcTemplate } from "react-icons/fc";

import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

type Props = {}

function Membersias({}: Props) {

    const [isHovered, setHovered] = useState(false);
    const [isButtonHovered, setButtonHovered] = useState(false);

    const [isHovered2, setHovered2] = useState(false);
    const [isButtonHovered2, setButtonHovered2] = useState(false);
  
    const handleHover = () => {
        setHovered(true);
        setButtonHovered(true);
      };
    
      const handleMouseLeave = () => {
        setHovered(false);
        setButtonHovered(false);
      };

        
    const handleHover2 = () => {
        setHovered2(true);
        setButtonHovered2(true);
      };
    
      const handleMouseLeave2 = () => {
        setHovered2(false);
        setButtonHovered2(false);
      };

      const controls = useAnimation();
      const controls2 = useAnimation();
      const controls3 = useAnimation();
      const controls4 = useAnimation();
    
      const { ref: ref1, inView: inView1 } = useInView();
      const { ref: ref2, inView: inView2 } = useInView();

    
    // UsseEfect que se acciona al momento de que la pantalla este en view, altera los 3 divs que contienen Iconos
      useEffect(() => {
        if (inView1) {
          controls.start({
            opacity: 1
          }),
          controls3.start({
            opacity: 1
          })
        }else {
          controls.start({
            opacity: 0
          }),
          controls3.start({
            opacity: 0
          })
        }
      }, [controls, controls3, inView1]);
    
      useEffect(() => {
        if (inView2) {
          controls2.start({
            opacity: 1,
          }),
          controls4.start({
            opacity: 1
          })
        }else {
          controls2.start({
            opacity: 0,
          }),
          controls4.start({
            opacity: 0
          })
        }
      }, [controls2, controls4, inView2]);

    
  return (
    <div className="w-full h-full">

        <div className="w-full h-full">

              <div className="contenedor-membersias w-full h-full">

                 <div className="membersias-1 bg-[#2B60DA]"> 
                    
                 </div>

                 <div className="membersias-2 bg-gradient-to-r from-[#2B60DA]/20 via-white to-[#2B60DA]/20">

                 </div>

                 <div className="membersias-3 lg:p-24 md:p-10 p-4 flex flex-col justify-center items-center text-center">

                    <div className="w-full h-auto flex flex-col space-y-4">

                        <h1 className="xl:text-5xl font-signika lg:text-2xl md:text-2xl text-2xl text-white">
                            Encuentra el plan perfecto para tu sitio
                        </h1>

                        <h1 className="font-rubik xl:text-lg lg:text-lg md:text-base text-base text-white">
                            En xplendev tenemos planes de servicios de contratación para tu Diseño Web + CMS
                        </h1>

                    </div>

                 </div>

                 <motion.div 
                 ref={ref1}
                 initial={{ opacity: 0 }}
                 animate={controls}
                 transition={{ duration: 0.7 , ease: [0.6, 0.05, 0.5, 0.95]}}
                 onMouseEnter={handleHover}
                 onMouseLeave={handleMouseLeave}
                 className={`membersias-4 flex mx-auto w-full h-auto xl:max-w-[430px] lg:min-w-[320px] lg:max-w-[320px] xl:min-w-[430px] md:min-w-[320px] md:max-w-[320px] xl:mr-4 lg:mr-2 mr-1 rounded-t-3xl xl:p-8 lg:p-8 p-4 myfilter no-select${isButtonHovered ? ' bg-[#2B60DA] text-white border-t-2 border-t-black border-x-2 border-x-black' : ' bg-white'}`}>
                    
                 
                 
                     <div className="w-full h-full flex flex-col space-y-4">

                          <div className="w-full h-auto flex space-x-2">

                            <Image 
                            className="w-[58px] h-[58px]" 
                            height={450}
                            width={450}
                            src={'https://i.postimg.cc/yNf9v8Sg/page-1.gif'} 
                            alt={'design'}>
                                 
                            </Image>

                            <Image 
                            className="w-[58px] h-[58px]" 
                            height={450}
                            width={450}
                            src={'https://i.postimg.cc/rmc9nNch/domain-1.gif'} 
                            alt={'database'}>
                                 
                            </Image>

                            <Image 
                            className="w-[58px] h-[57px]" 
                            height={450}
                            width={450}
                            src={'https://i.postimg.cc/SxxF5cQx/database-1.gif'} 
                            alt={'domain'}>
                                 
                            </Image>

                          </div>

                          
                          <div className="w-full h-auto flex space-x-2">

                            <h1 className="xl:text-5xl font-signika lg:text-2xl md:text-2xl text-2xl">
                                Estandar
                            </h1>

                          </div>

                          
                          <div className="w-full h-auto flex flex-col">

                            <h1 className="font-afacad xl:text-xl lg:text-md md:tet-md text-md">
                                Desde $139.990/<span className="font-rubik xl:text-lg lg:text-lg md:text-base text-base">Pago único</span>
                            </h1>

                            <h1 className="font-afacad xl:text-xl lg:text-md md:tet-md text-md">
                                Luego $32.990/<span className="font-rubik xl:text-lg lg:text-lg md:text-base text-base">Anual</span>
                            </h1>

                          </div>

                         <div className="w-full h-auto flex space-x-2 items-center">

                            <HiBadgeCheck 
                                 className={`xl:text-xl lg:text-md md:tet-md text-md w-[25px] h-[25px]
                                 ${isButtonHovered ? ' text-black ' : 'text-[#2B60DA] '}`}>

                            </HiBadgeCheck>

                            <h1 className="font-afacad xl:text-xl lg:text-md md:tet-md text-md">
                                Diseño Personalizado
                            </h1>

                          </div>

                           <div className="w-full h-auto flex space-x-2 items-center">

                            <HiBadgeCheck 
                                 className={`xl:text-xl lg:text-md md:tet-md text-md w-[25px] h-[25px]
                                 ${isButtonHovered ? ' text-black ' : 'text-[#2B60DA] '}`}>

                            </HiBadgeCheck>

                            <h1 className="font-afacad xl:text-xl lg:text-md md:tet-md text-md">
                                Full Responsive
                            </h1>

                          </div>

                        <div className="w-full h-auto flex space-x-2 items-center">

                            <HiBadgeCheck 
                                 className={`xl:text-xl lg:text-md md:tet-md text-md w-[25px] h-[25px]
                                 ${isButtonHovered ? ' text-black ' : 'text-[#2B60DA] '}`}>

                            </HiBadgeCheck>

                            <h1 className="font-afacad xl:text-xl lg:text-md md:tet-md text-md">
                                Formularios de Contacto
                            </h1>

                          </div>

                         <div className="w-full h-auto flex space-x-2 items-center">

                            <HiBadgeCheck 
                                 className={`xl:text-xl lg:text-md md:tet-md text-md w-[25px] h-[25px]
                                 ${isButtonHovered ? ' text-black ' : 'text-[#2B60DA] '}`}>

                            </HiBadgeCheck>

                            <h1 className="font-afacad xl:text-xl lg:text-md md:tet-md text-md">
                                Dominio .cl/.com
                            </h1>

                          </div>

                          <div className="w-full h-auto flex space-x-2 items-center">

                            <HiBadgeCheck 
                                 className={`xl:text-xl lg:text-md md:tet-md text-md w-[25px] h-[25px]
                                 ${isButtonHovered ? ' text-black ' : 'text-[#2B60DA] '}`}>

                            </HiBadgeCheck>

                            <h1 className="font-afacad xl:text-xl lg:text-md md:tet-md text-md">
                                Servicio de Hosting
                            </h1>

                          </div>

                          <div className="w-full h-auto flex space-x-2 items-center">

                            <HiBadgeCheck 
                                 className={`xl:text-xl lg:text-md md:tet-md text-md w-[25px] h-[25px]
                                 ${isButtonHovered ? ' text-black ' : 'text-[#2B60DA] '}`}>

                            </HiBadgeCheck>

                            <h1 className="font-afacad xl:text-xl lg:text-md md:tet-md text-md">
                                Certificado SSL
                            </h1>

                          </div>

                     </div>
                  
                 </motion.div>

                 <motion.div
                  ref={ref2}
                  initial={{ opacity: 0 }}
                  animate={controls2}
                  transition={{ duration: 0.7 , ease: [0.6, 0.05, 0.5, 0.95]}}
                  onMouseEnter={handleHover2}
                  onMouseLeave={handleMouseLeave2}
                  className={`membersias-5 flex mx-auto xl:max-w-[430px] xl:min-w-[430px] lg:min-w-[320px] lg:max-w-[320px] md:min-w-[320px] md:max-w-[320px] xl:ml-4 lg:ml-2 ml-1 rounded-t-3xl xl:p-8 lg:p-8 p-4 myfilter w-full md:mt-0 lg:mt-0 xl:mt-0 mt-6 no-select
                  ${isButtonHovered2 ? ' bg-[#2B60DA] text-white border-t-2 border-t-black border-x-2 border-x-black' : ' bg-white'}`}>

                 
                <div className="w-full h-full flex flex-col space-y-4">

                          <div className="w-full h-auto flex space-x-2">
                          <Image 
                            className="w-[58px] h-[58px]" 
                            height={450}
                            width={450}
                            src={'https://i.postimg.cc/yNf9v8Sg/page-1.gif'} 
                            alt={'design'}>
                                 
                            </Image>

                            <Image 
                            className="w-[58px] h-[58px]" 
                            height={450}
                            width={450}
                            src={'https://i.postimg.cc/rmc9nNch/domain-1.gif'} 
                            alt={'database'}>
                                 
                            </Image>

                            <Image 
                            className="w-[58px] h-[57px]" 
                            height={450}
                            width={450}
                            src={'https://i.postimg.cc/SxxF5cQx/database-1.gif'} 
                            alt={'domain'}>

                            </Image>

                            <Image 
                            className="w-[58px] h-[57px]" 
                            height={450}
                            width={450}
                            src={'https://i.postimg.cc/k5FnP73n/cms-1.gif'} 
                            alt={'cms'}>

                            </Image>

                          </div>

                          
                          <div className="w-full h-auto flex space-x-2">

                            <h1 
                                 className={`xl:text-5xl font-signika lg:text-2xl md:text-2xl text-2xl
                                  ${isButtonHovered2 ? ' text-white ' : 'text-[#2B60DA] '}`}>


                                Exclusivo
                            </h1>

                          </div>

                          
                          <div className="w-full h-auto flex flex-col">

                            <h1 className="font-afacad xl:text-xl lg:text-md md:tet-md text-md">
                                Desde $139.990/
                                <span 
                                   className={`font-rubik xl:text-lg lg:text-lg md:text-base text-base
                                  ${isButtonHovered2 ? ' text-white ' : 'text-[#2B60DA] '}`}>
                                    Pago único
                                </span>
                            </h1>

                            <h1 className="font-afacad xl:text-xl lg:text-md md:tet-md text-md">
                                Luego $32.990/                                
                                <span 
                                   className={`font-rubik xl:text-lg lg:text-lg md:text-base text-base
                                  ${isButtonHovered2 ? ' text-white ' : 'text-[#2B60DA] '}`}>
                                    Anual
                                </span>
                            </h1>

                          </div>

                         <div className="w-full h-auto flex space-x-2 items-center">

                            <HiBadgeCheck 
                                 className={`xl:text-xl lg:text-md md:tet-md text-md w-[25px] h-[25px]
                                 ${isButtonHovered2 ? ' text-black ' : 'text-[#2B60DA] '}`}>

                            </HiBadgeCheck>

                            <h1 className="font-afacad xl:text-xl lg:text-md md:tet-md text-md">
                                Diseño Personalizado
                            </h1>

                          </div>

                           <div className="w-full h-auto flex space-x-2 items-center">

                            <HiBadgeCheck 
                                 className={`xl:text-xl lg:text-md md:tet-md text-md w-[25px] h-[25px]
                                 ${isButtonHovered2 ? ' text-black ' : 'text-[#2B60DA] '}`}>
                                Pago único
                            </HiBadgeCheck>

                            <h1 className="font-afacad xl:text-xl lg:text-md md:tet-md text-md">
                                Full Responsive
                            </h1>

                          </div>

                        <div className="w-full h-auto flex space-x-2 items-center">

                            <HiBadgeCheck 
                                 className={`xl:text-xl lg:text-md md:tet-md text-md w-[25px] h-[25px]
                                 ${isButtonHovered2 ? ' text-black ' : 'text-[#2B60DA] '}`}>

                            </HiBadgeCheck>

                            <h1 className="font-afacad xl:text-xl lg:text-md md:tet-md text-md">
                                Formularios de Contacto
                            </h1>

                          </div>

                         <div className="w-full h-auto flex space-x-2 items-center">

                            <HiBadgeCheck 
                                 className={`xl:text-xl lg:text-md md:tet-md text-md text-[#2B60DA] xl:w-[32px] xl:h-[32px] lg:w-[36px] lg:h-[36px] md:h-[33px] md:w-[33px] w-[27px] h-[27px]
                                 ${isButtonHovered2 ? ' text-black ' : 'text-[#2B60DA] '}`}>

                            </HiBadgeCheck>

                            <h1 
                            className="font-afacad xl:text-xl lg:text-md md:tet-md text-md">
                                Gestór de Contenido SiteWizard Sanity CMS
                            </h1>

                          </div>

                         <div className="w-full h-auto flex space-x-2 items-center">

                            <HiBadgeCheck 
                                 className={`xl:text-xl lg:text-md md:tet-md text-md w-[25px] h-[25px]
                                 ${isButtonHovered2 ? ' text-black ' : 'text-[#2B60DA] '}`}>

                            </HiBadgeCheck>

                            <h1 className="font-afacad xl:text-xl lg:text-md md:tet-md text-md">
                                Dominio .cl/.com
                            </h1>

                          </div>

                          <div className="w-full h-auto flex space-x-2 items-center">

                            <HiBadgeCheck 
                                 className={`xl:text-xl lg:text-md md:tet-md text-md w-[25px] h-[25px]
                                 ${isButtonHovered2 ? ' text-black ' : 'text-[#2B60DA] '}`}>

                            </HiBadgeCheck>

                            <h1 className="font-afacad xl:text-xl lg:text-md md:tet-md text-md">
                                Servicio de Hosting
                            </h1>

                          </div>

                          <div className="w-full h-auto flex space-x-2 items-center">

                            <HiBadgeCheck 
                                 className={`xl:text-xl lg:text-md md:tet-md text-md w-[25px] h-[25px]
                                 ${isButtonHovered2 ? ' text-black ' : 'text-[#2B60DA] '}`}>

                            </HiBadgeCheck>

                            <h1 className="font-afacad xl:text-xl lg:text-md md:tet-md text-md">
                                Certificado SSL
                            </h1>

                          </div>

                     </div>

                     

                 </motion.div>

                 <motion.div 
                     initial={{ opacity: 0 }}
                     animate={controls3}
                     transition={{ duration: 0.7 , ease: [0.6, 0.05, 0.5, 0.95]}}
                     onMouseEnter={handleHover}
                     onMouseLeave={handleMouseLeave}
                     className={`membersias-6 flex mx-auto xl:max-w-[430px] xl:min-w-[430px] lg:min-w-[320px] lg:max-w-[320px] md:min-w-[320px] md:max-w-[320px]  xl:mr-4 lg:mr-2 mr-1 rounded-b-3xl xl:p-8 lg:p-8 p-4 myfilter2 w-full md:mb-0 lg:mb-0 xl:mb-0 mb-6
                     ${isButtonHovered ? ' bg-[#2B60DA] border-x-2 border-x-black' : 'bg-white '}`}>

                     <div className="flex h-full w-full justify-center items-center">
                     <button className={styles.button17} role="button">
                        Ver más
                     </button> 
                     </div>  

                 </motion.div>

                 <motion.div 
                     initial={{ opacity: 0 }}
                     animate={controls4}
                     transition={{ duration: 0.7 , ease: [0.6, 0.05, 0.5, 0.95]}}
                     onMouseEnter={handleHover2}
                     onMouseLeave={handleMouseLeave2}
                     className={`membersias-7 flex mx-auto xl:max-w-[430px] xl:min-w-[430px] lg:min-w-[320px] lg:max-w-[260px] md:min-w-[320px] md:max-w-[320px] xl:ml-4 lg:ml-2 ml-1 rounded-b-3xl xl:p-8 lg:p-8 p-4 myfilter w-full md:mb-0 lg:mb-0 xl:mb-0 mb-6
                     ${isButtonHovered2 ? ' bg-[#2B60DA] border-x-2 border-x-black' : 'bg-white '}`}>
                 
                    
                 <div className="flex h-full w-full justify-center items-center">
                     <button className={styles.button17} role="button">
                        Ver más
                     </button> 
                </div>  

                 </motion.div>

              </div>

        </div>
        

    </div>
  )
}

export default Membersias