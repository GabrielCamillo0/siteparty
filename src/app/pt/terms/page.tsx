import Link from "next/link";
import { getContent } from "@/content/site";

export default function TermsPagePt() {
  const content = getContent("pt").terms;

  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <Link href="/pt" className="text-sm font-semibold text-vibrant-pink hover:underline">
        ← Voltar ao Início
      </Link>
      <h1 className="mt-6 font-heading text-4xl font-semibold text-navy">{content.title}</h1>
      <p className="mt-2 text-sm text-navy/60">{content.lastUpdated}</p>
      <div className="mt-10 space-y-8">
        {content.sections.map((section) => (
          <section key={section.title}>
            <h2 className="text-xl font-semibold text-navy">{section.title}</h2>
            <p className="mt-3 leading-relaxed text-navy/80">{section.body}</p>
          </section>
        ))}
      </div>
    </main>
  );
}
