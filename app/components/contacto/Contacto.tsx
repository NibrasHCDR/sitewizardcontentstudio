"use client"
import React from 'react'

import Image from 'next/image'

import Styles from './contacto.module.css'
import styles from '../../buttons.module.css'

type Props = {}

function Contacto({}: Props) {
  return (
    <div className="w-full h-full bg-gradient-to-r from-[#2B60DA]/20 via-white to-[#2B60DA]/20">

        <div className="w-full h-full ">

            <div className={`w-full h-full  ${Styles['contenedor-contacto']}` }>

              <div className={`lg:px-24 md:pl-10 pl-4 ${Styles['contacto-1']}` }>
              
                  <div className="w-full h-full flex flex-col space-y-2">
                   
                  <h1 className="xl:text-5xl font-signika lg:text-2xl md:text-2xl text-2xl text-white">
                            No lo dudes y eleva tu marca a un Nivel Profesional. Experimenta la comodidad de gestionar tu sitio y disfruta del control total!
                        </h1>

                     <div className="w-auto h-auto">
                     <button className={styles.button17} role="button">
                        Obtén SiteWizard Sanity CMS
                     </button>
                     </div>


                  </div>
                  
              </div>

              <div className={`lg:pl-24 md:pl-10 pl-4 ${Styles['contacto-2']}` }>

              <div className="w-full h-full">
                   
 
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
              
                  <div className="h-[110px] w-[110px] flex items-center justify-center rounded-full bg-[#2B60DA]">

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

                    <Image 
                    className="w-full h-full rounded-2xl"
                    height={2050}
                    width={2050}
                    src={'https://i.postimg.cc/zDcNMYrG/polaromagnet-PIrou-Q-A8j0-unsplash.jpg'} 
                    alt={'design'}>

                    </Image>

                  </div>
              </div>

              <div className={`lg:pb-24 md:pb-10 pb-4 ${Styles['contacto-7']}` }>
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
                    alt={'deploy'}>

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
                    alt={'deploy'}>

                    </Image>

                  </div>
              </div>

              <div className={`flex bg-[#2B60DA] rounded-r-full ${Styles['contacto-10']}` }>

              </div>

                 

            </div>

        </div>
        

    </div>
  )
}

export default Contacto