"use client"
import React, { useEffect } from 'react'
import Swuip from '../components/Swuip'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type Props = {}

function Aboutus({}: Props) {

  const controls = useAnimation();
  const controls2 = useAnimation();

  const { ref: ref1, inView: inView1 } = useInView();
  const { ref: ref2, inView: inView2 } = useInView();

// UsseEfect que se acciona al momento de que la pantalla este en view, altera los 3 divs que contienen Iconos
  useEffect(() => {
    if (inView1) {
      controls.start({
        x: 0
      });
    }else {
      controls.start({
        x: -300,
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
  
  return (
    <div className="bg-gradient-to-r from-[#2B60DA]/20 via-white to-[#2B60DA]/20 w-full h-full">

        <div className="w-full h-full">

        <div className="contenedor-aboutus w-full h-full no-select">

            <div className="aboutus-1 bg-[#2757C6] lg:rounded-br-full lg:rounded-tr-full">

            </div>

            <div className="aboutus-2 bg-[#2757C6] lg:rounded-l-full">
       
            </div>

            <motion.div 
            ref={ref1}
            initial={{ x: -300 }}
            animate={controls}
            transition={{ duration: 0.7 , ease: [0.6, 0.05, 0.5, 0.95]}}
            className="aboutus-3 w-full h-full flex justify-start items-center p-8 lg:p-0 xl:p-0 no-select">
            
                <Swuip ></Swuip>
            </motion.div>

            <motion.div
             ref={ref2}
             initial={{ opacity: 1 }}
             animate={controls2}
             transition={{ duration: 0.7 , ease: [0.6, 0.05, 0.5, 0.95]}}
             className="aboutus-4">
            
            
                 <div className="w-full h-full lg:p-24 p-4 flex flex-col justify-center lg:items-start lg:text-start text-center">

                    <h1 className="font-rubik xl:text-lg lg:text-lg md:text-base text-base pb-2 text-white">
                     Xplendev & SiteWizard
                    </h1>

                    <h1 className="font-signika xl:text-5xl lg:text-2xl md:text-2xl text-2xl pb-4 text-white">
                    Conoce más acerca de nosotros <br />
                    y descubre nuestro múndo digital
                    </h1> 

                    <h1 className="font-rubik xl:text-lg lg:text-lg md:text-base text-base pb-6 text-white">
                    Conoce como combinamos diseño y funcionaidad
                    </h1>

                    <p className="font-afacad xl:text-xl lg:text-xl text-base text-white">
                      Acá ya tenemos un parrafo mas lárgo pero que <br />
                      de igual manera debe tener saltos de linea y debe tener una cantidad <br />
                      mas considerable debido a que necesitamos crear un contenido que esté <br />
                      acorde a lo que nuestra aplicación web puede mostrar
                    </p>

                
                 </div>
            </motion.div>

        </div>

        </div>
        
    </div>
  )
}

export default Aboutus