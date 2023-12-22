"use client"
import React, { useEffect } from 'react'

import Image from 'next/image'

import Styles from './contacto.module.css'
import styles from '../../buttons.module.css'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

type Props = {}

function Contacto({}: Props) {

  

  const controls = useAnimation();


  const { ref, inView } = useInView();


// UsseEfect que se acciona al momento de que la pantalla este en view, altera los 3 divs que contienen Iconos
  useEffect(() => {
    if (inView) {
      controls.start({
        x: 0,
        opacity: 1
      })
    }else {
      controls.start({
        x: -300,
        opacity: 0
      })
    }
  }, [controls, inView]);

  
  return (
    <div className="w-full h-full bg-gradient-to-r from-[#2B60DA]/20 via-white to-[#2B60DA]/20">

        <div className="w-full h-full ">

            <motion.div 
            ref={ref}
            initial={{ x: -300 , opacity: 0}}
            animate={controls}
            transition={{ duration: 0.7 , ease: [0.6, 0.05, 0.5, 0.95]}}
            className={`w-full h-full py-8 ${Styles['contenedor-contacto']}` }>

              <div className={`lg:pl-24 md:pl-10 pl-4 lg:pr-8 ${Styles['contacto-1']}` }>
              
                  <div className="w-full h-full flex flex-col lg:space-y-4 space-y-2">
                   
                  <h1 className="xl:text-5xl font-signika lg:text-2xl md:text-2xl text-2xl text-white">
                      Experimenta la comodidad de gestionar tu sitio desde cualquier lugar y disfruta del control total!
                             
                    </h1>

                     <div className="w-auto h-auto md:py-0 lg:py-0 xl:py-0 py-3">
                     <button className={styles.button17} role="button">
                        Obtén SiteWizard Sanity CMS
                     </button>
                     </div>


                  </div>
                  
              </div>

              <div className={`lg:pl-24 md:pl-10 pl-4 ${Styles['contacto-2']}` }>

              <div className="w-full h-auto flex space-x-2">

                  
                     <div className="xl:h-[105px] xl:w-[105px] lg:h-[80px] lg:w-[80px] w-[50px] h-[50px] bg-white rounded-full justify-center items-center flex transition-all duration-300 hover:scale-105">
                     <Image 
                    className="xl:h-[75px] xl:w-[75px] lg:h-[50px] lg:w-[50px] h-[35px] w-[35px]"
                    height={70}
                    width={105}
                    src={'https://i.postimg.cc/T1Q8NVYC/sslsecureicon.png'} 
                    alt={'SSL'}>

                    </Image>

                     </div>


                     <div className="xl:h-[105px] xl:w-[105px] lg:h-[80px] lg:w-[80px] w-[50px] h-[50px] bg-white rounded-full justify-center items-center flex transition-all duration-300 hover:scale-105">
                     <Image 
                    className="xl:h-[75px] xl:w-[75px] lg:h-[50px] lg:w-[50px] h-[35px] w-[35px]"
                    height={70}
                    width={105}
                    src={'https://i.postimg.cc/3rvH6YXT/cloudserviceslogo.png'} 
                    alt={'cloud'}>

                    </Image>

                     </div>
                    
                    <div className="xl:h-[105px] xl:w-[105px] lg:h-[80px] lg:w-[80px] w-[50px] h-[50px] bg-red-400 rounded-full justify-center items-center flex transition-all duration-300 hover:scale-105">

                    <Image 
                    className="xl:h-[75px] xl:w-[75px] lg:h-[50px] lg:w-[50px] h-[35px] w-[35px]"
                    height={70}
                    width={105}
                    src={'https://i.postimg.cc/X7tfP09V/sanitylogo.png'} 
                    alt={'sanity'}>

                    </Image>

                    </div>
              </div>
                  
              </div>

              <div className={`rounded-3xl lg:min-h-[320px] lg:pt-24 md:pt-10 pt-4 ${Styles['contacto-3']}` }>

                  <div className="w-full h-full flex">

                    <Image 
                    height={500}
                    width={800}
                    src={'https://i.postimg.cc/13gGMJXn/phone-1.png'} 
                    alt={'phone'}>
                    </Image>

                  </div>

              </div>

              <div className={`lg:pt-24 md:pt-10 pt-4 ${Styles['contacto-4']}` }>
              
                  <div className="h-[110px] w-[110px] flex space-x-32 items-center justify-center rounded-full bg-[#2B60DA]">

                    <Image 
                    className="h-[70px] w-[70px]"
                    height={70}
                    width={105}
                    src={'https://i.postimg.cc/HWqBJr21/project-launch.png'} 
                    alt={'deploy'}>

                    </Image>

                  </div>

                  
                  
              </div>

              <div className={`lg:pt-24 md:pt-10 pt-4 ${Styles['contacto-5']}` }>
                   
              </div>

              <div className={`lg:pr-24 md:pr-10 pr-4 ${Styles['contacto-6']}` }>
                  <div className="h-full w-full flex">

                   
                  <h1 className="xl:text-5xl font-signika lg:text-2xl md:text-2xl text-2xl text-white lg:pr-24 md:pr-10 md:pl-0 lg:pl-0 xl:pl-0 pl-4 md:py-0 lg:py-0 xl:py-0 py-4">
                  No lo dudes, Ponte en contacto y eleva tu marca a un nuevo Nivel Profesional.
                    </h1> 

                  </div>
              </div>

              <div className={`lg:pb-24 md:pb-10 pb-4 md:px-0 lg:px-0 xl:px-0  px-4  ${Styles['contacto-7']}` }>
                  <div className="h-full w-full flex">

                    <Image 
                    className="w-full h-full rounded-2xl"
                    height={2050}
                    width={2050}
                    src={'https://i.postimg.cc/YC99v3q0/Screenshot-6.png'} 
                    alt={'admin'}>

                    </Image>

                  </div>
              </div>

              <div className={`flex justify-end items-center lg:pr-24 md:pr-10 pr-4 ${Styles['contacto-8']}` }>
                  <div className="h-[110px] w-[110px] flex items-center justify-center rounded-full bg-[#2B60DA]">

                    <Image 
                    className="h-[70px] w-[70px]"
                    height={70}
                    width={105}
                    src={'https://i.postimg.cc/rpPB08s0/student.png'} 
                    alt={'pcuser'}>

                    </Image>

                  </div>
              </div>

              <div className={`flex justify-end items-center lg:pb-24 md:pb-10 pb-4 lg:pr-24 md:pr-10 pr-4 ${Styles['contacto-9']}` }>
                  <div className="h-[110px] w-[110px] flex items-center justify-center rounded-full bg-[#2B60DA]">

                    <Image 
                    className="h-[70px] w-[70px]"
                    height={70}
                    width={105}
                    src={'https://i.postimg.cc/26LPnPLH/ui-design.png'} 
                    alt={'smart'}>

                    </Image>

                  </div>
              </div>

              <div className={`flex bg-[#2B60DA] rounded-r-full ${Styles['contacto-10']}` }>
                  
              </div>

                 

            </motion.div>

        </div>
        

    </div>
  )
}

export default Contacto