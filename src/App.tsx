import { Areas } from "@/components/Areas"
import { Contact } from "@/components/Contact"
import { Electrical } from "@/components/Electrical"
import { Faq } from "@/components/Faq"
import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { Industries } from "@/components/Industries"
import { Marquee } from "@/components/Marquee"
import { Partners } from "@/components/Partners"
import { Process } from "@/components/Process"
import { Repair } from "@/components/Repair"
import { Reviews } from "@/components/Reviews"
import { Selector } from "@/components/Selector"
import { Services } from "@/components/Services"
import { WhatsAppFab } from "@/components/WhatsAppFab"

export default function App() {
  return (
    <div id="top">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Marquee />
        <Services />
        <Selector />
        <Repair />
        <Electrical />
        <Industries />
        <Process />
        <Partners />
        <Reviews />
        <Areas />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  )
}
