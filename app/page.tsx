import Image from 'next/image'
import Inicio from './components/Inicio'
import Header from './components/Header'
import Howtouse from './components/Howtouse'

export default function Home() {
  return (
    
    <>
    
    <section id="header">
      <Header>

      </Header>
    </section>


    <section id="inicio">      
      <Inicio>

      </Inicio>
    </section>

    <section id="howtouse">      
      <Howtouse>

      </Howtouse>
    </section>

    </>
  )
}
