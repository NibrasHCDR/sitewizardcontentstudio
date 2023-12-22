"use client"
import React, { useEffect } from 'react'

import Styles from './footer.module.css'
import Link from 'next/link'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

type Props = {}



function Footer({}: Props) {

  const controls = useAnimation();
  const controls2 = useAnimation()
  const { ref, inView } = useInView();

// UsseEfect que se acciona al momento de que la pantalla este en view, altera los 3 divs que contienen Iconos
  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        scale: 1,
      });
    }else {
      controls.start({
        opacity: 0,
        scale: 0,
      });
    }
  }, [controls, inView]);

  useEffect(() => {
    if (inView) {
      controls2.start({
        opacity: 1,
      });
    }else {
      controls2.start({
        opacity: 0,
      });
    }
  }, [controls2, inView]);

  
  return (
    <div className="w-full h-full bg-[#2B60DA]">
      
          <div className="w-full h-full">

            <div className={`w-full h-full lg:pt-24 md:pt-10 pt-4 lg:px-24 md:px-10 px-4 lg:pb-8 md:pb-4 pb-2 ${Styles['contenedor-footer']}` }>
              
               <div className={`flex justify-center md:justify-start md:py-0 lg:py-0 xl:py-0 py-2 ${Styles['footer-1']}` }>
               
                     <div className="lg:w-[240px] w-[150px] h-auto">
                        <Link href="" className="no-select cursor-pointer">
                           <motion.img 
                            title='SiteWizard'
                             className="cursor-pointer transition-all duration-500 hover:scale-105"
                             src="https://i.postimg.cc/Cx6fwg43/sitewizard-logo2.png"
                               >
                           </motion.img>
                       </Link>
                     </div>

               </div>

               <div className={` text-white md:py-0 lg:py-0 xl:py-0 py-2 ${Styles['footer-3']}` }>
               
                      <div className="flex w-full h-full space-x-4 justify-center items-center lg:justify-end">

                         
                          <a href='/creditos' className="font-afacad xl:text-xl lg:text-md md:tet-md text-md cursor-pointer">
                           Creditos
                          </a>

                          <a href='http://localhost:3000/' className="font-afacad xl:text-xl lg:text-md md:tet-md text-md cursor-pointer">
                          Inicio
                          </a>

                          <a href='https://xplendev.com/' className="font-afacad xl:text-xl lg:text-md md:tet-md text-md cursor-pointer">
                          Xplendev
                          </a>

                          <a href='/contactform' className="font-afacad xl:text-xl lg:text-md md:tet-md text-md cursor-pointer">
                          Contacto
                          </a>

                      </div>

               </div>

               <div className={`text-white md:py-0 lg:py-0 xl:py-0 py-2 ${Styles['footer-4']}` }>
               
                        <div className="w-full h-auto flex justify-center items-center lg:justify-end lg:items-end">
                          
                          <h1 className="font-afacad xl:text-xl lg:text-md md:tet-md text-md">
                          © 2023 SiteWizard | By Luis Rivera - XplenDev
                          </h1>

                        </div>
               </div>
               
            </div>

          </div>

    </div>
  )
}

export default Footer