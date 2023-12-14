import Image from 'next/image'
import Inicio from './components/Inicio'
import Header from './components/Header'
import Howtouse from './components/Howtouse'
import Howtouse2 from './components/Howtouse2'

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

    <section id="howtouse2">      
      <Howtouse2>

      </Howtouse2>
    </section>

    </>
  )
}
