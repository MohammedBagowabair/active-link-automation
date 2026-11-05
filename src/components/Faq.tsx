import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { faqs } from "@/lib/site"

export function Faq() {
  return (
    <section id="faq" className="border-t border-line" aria-labelledby="faq-title">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-[0.75fr_1.25fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber">10 — FAQ</p>
          <h2 id="faq-title" className="mt-3 font-display text-4xl font-bold tracking-tight text-ivory md:text-5xl">
            Straight answers.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-mist">
            Hours, coverage, payments and the work itself. If the question is about a specific property, WhatsApp
            is the faster route.
          </p>
        </div>
        <Accordion type="single" collapsible defaultValue="where">
          {faqs.map((item) => (
            <AccordionItem key={item.id} value={item.id}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
