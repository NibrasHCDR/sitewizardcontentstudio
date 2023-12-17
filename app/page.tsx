import Image from 'next/image'
import Inicio from './components/Inicio'
import Header from './components/Header'
import Howtouse from './components/Howtouse'
import Howtouse2 from './components/Howtouse2'
import Aboutus from './components/Aboutus'
import About from './components/About'
import Membersias from './components/Membersias'

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

    <section id="about">      
      <About>

      </About>
    </section>

    <section id="aboutus">      
      <Aboutus>

      </Aboutus>
    </section>

    <section id="howtouse">      
      <Howtouse>

      </Howtouse>
    </section>

    <section id="howtouse2">      
      <Howtouse2>

      </Howtouse2>
    </section>

    <section id="membersias">      
      <Membersias>

      </Membersias>
    </section>


    </>
  )
}
