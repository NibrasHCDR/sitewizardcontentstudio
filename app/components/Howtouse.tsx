import React from 'react'

type Props = {}

function Howtouse({}: Props) {
  return (
    <div className="w-full h-full bg-white">
        
        <div className="w-full h-full lg:p-24 md:p-10 p-4">
               
               <div className="contenedor-howtouse">

                     <div className="howtouse-1">
                         
                         <h1 className="font-josefin xl:text-4xl lg:text-3xl md:text-2xl text-xl">
                            Know how you can update ALL THE CONTENT of your site
                            in ALL SITES arround the world
                        </h1>

                     </div>

                     <div className="howtouse-2 bg-red-400">
                         
                         <h1 className="">
                            Compar2
                        </h1>

                     </div>

                     <div className="howtouse-3 bg-yellow-400">
                         
                         <h1 className="">
                            Compare2
                        </h1>

                     </div>

               </div>
        </div>
    </div>
  )
}

export default Howtouse