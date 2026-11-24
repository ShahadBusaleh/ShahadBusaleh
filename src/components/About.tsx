"use client";

import { useLanguage } from "./LanguageProvider";
import { ui } from "@/lib/i18n";
import { Reveal } from "./Reveal";
import { profile } from "@/data/profile";

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

const bio = {
  en: "I build AI products that solve real business problems, from understanding the need to shipping a working system. My work spans multi-agent platforms, enterprise workflow tools, and evaluation-driven AI, and I care about outputs that are traceable, safe, and actually used.",
  ar: "أبني منتجات ذكاء اصطناعي تحل مشكلات أعمال حقيقية، من فهم الاحتياج حتى تسليم نظام يعمل. يمتد عملي بين المنصات متعددة الوكلاء، وأدوات سير العمل المؤسسية، والذكاء الاصطناعي المبني على التقييم، وأهتم بمخرجات يمكن تتبعها، وآمنة، ويستخدمها الناس فعلًا.",
};

const principles = {
  en: [
    { title: "Start from the user's problem", body: "Every project starts with who it's for and what it replaces, not with the model." },
    { title: "Measure before claiming", body: "Evaluation harnesses, blind human labels, and metrics I can defend." },
    { title: "Keep humans in control", body: "Risky actions need approval, and the AI says it doesn't know instead of guessing." },
  ],
  ar: [
    { title: "أبدأ من مشكلة المستخدم", body: "كل مشروع يبدأ بسؤال: لمن هو؟ وما الذي يستبدله؟ لا بالنموذج." },
    { title: "أقيس قبل أن أدّعي", body: "منظومات تقييم، وتصنيفات بشرية عمياء، ومقاييس أستطيع الدفاع عنها." },
    { title: "الإنسان يبقى صاحب القرار", body: "الإجراءات الحساسة تحتاج موافقة، والذكاء الاصطناعي يقول «لا أعرف» بدل التخمين." },
  ],
};

const community = {
  en: "AI Committee Member, Saudi Developers Community (SDC). Co-presented the AI web-building workshop “Web Without Limits” (⁨ويب بلا حدود⁩), Nov 2026.",
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
                {t.aboutMe}
              </h3>
              <p className="text-base leading-relaxed text-zinc-700">
                {bio[locale]}
              </p>
            </div>

            <div>
              <h3 className="mb-4 text-xl font-bold text-brand-teal-dark">
                {t.howIWork}
              </h3>
              <ul className="grid gap-3 sm:grid-cols-3">
                {principles[locale].map((p) => (
                  <li
                    key={p.title}
                    className="rounded-xl border border-brand-teal/15 bg-zinc-50 p-4"
                  >
                    <p className="mb-1 text-sm font-semibold text-brand-teal-dark">
                      {p.title}
                    </p>
                    <p className="text-sm leading-relaxed text-zinc-600">
                      {p.body}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

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
              <a
                href={profile.links.credly}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-teal hover:text-brand-teal-dark"
              >
                {locale === "en" ? "Verify on Credly" : "التحقق عبر Credly"}
                <span aria-hidden className="rtl:rotate-180">→</span>
              </a>
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
