import React from 'react'

import { MdAdminPanelSettings } from "react-icons/md";
import { MdDevices } from "react-icons/md";
import { BiCustomize } from "react-icons/bi";

import YouTubePlayer from './youtubeplayer/YouTubePlayer';

type Props = {}

function Howtouse2({}: Props) {


  const videoId = 'TBgZGrJC9DA';


  return (
    <div className="w-full h-full bg-gradient-to-r from-[#2B60DA]/20 via-white to-[#2B60DA]/20">
        
        <div className="w-full h-full lg:p-24 md:p-10 p-4">
               
               <div className="contenedor-howtouse2">

                     <div className="howtouse2-1 space-y-4 flex flex-col text-center lg:text-start">
                         
                         <h1 className="font-signika xl:text-5xl lg:text-2xl md:text-2xl text-2xl">
                            Gestiona el contenido de tu web desde cualquier dispositivo con conexión a internet de manera segura
                        </h1>

                        <h1 className="font-afacad xl:text-xl lg:text-md md:tet-md text-md">
                            Puedes acceder a SiteWizard Sanity desde cualquiér dispositivo con coneción a internet con tus credenciales de manera segura.
                            Pueden ver, editar y publicar contenido hasta 20 miembros con sus respectivas credenciales
                            
                        </h1>

                     </div>

                     <div className="howtouse2-2 flex lg:justify-start justify-center items-center lg:items-start space-x-4">

                      <div className="xl:w-[70px] xl:h-[70px] w-[50px] h-[50px] flex items-center rounded-full justify-center bg-[#2B60DA]">

                        <MdAdminPanelSettings className="xl:h-[40px] xl:w-[40px] w-[25px] h-[25px] text-[white] hover:scale-95 hover:scale-y-100 duration-300">

                        </MdAdminPanelSettings>


                      </div>

                       <div className="xl:w-[70px] xl:h-[70px] w-[50px] h-[50px] flex items-center rounded-full justify-center bg-[#FFC107]">

                        <MdDevices className="xl:h-[40px] xl:w-[40px] w-[25px] h-[25px] text-[white] hover:scale-95 hover:scale-y-100 duration-300">

                        </MdDevices>


                      </div>

                         <div className="xl:w-[70px] xl:h-[70px] w-[50px] h-[50px] flex items-center rounded-full justify-center bg-[#00B6DB]">

                           <BiCustomize className="xl:h-[40px] xl:w-[40px] w-[25px] h-[25px] text-[white] hover:scale-95 hover:scale-y-100 duration-300">

                           </BiCustomize>


                      </div>

                     </div>

                     <div className="howtouse2-3">
                         
                                <div className="w-full h-full">
                                  <YouTubePlayer videoId={videoId}></YouTubePlayer>
                                </div>

                     </div>

               </div>
        </div>
    </div>
  )
}

export default Howtouse2