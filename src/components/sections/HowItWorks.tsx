import type { SiteContent } from "@/content/site";
import { FadeIn } from "@/components/ui/FadeIn";
import { CtaButton } from "@/components/ui/CtaButton";

type HowItWorksProps = {
  content: SiteContent;
};

export function HowItWorks({ content }: HowItWorksProps) {
  return (
    <section id="how-it-works" className="scroll-mt-24 bg-white/50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold text-navy md:text-4xl">
            {content.howItWorks.title}
          </h2>
        </FadeIn>

        <ol className="mt-12 grid gap-8 md:grid-cols-3">
          {content.howItWorks.steps.map((step, index) => (
            <FadeIn key={step.title} delay={index * 0.08}>
              <li className="relative rounded-3xl border border-blush-pink/40 bg-cream p-6 pt-10">
                <span
                  className="absolute -top-4 left-6 flex h-10 w-10 items-center justify-center rounded-full bg-vibrant-pink text-lg font-bold text-white"
                  aria-hidden
                >
                  {index + 1}
                </span>
                <h3 className="text-xl font-semibold text-navy">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-navy/75">
                  {step.description}
                </p>
              </li>
            </FadeIn>
          ))}
        </ol>

        <div className="mt-10 text-center">
          <CtaButton href="#quote">{content.howItWorks.cta}</CtaButton>
        </div>
      </div>
    </section>
  );
}
