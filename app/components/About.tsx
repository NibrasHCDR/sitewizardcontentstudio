"use client"
import React, { useEffect } from 'react'

import styles from '../buttons.module.css'

import { AiOutlineAntDesign } from "react-icons/ai";
import Image from 'next/image'
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type Props = {}

function About({}: Props) {

  const controls = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const controls4 = useAnimation();

  const { ref: ref1, inView: inView1 } = useInView();
  const { ref: ref2, inView: inView2 } = useInView();
  const { ref: ref3, inView: inView3 } = useInView();
  const { ref: ref4, inView: inView4 } = useInView();

// UsseEfect que se acciona al momento de que la pantalla este en view, altera los 3 divs que contienen Iconos
  useEffect(() => {
    if (inView1) {
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
  }, [controls, inView1]);

  useEffect(() => {
    if (inView2) {
      controls2.start({
        opacity: 1,
      });
    }else {
      controls2.start({
        opacity: 0,
      });
    }
  }, [controls2, inView2]);

  useEffect(() => {
    if (inView3) {
      controls3.start({
        opacity: 1,
      });
    }else {
      controls3.start({
        opacity: 0,
      });
    }
  }, [controls3, inView3]);

  useEffect(() => {
    if (inView4) {
      controls4.start({
        opacity: 1,
      });
    }else {
      controls4.start({
        opacity: 0,
      });
    }
  }, [controls4, inView4]);

  
  return (
    <div className="w-full h-full bg-gradient-to-r from-[#2B60DA]/20 via-white to-[#2B60DA]/20">

                <div className="w-full h-full lg:p-24 md:p-10 p-4">

                  <div className="contenedor-about w-full h-full">

                      <motion.div
                        ref={ref2}
                        initial={{ opacity: 0 }}
                        animate={controls2}
                        transition={{ duration: 0.7 , ease: [0.6, 0.05, 0.5, 0.95]}}
                       className="about-1 bg-[#2757C6] mx-1 rounded-md hover:scale-105 transition-all duration-300 no-select">
                      
                         <div className="flex flex-col p-8 xl:pt-[70px] lg:pt-[80px] space-y-4">

                            <div className="flex justify-between items-center">
                              
                                <h1 className="xl:text-5xl font-signika lg:text-2xl md:text-2xl text-2xl text-white">
                                  Acerca de
                                </h1>

                            </div>

                            <div className="flex flex-col xl:pt-11 lg:pt-11">

                                <h1 className="text-white xl:text-lg lg:text-lg text-base">
                                Con Xplendev & SiteWizard,creamos tu sitio web y garantizamos calidad al encargarnos de su implementación y administración integral.
                                </h1>

                            </div>

                         </div>
                          
                           
                      </motion.div>

                      <motion.div 
                        ref={ref3}
                        initial={{ opacity: 0 }}
                        animate={controls3}
                        transition={{ duration: 0.7 , ease: [0.6, 0.05, 0.5, 0.95]}}
                        className="about-2 bg-white mx-1 border-2 border-[#2757C6] rounded-xl hover:scale-105 transition-all duration-300 no-select">

                      <div className="flex flex-col p-8 space-y-4">

                            <div className="flex justify-between items-center">
                              
                                <h1 className="xl:text-5xl font-signika lg:text-2xl md:text-2xl text-2xl text-[#2757C6]">
                                  Sitio Web
                                </h1>

                                <Image className="w-[130px] h-[120px]" src={'https://i.postimg.cc/wTP39zZW/site-gif-1.gif'} width={450} height={450} alt={''}>
                                
                                </Image>

                            </div>

                            <div className="flex flex-col">

                                <h1 className="text-black font-afacad xl:text-lg lg:text-lg text-base">
                                 Con Xplendev, creamos una presencia web que refleja la esencia de tu marca. Nos comprometemos a desarrollar un diseño profesional y sofisticado que proyecte tu estatus y prestigio. Obtén una presencia en línea que eleve el profesionalismo de tu marca con nuestro enfoque en diseño. Ahora, ¿cómo lo administras? ... ⟶
                                </h1>

                            </div>

                         </div>
                        
                      
                      </motion.div>



                      <motion.div 
                      ref={ref4}
                      initial={{ opacity: 0 }}
                      animate={controls4}
                      transition={{ duration: 0.7 , ease: [0.6, 0.05, 0.5, 0.95]}}
                      className="about-3 bg-white border-2 border-[#2757C6] rounded-xl mx-1 hover:scale-105 transition-all duration-300 no-select">


                      <div className="flex flex-col p-8 space-y-4">

                         <div className="flex justify-between items-center">
                              
                              <h1 className="xl:text-5xl font-signika lg:text-2xl md:text-2xl text-2xl text-[#2757C6]">
                                CMS
                              </h1>

                              <Image className="w-[180px] h-[120px] text-white rounded-full " src={'https://i.postimg.cc/yYtr4VC6/cms-gif-1.gif'} width={450} height={450} alt={''}>
                                
                              </Image>

                          </div>

                          <div className="flex flex-col">

                              <h1 className="text-black font-afacad xl:text-lg lg:text-lg text-base">
                              ... Integramos SiteWizard Sanity Content Studio en tu sitio. Este CMS te ofrece una gestión completa y sencilla del contenido de tu sitio web. Con facilidad, podrás controlar desde textos hasta imágenes y mucho más. Experimenta la comodidad de una solución que resuelve eficazmente los desafíos de administración.
                              </h1>

                          </div>
                          
                      </div>

                    </motion.div>




                      <motion.div
                      ref={ref1}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={controls}
                      transition={{ duration: 0.7 , ease: [0.6, 0.05, 0.5, 0.95]}} 
                      className="about-4 pt-4">

                        <div className="flex justify-center items-center">
                        <Image className="w-[140px] h-[80px] text-white rounded-full " src={'https://i.postimg.cc/gkFtQnvR/arrow-gif.gif'} width={1080} height={1080} alt={''}>
                          </Image>
                        </div>

                    </motion.div>
  
                    <div className="about-5 justify-center items-center text-center flex pt-8">
                    <div className="h-auto w-auto">
                        <h1 className="xl:text-5xl font-signika lg:text-2xl md:text-2xl text-2xl"> 
                          Así funciona nuestro servicio de sitios web
                        </h1>
                      </div>
                    </div>

                    <div className="about-6 justify-center items-center text-center flex">
                      
                      <div className="h-auto w-auto">
                        <h1 className="font-rubik xl:text-lg lg:text-lg md:text-base text-base pb-2 text-[#2757C6]"> 
                          Si necesitas más información, visita nuestra web de diseño
                        </h1>
                      </div>


                    </div>

                    <div className="about-7 flex justify-center items-center">
                    <div className="h-auto w-auto">
                      <Link href={'https://xplendev.com'}>
                    <button title='Ir a Xplendev.com' className={styles.button17} role="button">
                        Ir a Xplendev.com
                     </button>
                     </Link>
                  </div>
                    </div>



                  </div>

                </div>
    </div>
  )
}

export default About