"use client"
import React from 'react'

import styles from '../buttons.module.css'

import { AiOutlineAntDesign } from "react-icons/ai";
import Image from 'next/image'

type Props = {}

function About({}: Props) {
  return (
    <div className="w-full h-screen bg-gradient-to-r from-[#2B60DA]/20 via-white to-[#2B60DA]/20">

                <div className="w-full h-full lg:p-24 md:p-10 p-4">

                  <div className="contenedor-about w-full h-full">

                      <div className="about-1 bg-[#2757C6] mx-1 rounded-md">
                      
                         <div className="flex flex-col p-8 xl:pt-[70px] lg:pt-[80px] space-y-4">

                            <div className="flex justify-between items-center">
                              
                                <h1 className="xl:text-5xl font-signika lg:text-2xl md:text-2xl text-2xl text-white">
                                  Acerca de
                                </h1>

                            </div>

                            <div className="flex flex-col xl:pt-11 lg:pt-11">

                                <h1 className="text-white font-garamond xl:text-lg lg:text-base md:text-sm text-sm">
                                  Un servicio de paginación web debe resolver la incognita de: ¿Y ahora qué?. Desde la implementación completa del sitio hasta la administración, lo logramos con Xplendev & SiteWizard! ⟶
                                </h1>

                            </div>

                         </div>
                          
                           
                      </div>

                      <div className="about-2 bg-white mx-1 border-2 border-[#2757C6] rounded-xl">

                      <div className="flex flex-col p-8 space-y-4">

                            <div className="flex justify-between items-center">
                              
                                <h1 className="xl:text-5xl font-signika lg:text-2xl md:text-2xl text-2xl text-[#2757C6]">
                                  Sitio Web
                                </h1>

                                <Image className="w-[130px] h-[120px]" src={'https://i.postimg.cc/wTP39zZW/site-gif-1.gif'} width={450} height={450} alt={''}>
                                
                                </Image>

                            </div>

                            <div className="flex flex-col">

                                <h1 className="text-black font-garamond xl:text-lg lg:text-base md:text-sm text-sm">
                                  Con Xplendev creamos tu sitio Web desde 0.
                                  Nos encargamos de diseñar junto a tí el diseño que más se adapte a tus necesidades, logrando diseños complentamente responsivos y animados!. Ahora , ¿Como lo administras? ... ⟶
                                </h1>

                            </div>

                         </div>
                        
                      
                      </div>



                      <div className="about-3 bg-white border-2 border-[#2757C6] rounded-xl mx-1">


                      <div className="flex flex-col p-8 space-y-4">

                         <div className="flex justify-between items-center">
                              
                              <h1 className="xl:text-5xl font-signika lg:text-2xl md:text-2xl text-2xl text-[#2757C6]">
                                CMS
                              </h1>

                              <Image className="w-[180px] h-[120px] text-white rounded-full " src={'https://i.postimg.cc/yYtr4VC6/cms-gif-1.gif'} width={450} height={450} alt={''}>
                                
                              </Image>

                          </div>

                          <div className="flex flex-col">

                              <h1 className="text-black font-garamond xl:text-lg lg:text-base md:text-sm text-sm">
                                ...Cuando la codificación del diseño del producto está lista, implementamos SiteWizard Sanity Content Studio, este CMS permite administrar el contenido completo de tu sitio web desde textos y botónes a imágenes
                              </h1>

                          </div>
                          
                      </div>

                    </div>




                      <div className="about-4 ">

                    </div>
  
                    <div className="about-5 justify-center items-center flex pt-8">
                    <div className="h-auto w-auto">
                        <h1 className="xl:text-5xl font-signika lg:text-2xl md:text-2xl text-2xl"> 
                          Así funciona nuestro servicio de sitios web
                        </h1>
                      </div>
                    </div>

                    <div className="about-6 justify-center items-center flex">
                      
                      <div className="h-auto w-auto">
                        <h1 className="font-rubik xl:text-lg lg:text-lg md:text-base text-base pb-2 text-[#2757C6]"> 
                          Si necesitas más información, visita nuestra web de diseño
                        </h1>
                      </div>


                    </div>

                    <div className="about-7 flex justify-center items-center">
                    <div className="h-auto w-auto">
                    <button className={styles.button17} role="button">
                        Ir a Xplendev.com
                     </button>
                  </div>
                    </div>



                  </div>

                </div>
    </div>
  )
}

export default About