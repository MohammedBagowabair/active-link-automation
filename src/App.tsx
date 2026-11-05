import { Contact } from "@/components/Contact"
import { Dock } from "@/components/Dock"
import { Faq } from "@/components/Faq"
import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { More } from "@/components/More"
import { QuoteProvider } from "@/components/QuoteContext"
import { QuoteSheet } from "@/components/QuoteSheet"
import { Repair } from "@/components/Repair"
import { Reviews } from "@/components/Reviews"
import { Selector } from "@/components/Selector"
import { Services } from "@/components/Services"

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
          <Selector />
          <Services />
          <Repair />
          <Reviews />
          <More />
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
