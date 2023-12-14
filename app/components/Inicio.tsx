import React from 'react'
import Image from 'next/image'

import styles from '../buttons.module.css'

import { FcMultipleDevices, FcGoogle, FcConferenceCall, FcFinePrint, FcPrivacy, FcAssistant } from "react-icons/fc";


type Props = {}

function Inicio({}: Props) {
  return (
    <div className="w-full h-screen bg-[#2B60DA]">

    <div className="h-screen w-full">

           <div className="contenedor-inicio w-full h-screen lg:pt-24 lg:px-24 md:pt-10 md:px-10 pt-4 px-4">

            <div className="inicio-1 flex justify-center items-center w-full text-center">
             
                 <div className="h-auto w-auto">

                    <h1 className="font-afacad xl:text-5xl lg:text-xl md:text-xl text-lg text-white">
                        Manten el Control de Tu Sitio Web con <br></br>
                        SiteWizard Content Studio CMS
                    </h1>

                 </div>

            </div>

            <div className="inicio-2 flex text-center justify-center">

                <div className="w-auto h-auto xl:space-y-8 lg:space-y-4 space-y-2 flex flex-col">
                    <h1 className="font-afacad xl:text-2xl lg:text-md md:tet-md text-md text-white">
                      Administra cada elemento de tú sitio
                    </h1>

                  <div className="h-auto w-auto">
                    <button className={styles.button17} role="button">
                        Obtén SiteWizard CMS
                     </button>
                  </div>


                </div>

            </div>

            <div className="inicio-4 w-full h-full relative">
                  

                  <div className="w-full h-full absolute">
                      <Image

                       src={'https://i.postimg.cc/1tVnLV6g/device-inicio-sitewizard.png'} 
                       alt={'device'}
                       objectFit='fill'
                       layout='fill'>

                      </Image>
                  </div>
            
                  
            </div>

            <div className="inicio-5 flex justify-center items-center">
            
                  <div className="h-auto w-auto bg-white rounded-full">
                  <FcConferenceCall className="xl:h-[40px] xl:w-[40px] lg:h-[25px] lg:w-[25px] h-[25px] w-[25px] lg:m-2 m-2">
                  </FcConferenceCall> 
                  </div>

            </div>

            <div className="inicio-6 flex justify-center items-center">
            
                  <div className="h-auto w-auto bg-white rounded-full">
                  <FcMultipleDevices className="xl:h-[40px] xl:w-[40px] lg:h-[25px] lg:w-[25px] h-[25px] w-[25px] lg:m-2 m-2">
                  </FcMultipleDevices> 
                  </div>

            </div>
            
            <div className="inicio-7 flex justify-center items-center">
            
                  <div className="h-auto w-auto bg-white rounded-full">
                  <FcGoogle className="xl:h-[55px] xl:w-[55px] lg:h-[35px] lg:w-[35px] h-[25px] w-[25px] lg:m-3 m-2">
                  </FcGoogle> 
                  </div>

            </div>

            <div className="inicio-8 flex justify-center items-center">
            
                  <div className="h-auto w-auto bg-white rounded-full">
                  <FcPrivacy className="xl:h-[55px] xl:w-[55px] lg:h-[35px] lg:w-[35px] h-[25px] w-[25px] lg:m-3 m-2">
                  </FcPrivacy> 
                  </div>

            </div>

            <div className="inicio-9 flex justify-center items-center">
            
                  <div className="h-auto w-auto bg-white rounded-full">
                  <FcFinePrint className="xl:h-[80px] xl:w-[80px] lg:h-[55px] lg:w-[55px] h-[25px] w-[25px] lg:m-4 m-2">
                  </FcFinePrint> 
                  </div>

            </div>

            <div className="inicio-10 flex justify-center items-center">
            
                  <div className="h-auto w-auto bg-white rounded-full">
                  <FcAssistant className="xl:h-[80px] xl:w-[80px] lg:h-[50px] lg:w-[50px] h-[25px] w-[25px] lg:m-4 m-2">
                  </FcAssistant> 
                  </div>

            </div>

           </div>

    </div>

  </div>
  )
}

export default Inicio