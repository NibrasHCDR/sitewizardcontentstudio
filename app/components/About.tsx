"use client"
import React from 'react'

import styles from '../buttons.module.css'

import { AiOutlineAntDesign } from "react-icons/ai";
import Image from 'next/image'
import Link from 'next/link';

type Props = {}

function About({}: Props) {
  return (
    <div className="w-full h-full bg-gradient-to-r from-[#2B60DA]/20 via-white to-[#2B60DA]/20">

                <div className="w-full h-full lg:p-24 md:p-10 p-4">

                  <div className="contenedor-about w-full h-full">

                      <div className="about-1 bg-[#2757C6] mx-1 rounded-md hover:scale-105 transition-all duration-300 no-select">
                      
                         <div className="flex flex-col p-8 xl:pt-[70px] lg:pt-[80px] space-y-4">

                            <div className="flex justify-between items-center">
                              
                                <h1 className="xl:text-5xl font-signika lg:text-2xl md:text-2xl text-2xl text-white">
                                  Acerca de
                                </h1>

                            </div>

                            <div className="flex flex-col xl:pt-11 lg:pt-11">

                                <h1 className="text-white xl:text-lg lg:text-lg text-base">
                                Un servicio de paginación web no solo resuelve la implementación de un sitio, sino que se enfrenta al desafío de mantenerlo vivo. Con Xplendev & SiteWizard, no solo aseguramos la implementación completa de tu sitio web, sino que también te ofrecemos la administración integral del mismo.
                                </h1>

                            </div>

                         </div>
                          
                           
                      </div>

                      <div className="about-2 bg-white mx-1 border-2 border-[#2757C6] rounded-xl hover:scale-105 transition-all duration-300 no-select">

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
                                En Xplendev, creamos tu sitio web desde cero. Nos involucramos contigo en el proceso de diseño para desarrollar una plataforma que se ajuste perfectamente a tus necesidades. Nuestro enfoque se basa en diseños responsivos y dinámicos, adaptados a la perfección para ti. Ahora, ¿cómo lo administras? ... ⟶
                                </h1>

                            </div>

                         </div>
                        
                      
                      </div>



                      <div className="about-3 bg-white border-2 border-[#2757C6] rounded-xl mx-1 hover:scale-105 transition-all duration-300 no-select">


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
                              ... Una vez que el diseño del producto está codificado, implementamos SiteWizard Sanity Content Studio. Este CMS te brinda el control total sobre el contenido de tu sitio web, desde textos y botones hasta imágenes y más. Con esta herramienta, gestionar y actualizar tu contenido es sencillo y completo.
                              </h1>

                          </div>
                          
                      </div>

                    </div>




                      <div className="about-4 pt-4">

                        <div className="flex justify-center items-center">
                        <Image className="w-[140px] h-[80px] text-white rounded-full " src={'https://i.postimg.cc/gkFtQnvR/arrow-gif.gif'} width={1080} height={1080} alt={''}>
                          </Image>
                        </div>

                    </div>
  
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