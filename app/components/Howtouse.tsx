import React from 'react'

import { IoLogoYoutube } from "react-icons/io5";
import { LuFileEdit } from "react-icons/lu";
import { MdPublish } from "react-icons/md";

import YouTubePlayer from './youtubeplayer/YouTubePlayer';

type Props = {}

function Howtouse({}: Props) {


  const videoId = '3Qu_IOquky4';


  return (
    <div className="w-full h-full bg-gradient-to-r from-[#2B60DA]/20 via-white to-[#2B60DA]/20">
        
        <div className="w-full h-full lg:p-24 md:p-10 p-4">
               
               <div className="contenedor-howtouse">

                     <div className="howtouse-1 space-y-4 flex flex-col text-center lg:text-start">
                         
                         <h1 className="font-josefin xl:text-5xl lg:text-2xl md:text-2xl text-2xl">
                            Conoce como utilizar SiteWizard Sanity para gestionar en su totalidad tu sitio web
                        </h1>

                        <h1 className="font-afacad xl:text-xl lg:text-md md:tet-md text-md">
                            Desde SiteWizard Sanity podrás ver, editar y publicar el contenido de tu sitio web creado por <a href='https://xplendev.com/'>XplenDev </a> <br></br>
                            Conoce en el siguiente vidéo como utilizar SiteWizard Sanity Content Studio
                            
                        </h1>

                     </div>

                     <div className="howtouse-2 flex lg:justify-start justify-center items-center lg:items-start space-x-4">

                      <div className="xl:w-[140px] xl:h-[140px] w-[80px] h-[80px] flex items-center rounded-full justify-center bg-[#2B60DA]">

                        <IoLogoYoutube className="xl:h-[80px] xl:w-[80px] w-[40px] h-[40px] text-[white] hover:scale-95 hover:scale-y-100 duration-300">

                        </IoLogoYoutube>

                      </div>

                        <div className="xl:w-[140px] xl:h-[140px] w-[80px] h-[80px] flex items-center rounded-full justify-center bg-[#FFC107]">

                            <LuFileEdit className="xl:h-[80px] xl:w-[80px] w-[40px] h-[40px] text-[white] hover:scale-95 hover:scale-y-100 duration-300">

                            </LuFileEdit>

                      </div>

                         <div className="xl:w-[140px] xl:h-[140px] w-[80px] h-[80px] flex items-center rounded-full justify-center bg-[#00B6DB]">

                            <MdPublish className="xl:h-[80px] xl:w-[80px] w-[40px] h-[40px] text-[white] hover:scale-95 hover:scale-y-100 duration-300">

                            </MdPublish>

                      </div>

                     </div>

                     <div className="howtouse-3">
                         
                                <div className="w-full h-full">
                                  <YouTubePlayer videoId={videoId}></YouTubePlayer>
                                </div>

                     </div>

               </div>
        </div>
    </div>
  )
}

export default Howtouse