import type { SiteContent } from "@/content/site";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FadeIn } from "@/components/ui/FadeIn";

type FAQProps = {
  content: SiteContent;
};

export function FAQ({ content }: FAQProps) {
  return (
    <section id="faq" className="scroll-mt-24 bg-white/50 py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center">
          <h2 className="text-3xl font-semibold text-navy md:text-4xl">
            {content.faq.title}
          </h2>
        </FadeIn>

        <FadeIn className="mt-10">
          <Accordion type="single" collapsible className="w-full">
            {content.faq.items.map((item, index) => (
              <AccordionItem key={item.question} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-base font-semibold text-navy hover:text-vibrant-pink">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-navy/80">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </div>
    </section>
  );
}
