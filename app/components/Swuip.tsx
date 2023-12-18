"use client"
import Image from 'next/image';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import style from '../styles/swiper.module.css'

// import required modules
import { Pagination } from 'swiper/modules';

export default function Swuip() {
  const initialSlide = 1; // Posición inicial (en base 0)

  return (
    <>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        initialSlide={initialSlide}
        className="lg:w-full lg:h-[420px]"
      >

               <SwiperSlide className={` bg-white rounded-xl max-w-[390px] min-w-[315px] min-h-[378px] no-select cursor-grab ${style.swiperSlide}`}>

                  <div className="w-full h-full p-2 flex flex-col space-y-2">

                    <div className="w-full h-fullspace-y-4">

                    <Image 
                      className="lg:h-[80px] lg:w-[250px] lg:ml-8"
                      height={450}
                      width={450}
                      layout='cover'
                      objectFit='cover'
                      src={'https://i.postimg.cc/QMgnsq3n/sitewizardlogo-black.png'} 
                      alt={'sitewizard'}>
                      </Image> 


                      <h1 className="font-afacad xl:text-lg lg:text-sm text-base px-6 py-3 lg:py-0">
                      SiteWizard Sanity Content Studio surge de la necesidad de simplificar la gestión de sitios web sin requerir conocimientos de programación. SiteWizard facilita la administración del contenido de tu sitio, convirtiendo esta tarea en una experiencia sencilla y efectiva
                        <br />
                      </h1>

                      <div className="flex w-full h-auto justify-evenly px-6 py-1">

                         <Image 
                         className="w-[130px] h-[130px] rounded-full bg-black border-4 border-white"
                         height={450}
                         width={450}
                         layout='cover'
                         objectFit='cover'
                         src={'https://i.postimg.cc/pV4Rh0D9/sitewizardcube.png'} 
                         alt={'Luis'}>

                         </Image>

                         <Image 
                         className="w-[130px] h-[130px] rounded-full bg-black border-4 border-white"
                         height={450}
                         width={450}
                         layout='cover'
                         objectFit='cover'
                         src={'https://i.postimg.cc/X7tfP09V/sanitylogo.png'} 
                         alt={'Luis'}>

                         </Image>


                      </div>

                    </div>
              
  

                  </div>

        </SwiperSlide>
        
        <SwiperSlide className={` bg-white rounded-xl max-w-[390px] min-w-[315px] min-h-[378px] no-select cursor-grab ${style.swiperSlide}`}>

                  <div className="w-full h-full p-2 flex flex-col space-y-2">

                    <div className="w-full h-full">

                    <Image 
                      className="lg:h-[80px] lg:w-[220px]"
                      height={450}
                      width={450}
                      layout='cover'
                      objectFit='cover'
                      src={'https://i.postimg.cc/nVDKF9WY/xplendev-logo-black.png'} 
                      alt={'xplendev'}>
                      </Image> 


                      <h1 className="font-afacad xl:text-lg lg:text-sm text-base px-6 py-3 lg:py-0">
                      Xplendev.com nace con el propósito fundamental de ofrecer servicios profesionales de diseño web. En la actualidad, Xplendev se apoya en SiteWizard Sanity Content Estudio para proporcionar servicios de alta calidad y excelencia en gestión
                      </h1>

                      <div className="flex w-full h-auto space-x-2 space-y-4 px-6 py-1 justify-evenly">

                         <Image 
                         className="w-[130px] h-[130px] rounded-full bg-black border-4 border-white"
                         height={450}
                         width={450}
                         layout='cover'
                         objectFit='cover'
                         src={'https://i.postimg.cc/pdWYxL7H/posible-2.png'} 
                         alt={'Luis'}>

                         </Image>

                         <div className="flex flex-col">
                         <h1 className="font-rubik xl:text-base lg:text-base md:text-sm text-sm">
                          CEO Fundador
                         </h1>

                         <h1 className="text-black">
                          Luis Eduardo Rivera Araya
                         </h1>

                         </div>


                      </div>

                    </div>
              
  

                  </div>

        </SwiperSlide>
      </Swiper>
    </>
  );
}
