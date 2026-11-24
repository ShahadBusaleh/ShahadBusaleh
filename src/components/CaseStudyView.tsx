"use client";

import Link from "next/link";
import { getCaseStudy } from "@/data/caseStudies";
import { useLanguage } from "./LanguageProvider";
import { ui } from "@/lib/i18n";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-brand-teal/10 py-8">
      <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
        {title}
      </h2>
      {children}
    </section>
  );
}

export function CaseStudyView({ slug }: { slug: string }) {
  const { locale } = useLanguage();
  const t = ui[locale];
  const cs = getCaseStudy(slug);
  if (!cs) return null;
  const c = cs[locale];

  return (
    <article>
      <header className="bg-brand-teal px-6 pb-14 pt-32">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/#projects"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-brand-cream/85 hover:text-brand-cream"
          >
            <span aria-hidden className="rtl:rotate-180">←</span>
            {t.backToWork}
          </Link>
          <p className="mb-4">
            <span className="rounded-full bg-brand-cream px-3 py-1 text-xs font-semibold text-brand-teal-dark">
              {cs.badge[locale]}
            </span>
          </p>
          <h1 className="mb-3 text-3xl font-bold leading-tight text-brand-cream sm:text-4xl">
            {c.title}
          </h1>
          <p className="text-sm text-brand-cream/85">{c.context}</p>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-6 py-6">
        <Section title={t.csProblem}>
          <p className="text-lg leading-relaxed text-zinc-700">{c.problem}</p>
        </Section>

        <Section title={t.csAudience}>
          <p className="leading-relaxed text-zinc-700">{c.audience}</p>
        </Section>

        <Section title={t.csRole}>
          <p className="leading-relaxed text-zinc-700">{c.role}</p>
        </Section>

        <Section title={t.csDecisions}>
          <ol className="space-y-6">
            {c.decisions.map((d, i) => (
              <li key={d.title} className="rounded-2xl border border-brand-teal/15 bg-white p-6 shadow-sm">
                <p className="mb-2 flex items-baseline gap-3 text-lg font-bold text-brand-teal-dark">
                  <span className="text-brand-teal">{i + 1}.</span>
                  {d.title}
                </p>
                <p className="leading-relaxed text-zinc-700">{d.body}</p>
                {d.tradeoff && (
                  <p className="mt-3 rounded-lg bg-brand-cream/40 px-4 py-3 text-sm text-brand-teal-dark">
                    <span className="font-semibold">{t.csTradeoff}: </span>
                    {d.tradeoff}
                  </p>
                )}
              </li>
            ))}
          </ol>
        </Section>

        <Section title={t.csOutcome}>
          <ul className="space-y-3">
            {c.outcome.map((o) => (
              <li
                key={o}
                className="flex gap-3 leading-relaxed text-zinc-700 before:mt-2.5 before:h-1.5 before:w-1.5 before:shrink-0 before:rounded-full before:bg-brand-teal"
              >
                {o}
              </li>
            ))}
          </ul>
        </Section>

        <Section title={t.csNext}>
          <p className="leading-relaxed text-zinc-700">{c.next}</p>
        </Section>

        <Section title={t.csStack}>
          <div className="flex flex-wrap gap-2">
            {cs.stack.map((s) => (
              <span key={s} className="rounded-md bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-700">
                {s}
              </span>
            ))}
          </div>
        </Section>

        <div className="flex flex-wrap items-center gap-4 border-t border-brand-teal/10 py-10">
          {cs.links?.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-brand-teal px-6 py-3 text-sm font-semibold text-brand-cream hover:bg-brand-teal-dark"
            >
              {locale === "en" ? l.label : l.labelAr}
            </a>
          ))}
          <Link
            href="/#contact"
            className="rounded-full border border-brand-teal/30 px-6 py-3 text-sm font-semibold text-brand-teal hover:bg-brand-teal/5"
          >
            {t.getInTouch}
          </Link>
          <Link
            href="/#projects"
            className="text-sm font-semibold text-brand-teal hover:text-brand-teal-dark"
          >
            {t.backToWork}
          </Link>
        </div>
      </div>
    </article>
  );
}
