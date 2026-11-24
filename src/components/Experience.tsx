"use client";

import { useLanguage } from "./LanguageProvider";
import { ui } from "@/lib/i18n";
import { Reveal } from "./Reveal";

type ExperienceEntry = {
  role: string;
  company: string;
  period: string;
  intro?: string;
  points: string[];
};

const experience: { en: ExperienceEntry; ar: ExperienceEntry }[] = [
  {
    en: {
      role: "Software Developer · Apprenticeship (Tamheer)",
      company: "Khalifa A. Algosaibi Group, Dammam",
      period: "Dec 2025 – Jun 2026",
      intro:
        "Built internal AI and workflow systems for the Group's IT department, taking each from the business need to a deployed tool.",
      points: [
        "AI Meeting Assistant: privacy-first transcription, AI summaries and formal minutes on a local LLM (LM Studio), no third-party cloud; integrated into the corporate IT portal with Microsoft Entra ID SSO and Microsoft Graph; replaced the need for a paid transcription subscription",
        "IT Equipment Issuance System: digitized a manual process into a Preparer → Issuer → Receiver approval workflow with email notifications, bilingual PDF forms, and security controls (CSRF, XSS/SQL injection prevention); deployed on IIS",
        "iTop ITSM: added two-level approvals and email notifications",
      ],
    },
    ar: {
      role: "مطورة برمجيات · تدريب مهني (تمهير)",
      company: "مجموعة خليفة أ. القصيبي، الدمام",
      period: "ديسمبر 2025 – يونيو 2026",
      intro:
        "بنيتُ أنظمة ذكاء اصطناعي وسير عمل داخلية لإدارة تقنية المعلومات في المجموعة، وأخذتُ كل نظام من حاجة العمل حتى أداة منشورة.",
      points: [
        "مساعد الاجتماعات الذكي: نسخ صوتي يضع الخصوصية أولًا، وملخصات بالذكاء الاصطناعي ومحاضر رسمية عبر نموذج لغوي محلي (LM Studio) دون أي سحابة لطرف ثالث؛ مدمج في بوابة IT المؤسسية مع تسجيل دخول موحد عبر Microsoft Entra ID وMicrosoft Graph؛ وأغنى عن الحاجة إلى اشتراك مدفوع في خدمة نسخ",
        "نظام صرف معدات IT: رقمنة عملية يدوية إلى سير موافقات (مُعِدّ → مُصدِر → مُستلِم) مع إشعارات بالبريد الإلكتروني، ونماذج PDF ثنائية اللغة، وضوابط أمنية (CSRF، ومنع XSS وحقن SQL)؛ منشور على IIS",
        "iTop ITSM: إضافة موافقات على مستويين وإشعارات بالبريد الإلكتروني",
      ],
    },
  },
  {
    en: {
      role: ".NET Web Developer · Internship (Volunteer)",
      company: "IAU, Deanship of Scientific Research & Innovation",
      period: "Aug 2025 – Jan 2026",
      points: [
        "Fixed backend issues across routing, file uploads, and database interactions",
        "Implemented full Arabic ↔ English localization (.resx + culture middleware)",
        "Improved workflow-state and search logic with EF Core migrations and optimized LINQ",
        "Enhanced Razor views and multi-role workflow handling",
      ],
    },
    ar: {
      role: "مطورة ويب .NET · تدريب تطوعي",
      company: "جامعة الإمام عبدالرحمن بن فيصل — عمادة البحث العلمي والابتكار",
      period: "أغسطس 2025 – يناير 2026",
      points: [
        "إصلاح مشاكل الخلفية في التوجيه (Routing) ورفع الملفات والتعامل مع قاعدة البيانات",
        "تنفيذ تعريب كامل عربي ↔ إنجليزي (ملفات .resx + culture middleware)",
        "تحسين منطق حالة سير العمل والبحث عبر ترحيلات EF Core واستعلامات LINQ محسّنة",
        "تحسين واجهات Razor ومعالجة سير العمل متعدد الأدوار",
      ],
    },
  },
  {
    en: {
      role: "IT Trainee · Internship (Co-op)",
      company: "GAC Saudi Arabia, Dammam",
      period: "Jun 2025 – Aug 2025",
      points: [
        "Analyzed 10 months of IT support tickets, cleaned inconsistent data, built Tableau dashboards, and presented resource-planning recommendations to IT operations",
        "Resolved daily tickets for end-user devices, printers, and IP telephones",
      ],
    },
    ar: {
      role: "متدربة IT · تدريب تعاوني",
      company: "GAC السعودية، الدمام",
      period: "يونيو 2025 – أغسطس 2025",
      points: [
        "تحليل 10 أشهر من تذاكر الدعم الفني، وتنظيف البيانات غير المتسقة، وبناء لوحات Tableau، وتقديم توصيات تخطيط الموارد لفريق عمليات IT",
        "حل التذاكر اليومية لأجهزة المستخدمين والطابعات وهواتف IP",
      ],
    },
  },
];

export function Experience() {
  const { locale } = useLanguage();
  const t = ui[locale];

  return (
    <section id="experience" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <Reveal className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-brand-teal-dark sm:text-4xl">
            {t.experience}
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-brand-teal" />
        </Reveal>

        <div className="space-y-8">
          {experience.map((item, index) => {
            const data = item[locale];
            return (
              <Reveal key={data.company} delay={index * 80}>
                <div className="border-s-2 border-brand-teal ps-5">
                  <p className="font-semibold text-brand-teal-dark">
                    {data.role}
                  </p>
                  <p className="text-sm text-brand-teal">{data.company}</p>
                  <p className="mb-3 text-xs text-zinc-500">{data.period}</p>
                  {data.intro && (
                    <p className="mb-3 text-sm leading-relaxed text-zinc-700">
                      {data.intro}
                    </p>
                  )}
                  <ul className="space-y-1.5">
                    {data.points.map((point) => (
                      <li
                        key={point}
                        className="text-sm text-zinc-600 before:me-2 before:text-brand-teal before:content-['•']"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
