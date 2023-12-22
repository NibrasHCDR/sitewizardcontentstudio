
import Styles from './contactform.module.css'

import styles from '../buttons.module.css'

export default function Home() {
  return (
    
    <>
    
    <div className="w-full h-screen bg-gradient-to-r from-[#2B60DA]/20 via-white to-[#2B60DA]/20">
    <div className="w-full h-full lg:p-24 md:p-10 p-4 mt-20 md:mt-12 lg:mt-0 lg:space-y-12 space-y-8">


      <div className={`w-full h-auto flex flex-col ${Styles['contenedor-contactform']}` }>

        <div className={`flex flex-col space-y-2 w-full h-full xl:px-28 lg:px-24 md:px-10 px-4 ${Styles['contactform-1']}` }>

          <div className="w-full h-auto flex justify-center">
            <h1 className="text-[#2757C6] xl:text-5xl font-signika lg:text-2xl md:text-2xl text-2xl">
             Contacto
           </h1>
          </div>

          <div className="w-full h-auto flex space-x-2 justify-center">
          <input placeholder="Nombre" type='text' name="nombre" className="border-2 rounded-md xl:text-3xl lg:text-2xl md:text-xl text-lg text-black font-darkergrotesque px-2 lg:py-6 border-[#2757C6] w-full h-[34px] placeholder:text-[#2757C6]" required>

          </input>

          <input placeholder="Apellidos" type='text' name="apellidos" className="border-2 rounded-md xl:text-3xl lg:text-2xl md:text-xl text-lg text-black font-darkergrotesque px-2 lg:py-6 border-[#2757C6] w-full h-[34px] placeholder:text-[#2757C6]" required>
             
             </input>
          </div>

          <div className="w-full h-auto flex space-x-2 justify-center">
          <input placeholder="Telefono o E-mail" type='text' name="telefono" className="border-2 rounded-md xl:text-3xl lg:text-2xl md:text-xl text-lg text-black font-darkergrotesque px-2 lg:py-6 border-[#2757C6] w-full h-[34px] placeholder:text-[#2757C6]" required>

          </input>

          <input placeholder="Asunto" type='text' name="asunto" className="border-2 rounded-md xl:text-3xl lg:text-2xl md:text-xl text-lg text-black font-darkergrotesque px-2 lg:py-6 border-[#2757C6] w-full h-[34px] placeholder:text-[#2757C6]" required>
             
          </input>
          </div>

          <div className="w-full h-auto flex flex-col lg:space-y-4 space-y-2 justify-center">
            <textarea placeholder='Tu mensaje' name="mendaje" id="" className="border-2 rounded-md xl:text-3xl lg:text-2xl md:text-xl text-lg text-black font-darkergrotesque px-2 lg:py-1 border-[#2757C6] placeholder:text-[#2757C6] w-full lg:h-[290px] h-[190px] min-h-[190px] max-h-[290px]" required>

            </textarea>

               <div className="w-auto flex justify-center">
               <button type='submit' className={` ${styles.button17}` }>
             
              Enviar Mensaje
           </button>
               </div>


          </div>




        </div>
      </div>

    </div>

    </div>

    </>
  )
}
