"use client";

import { useLanguage } from "./LanguageProvider";
import { ui } from "@/lib/i18n";
import { Reveal } from "./Reveal";

const education = {
  en: "B.S. in Computer Information Systems — Imam Abdulrahman Bin Faisal University (Aug 2020 – Aug 2025)",
  ar: "بكالوريوس نظم المعلومات الحاسوبية — جامعة الإمام عبدالرحمن بن فيصل (أغسطس 2020 – أغسطس 2025)",
};

const training = {
  en: {
    title: "Agentic AI Bootcamp — SDA & WeCloudData",
    period: "Completed — Oct 2026",
    description:
      "Full-time intensive program covering Python & ML fundamentals, GenAI, LLM evaluation, prompt engineering, RAG, LangChain, agent memory and planning, multi-agent orchestration, guardrails and safety, and agent observability. Capstone: Yusor, a bilingual multi-agent HR assistant.",
  },
  ar: {
    title: "معسكر Agentic AI — SDA وWeCloudData",
    period: "مكتمل — أكتوبر 2026",
    description:
      "برنامج تدريبي مكثف بدوام كامل يغطي أساسيات Python والتعلم الآلي، والذكاء الاصطناعي التوليدي، وتقييم النماذج اللغوية، وهندسة الأوامر، وRAG، وLangChain، وذاكرة الوكلاء وتخطيطهم، وتنسيق الوكلاء المتعددين، والضوابط والسلامة، ومراقبة أداء الوكلاء. مشروع التخرج: يُسر، مساعد موارد بشرية متعدد الوكلاء ثنائي اللغة.",
  },
};

const certifications = {
  en: [
    "Product Management Basics — Pendo (Nov 2026)",
    "Agentic AI — Saudi Digital Academy (Oct 2026)",
    "Azure AI Fundamentals — Microsoft",
    "AWS AI Practitioner Learning Path — Completion (SDA)",
    "Software Security Testing — IPA",
    "Data Analysis Essentials — Cisco NetAcad",
    "ChatGPT Prompt Engineering for Developers — DeepLearning.AI",
    "Vibe Coding 101 with Replit — DeepLearning.AI",
  ],
  ar: [
    "Product Management Basics — Pendo (نوفمبر 2026)",
    "Agentic AI — الأكاديمية السعودية الرقمية (أكتوبر 2026)",
    "Azure AI Fundamentals — Microsoft",
    "AWS AI Practitioner Learning Path — شهادة إتمام (SDA)",
    "Software Security Testing — IPA",
    "Data Analysis Essentials — Cisco NetAcad",
    "ChatGPT Prompt Engineering for Developers — DeepLearning.AI",
    "Vibe Coding 101 with Replit — DeepLearning.AI",
  ],
};

const community = {
  en: "AI Committee Member, Saudi Developers Community (SDC) — co-presented the 'ويب بلا حدود' AI web-building workshop (Nov 2026).",
  ar: "عضوة لجنة الذكاء الاصطناعي، المجتمع السعودي للمطورين (SDC) — شاركتُ في تقديم ورشة «ويب بلا حدود» لبناء مواقع الويب بالذكاء الاصطناعي (نوفمبر 2026).",
};

export function About() {
  const { locale } = useLanguage();
  const t = ui[locale];
  const trainingData = training[locale];

  return (
    <section id="about" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-brand-teal-dark sm:text-4xl">
            {t.about}
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-brand-teal" />
        </Reveal>

        <div className="mx-auto max-w-2xl space-y-8">
          <Reveal className="space-y-8">
            <div>
              <h3 className="mb-4 text-xl font-bold text-brand-teal-dark">
                {t.education}
              </h3>
              <p className="text-sm leading-relaxed text-zinc-600">
                {locale === "en" ? education.en : education.ar}
              </p>
            </div>

            <div>
              <h3 className="mb-4 text-xl font-bold text-brand-teal-dark">
                {t.training}
              </h3>
              <div className="border-s-2 border-brand-teal ps-5">
                <p className="font-semibold text-brand-teal-dark">
                  {trainingData.title}
                </p>
                <p className="mb-2 text-xs text-zinc-500">
                  {trainingData.period}
                </p>
                <p className="text-sm leading-relaxed text-zinc-600">
                  {trainingData.description}
                </p>
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-xl font-bold text-brand-teal-dark">
                {t.certifications}
              </h3>
              <ul className="space-y-2">
                {certifications[locale].map((cert) => (
                  <li
                    key={cert}
                    className="text-sm text-zinc-600 before:me-2 before:text-brand-teal before:content-['•']"
                  >
                    {cert}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-xl font-bold text-brand-teal-dark">
                {t.community}
              </h3>
              <p className="text-sm leading-relaxed text-zinc-600">
                {community[locale]}
              </p>
            </div>

            <div>
              <h3 className="mb-4 text-xl font-bold text-brand-teal-dark">
                {t.languages}
              </h3>
              <p className="text-sm text-zinc-600">
                {locale === "en"
                  ? "Arabic (Native) · English (Professional)"
                  : "العربية (لغة أم) · الإنجليزية (احترافية)"}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
