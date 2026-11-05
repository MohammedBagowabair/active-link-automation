import { Areas } from "@/components/Areas"
import { Contact } from "@/components/Contact"
import { Dock } from "@/components/Dock"
import { Electrical } from "@/components/Electrical"
import { Faq } from "@/components/Faq"
import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { Industries } from "@/components/Industries"
import { Marquee } from "@/components/Marquee"
import { Partners } from "@/components/Partners"
import { Process } from "@/components/Process"
import { QuoteProvider } from "@/components/QuoteContext"
import { QuoteSheet } from "@/components/QuoteSheet"
import { Repair } from "@/components/Repair"
import { Reviews } from "@/components/Reviews"
import { Selector } from "@/components/Selector"
import { Services } from "@/components/Services"
import { Why } from "@/components/Why"

export default function App() {
  return (
    <QuoteProvider>
      <div id="top">
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header />
        <main id="main">
          <Hero />
          <Marquee />
          <Why />
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
        <Dock />
        <QuoteSheet />
      </div>
    </QuoteProvider>
  )
}
