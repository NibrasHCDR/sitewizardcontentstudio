"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'

import styles from '../buttons.module.css'

import { FcMultipleDevices, FcGoogle, FcConferenceCall, FcFinePrint, FcPrivacy, FcAssistant } from "react-icons/fc";
import { motion, useAnimation } from 'framer-motion';


type Props = {}

function Inicio({}: Props) {

    //creamos nuestras animaciones de framer motion
    const animacionTexto = useAnimation();
    const animacionTexto_2 = useAnimation();
    const animacionIcono_1 = useAnimation();
    const animacionIcono_2 = useAnimation();
    const animacionIcono_3 = useAnimation();
    const animacionIcono_4 = useAnimation();
    const animacionIcono_5 = useAnimation();
    const animacionIcono_6 = useAnimation();
    const animacionImagen = useAnimation();

    //creamos un useefect que renderice la animación cuando se ejecute constrolsInicio1 y controlsInicio2
    useEffect(() => {
        const animateInicio1 = async () => {
          await animacionIcono_1.start({
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { duration: 0.05, ease: 'easeInOut' },
          });
          await animacionIcono_2.start({
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { duration: 0.05, ease: 'easeInOut' },
          });
          await animacionIcono_3.start({
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { duration: 0.05, ease: [0.6, 0.05, 0.5, 0.95] },
          });
          await animacionIcono_4.start({
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { duration: 0.05, ease: [0.6, 0.05, 0.5, 0.95] },
          });
          await animacionIcono_5.start({
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { duration: 0.05, ease: [0.6, 0.05, 0.5, 0.95] },
          });
          await animacionIcono_6.start({
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { duration: 0.05, ease: [0.6, 0.05, 0.5, 0.95] },
          });
          await animacionTexto.start({
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { duration: 0.05, ease: [0.6, 0.05, 0.5, 0.95] },
          });
          await animacionTexto_2.start({
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { duration: 0.05, ease: [0.6, 0.05, 0.5, 0.95] },
          });
          await animacionImagen.start({
            opacity: 1,
            y: 0,
            transition: { duration: 0.1, ease: [0.6, 0.05, 0.5, 0.95] },
          });
        };
        animateInicio1();
      }, [animacionIcono_1, animacionIcono_2,animacionIcono_3,animacionIcono_4,animacionIcono_5,animacionIcono_6,animacionTexto,animacionTexto_2,animacionImagen ]);


  return (
    <div className="w-full h-screen bg-gradient-to-b from-[#2B60DA] to-[#2757C6] lg:mt-12 mt-24">

    <div className="h-full w-full">

           <div className="contenedor-inicio w-full h-full lg:pt-24 lg:px-24 md:pt-10 md:px-10 pt-4 px-4">

            <div className="inicio-1 flex justify-center items-center w-full text-center">
             
                 <motion.div 
                 initial={{ opacity: 0, y: 0, scale: 0 }}
                 animate={animacionTexto}
                 className="h-auto w-auto transition-all">

                    <h1 className="xl:text-5xl font-signika lg:text-2xl md:text-2xl text-2xl text-white">
                        Manten el Control de Tu Sitio Web con <br></br>
                        SiteWizard Sanity Content Studio CMS
                    </h1>

                 </motion.div>

            </div>

            <div className="inicio-2 flex text-center justify-center">

                <motion.div
                 initial={{ opacity: 0, y: 0, scale: 0 }}
                 animate={animacionTexto_2}
                 className="w-auto h-auto xl:space-y-8 lg:space-y-4 space-y-2 flex flex-col transition-all">
                    <h1 className="font-afacad xl:text-2xl lg:text-md md:tet-md text-md text-white">
                      Administra cada elemento de tú sitio con Sanity.io
                    </h1>

                  <div className="h-auto w-auto">
                    <button className={styles.button17} role="button">
                        Obtén SiteWizard Sanity CMS
                     </button>
                  </div>


                </motion.div>

            </div>

            <div className="inicio-4 w-full h-full relative">
                  

                  <motion.div 
                 initial={{ opacity: 0, y: 500 }}
                 animate={animacionImagen}
                  className="w-full h-full absolute transition-all">
                      <Image
                       className="transition-all hover:scale-95 hover:scale-y-100 duration-300"
                       src={'https://i.postimg.cc/bv5hHYzy/device-inicio-sitewizard.png'} 
                       alt={'device'}
                       objectFit='fill'
                       layout='fill'>

                      </Image>
                  </motion.div>
            
                  
            </div>

            <div className="inicio-5 flex justify-center items-center">
            
                  <motion.div 
                  initial={{ opacity: 0, y: 0 , scale: 0}}
                  animate={animacionIcono_1}
                  className="h-auto w-auto bg-white rounded-full transition-all">
                  <FcConferenceCall className="xl:h-[50px] xl:w-[50px] lg:h-[25px] lg:w-[25px] h-[25px] w-[25px] lg:m-2 m-2 transition-all hover:scale-105 duration-300">
                  </FcConferenceCall> 
                  </motion.div>

            </div>

            <div className="inicio-6 flex justify-center items-center">
            
                  <motion.div 
                  initial={{ opacity: 0, y: 0, scale: 0 }}
                  animate={animacionIcono_6}
                  className="h-auto w-auto bg-white rounded-full transition-all">
                  <FcMultipleDevices className="xl:h-[50px] xl:w-[50px] lg:h-[25px] lg:w-[25px] h-[25px] w-[25px] lg:m-2 m-2 transition-all hover:scale-105 duration-300">
                  </FcMultipleDevices> 
                  </motion.div>

            </div>
            
            <div className="inicio-7 flex justify-center items-center">
            
                  <motion.div
                   initial={{ opacity: 0, y: 0, scale: 0 }}
                   animate={animacionIcono_2}
                   className="h-auto w-auto bg-white rounded-full transition-all">
                  <FcGoogle className="xl:h-[65px] xl:w-[65px] lg:h-[35px] lg:w-[35px] h-[25px] w-[25px] lg:m-3 m-2 transition-all hover:scale-105 duration-300">
                  </FcGoogle> 
                  </motion.div>

            </div>

            <div className="inicio-8 flex justify-center items-center">
            
                  <motion.div
                  initial={{ opacity: 0, y: 0, scale: 0 }}
                  animate={animacionIcono_5} 
                  className="h-auto w-auto bg-white rounded-full transition-all">
                  <FcPrivacy className="xl:h-[65px] xl:w-[65px] lg:h-[35px] lg:w-[35px] h-[25px] w-[25px] lg:m-3 m-2 transition-all hover:scale-105 duration-300">
                  </FcPrivacy> 
                  </motion.div>

            </div>

            <div className="inicio-9 flex justify-center items-center">
            
                  <motion.div 
                  initial={{ opacity: 0, y: 0, scale: 0 }}
                  animate={animacionIcono_3}
                  className="h-auto w-auto bg-white rounded-full transition-all">
                  <FcFinePrint className="xl:h-[90px] xl:w-[90px] lg:h-[55px] lg:w-[55px] h-[25px] w-[25px] lg:m-4 m-2 transition-all hover:scale-105 duration-300">
                  </FcFinePrint> 
                  </motion.div>

            </div>

            <div className="inicio-10 flex justify-center items-center">
            
                  <motion.div 
                  initial={{ opacity: 0, y: 0, scale: 0 }}
                  animate={animacionIcono_4}
                  className="h-auto w-auto bg-white rounded-full transition-all">
                  <FcAssistant className="xl:h-[90px] xl:w-[90px] lg:h-[50px] lg:w-[50px] h-[25px] w-[25px] lg:m-4 m-2 transition-all hover:scale-105 duration-300">
                  </FcAssistant> 
                  </motion.div>

            </div>

           </div>

    </div>

  </div>
  )
}

export default Inicio