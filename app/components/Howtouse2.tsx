"use client"
import React, { useEffect, Suspense} from 'react'

import {  MdPublish } from "react-icons/md";

const LazyYouTubePlayer = React.lazy(() => import('./youtubeplayer/YouTubePlayer'));
import { motion, useAnimation } from 'framer-motion';

import { useInView } from 'react-intersection-observer';
import { IoLogoYoutube } from 'react-icons/io5';
import { LuFileEdit } from 'react-icons/lu';

type Props = {}

function Howtouse2({}: Props) {

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


  const videoId = 'kh_ZhpKZSIg';


  return (
    <div className="w-full h-full bg-gradient-to-r from-[#2B60DA]/20 via-white to-[#2B60DA]/20">
        
        <div className="w-full h-full lg:p-24 md:p-10 p-4">
               
               <div className="contenedor-howtouse2">

                     <div className="howtouse2-1 space-y-4 flex flex-col text-center lg:text-start">
                         
                         <motion.h1
                           ref={ref}
                           initial={{ opacity: 0, scale: 0 }}
                           animate={controls}
                           transition={{ duration: 0.7 , ease: [0.6, 0.05, 0.5, 0.95]}} 
                           className="font-signika xl:text-5xl lg:text-2xl md:text-2xl text-2xl">
                            Conoce como utilizar SiteWizard Sanity para gestionar en su totalidad tu sitio web
                        </motion.h1>

                        <motion.h1
                         ref={ref}
                         initial={{ opacity: 0 }}
                         animate={controls2}
                         transition={{ duration: 0.7 , ease: [0.6, 0.05, 0.5, 0.95]}} 
                         className="font-afacad xl:text-xl lg:text-md md:tet-md text-md">
                            Desde SiteWizard Sanity podrás ver, editar y publicar el contenido de tu sitio web creado por <a href='https://xplendev.com/'>XplenDev </a> <br></br>
                            Conoce en el siguiente vidéo como utilizar SiteWizard Sanity Content Studio
                            
                        </motion.h1>

                     </div>

                     <div className="howtouse2-2 flex lg:justify-start justify-center items-center lg:items-start space-x-4">

                      <motion.div
                      ref={ref}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={controls}
                      transition={{ duration: 0.7 , ease: [0.6, 0.05, 0.5, 0.95]}} 
                      className="xl:w-[70px] xl:h-[70px] w-[50px] h-[50px] flex items-center rounded-full justify-center bg-[#2B60DA]">

                        <IoLogoYoutube className="xl:h-[40px] xl:w-[40px] w-[25px] h-[25px] text-[white] hover:scale-95 hover:scale-y-100 duration-300">

                        </IoLogoYoutube>


                      </motion.div>

                       <motion.div
                       ref={ref}
                       initial={{ opacity: 0, scale: 0 }}
                       animate={controls}
                       transition={{ duration: 0.7 , ease: [0.6, 0.05, 0.5, 0.95]}} 
                        className="xl:w-[70px] xl:h-[70px] w-[50px] h-[50px] flex items-center rounded-full justify-center bg-[#FFC107]">

                        <LuFileEdit className="xl:h-[40px] xl:w-[40px] w-[25px] h-[25px] text-[white] hover:scale-95 hover:scale-y-100 duration-300">

                        </LuFileEdit>


                      </motion.div>

                         <motion.div
                          ref={ref}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={controls}
                          transition={{ duration: 0.7 , ease: [0.6, 0.05, 0.5, 0.95]}} 
                          className="xl:w-[70px] xl:h-[70px] w-[50px] h-[50px] flex items-center rounded-full justify-center bg-[#00B6DB]">

                           <MdPublish className="xl:h-[40px] xl:w-[40px] w-[25px] h-[25px] text-[white] hover:scale-95 hover:scale-y-100 duration-300">

                           </MdPublish>


                      </motion.div>

                     </div>

                     <div className="howtouse2-3">
                         
                     <Suspense fallback={<div>Loading...</div>}>
                                <div className="w-full h-full">
                                  <LazyYouTubePlayer videoId={videoId}></LazyYouTubePlayer>
                                </div>
                     </Suspense>

                     </div>

               </div>
        </div>
    </div>
  )
}

export default Howtouse2