import { Dock } from "./components/Dock.tsx";
import { Header } from "./components/Header.tsx";
import { QuoteProvider } from "./quote.tsx";
import { Builder } from "./sections/Builder.tsx";
import { Contact, Faq, Footer } from "./sections/Contact.tsx";
import { Diagnostics } from "./sections/Diagnostics.tsx";
import { Electrical } from "./sections/Electrical.tsx";
import { Hero, Stats } from "./sections/Hero.tsx";
import { Audiences, Areas, Partners, Process, Reviews } from "./sections/Proof.tsx";
import { Services } from "./sections/Services.tsx";
import { Products } from "./sections/Products.tsx";

export function App() {
  return (
    <QuoteProvider>
      <a className="skip" href="#content">
        Skip to content
      </a>
      <div className="viewport-frame" aria-hidden="true">
        <span className="corners" />
      </div>
      <Header />
      <main id="content" tabIndex={-1}>
        <Hero />
        <Stats />
        <Services />
        <Products />
        <Builder />
        <Diagnostics />
        <Electrical />
        <Audiences />
        <Process />
        <Partners />
        <Reviews />
        <Areas />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <Dock />
    </QuoteProvider>
  );
}
