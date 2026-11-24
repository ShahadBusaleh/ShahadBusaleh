export type Decision = {
  title: string;
  body: string;
  tradeoff?: string;
};

export type CaseStudyContent = {
  title: string;
  context: string;
  problem: string;
  audience: string;
  role: string;
  decisions: Decision[];
  outcome: string[];
  next: string;
};

export type CaseStudy = {
  slug: string;
  badge: { en: string; ar: string };
  stack: string[];
  links?: { label: string; labelAr: string; href: string }[];
  en: CaseStudyContent;
  ar: CaseStudyContent;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "sada",
    badge: {
      en: "AgentX Hackathon Finalist (3rd Edition)",
      ar: "متأهلة لنهائي هاكاثون AgentX (النسخة الثالثة)",
    },
    stack: [
      "Python",
      "FastAPI",
      "SQLAlchemy",
      "Pydantic",
      "PostgreSQL",
      "React",
      "TypeScript",
      "Tailwind",
      "Gemini",
      "GitHub Actions",
    ],
    en: {
      title: "Sada (صدى) — Multi-Agent Audience Intelligence",
      context: "AgentX Hackathon · Team of 4 → continued independently",
      problem:
        "Content teams publish across dozens of accounts on YouTube, X and Instagram. Dashboards tell them what happened, not why it happened or what to publish next.",
      audience:
        "Social media and content teams. The first use case: the Saudi Broadcasting Authority's official accounts.",
      role: "Backend, AI agents, and platform API integrations (YouTube, X, Instagram). After the hackathon I continued development on my own: production deployment, authentication, database migrations, and CI.",
      decisions: [
        {
          title: "Built to generalize, not for one client",
          body: "The hardest question was how to make Sada work for any content creator, not only one broadcaster. Every post is measured against its own account's typical performance, so a small account and a national broadcaster can be compared fairly, and the agents adapt their voice to whoever owns the account.",
          tradeoff:
            "More design work up front than hard-coding one organization's accounts.",
        },
        {
          title: "Saudi context and a human evaluation loop",
          body: "Comments are classified by an LLM that reads each one in the context of the post it was written on, with a shared Saudi context layer: dialect cues, sarcasm, club banter, and the Hijri calendar. Ambiguous comments are left unclassified instead of guessed. I built a blind human-review loop, labeling comments without seeing the model's answer, then measured accuracy, macro-F1 and Cohen's κ and refined the prompt against them.",
          tradeoff:
            "Human labeling takes time, but every accuracy claim is backed by evidence.",
        },
        {
          title: "Evidence before eloquence (team principle)",
          body: "A pattern is shown only when it is statistically significant. When there is no evidence for a cause, the agent says so instead of inventing one. Missing data stays empty, never zero.",
          tradeoff: "Fewer insights on screen, but every one can be trusted.",
        },
      ],
      outcome: [
        "Reached the final round of AgentX (3rd Edition)",
        "7 agents running on real data: 15K+ posts from 19 official accounts, including 7.7K YouTube videos with ~95M views",
        "Audience classification measured against blind human labels (accuracy, macro-F1, Cohen's κ)",
        "Privacy by design: aggregated results only, no commenter data stored",
      ],
      next: "Connect a real live-broadcast signal for clip detection, and add TikTok once API access is approved.",
    },
    ar: {
      title: "صدى (Sada) — منصة ذكاء الجمهور متعددة الوكلاء",
      context: "هاكاثون AgentX · فريق من 4 ← استكملتُ تطويره بشكل مستقل",
      problem:
        "فرق المحتوى تنشر عبر عشرات الحسابات على YouTube وX وInstagram. لوحات الإحصاءات تخبرهم بما حدث، لكنها لا تفسّر لماذا حدث ولا ماذا ينشرون بعده.",
      audience:
        "فرق السوشيال ميديا والمحتوى. أول حالة استخدام: الحسابات الرسمية لهيئة الإذاعة والتلفزيون.",
      role: "الخلفية (Backend)، ووكلاء الذكاء الاصطناعي، وتكامل واجهات المنصات البرمجية (YouTube وX وInstagram). بعد الهاكاثون واصلتُ التطوير وحدي: النشر في بيئة الإنتاج، والمصادقة، وترحيلات قاعدة البيانات، والتكامل المستمر (CI).",
      decisions: [
        {
          title: "مبني ليعمل للجميع، لا لعميل واحد",
          body: "أصعب سؤال كان: كيف يعمل صدى لأي صانع محتوى، لا لجهة إعلامية واحدة فقط؟ كل منشور يُقاس مقارنةً بالأداء المعتاد لحسابه نفسه، فتصبح المقارنة عادلة بين حساب صغير وجهة إعلامية وطنية، ويتكيّف أسلوب الوكلاء مع صاحب الحساب.",
          tradeoff: "جهد تصميم أكبر في البداية من بناء النظام على حسابات جهة واحدة.",
        },
        {
          title: "السياق السعودي وحلقة تقييم بشرية",
          body: "تُصنَّف التعليقات بنموذج لغوي يقرأ كل تعليق في سياق المنشور الذي كُتب عليه، مع طبقة سياق سعودي مشتركة: مفردات اللهجة، والسخرية، والمناكفات الرياضية، والتقويم الهجري. التعليق الغامض يبقى بلا تصنيف بدل التخمين. بنيتُ حلقة مراجعة بشرية عمياء، أصنّف فيها التعليقات دون رؤية تصنيف النموذج، ثم قستُ الدقة وmacro-F1 ومعامل كابا، وحسّنتُ الأوامر بناءً عليها.",
          tradeoff: "التصنيف البشري يأخذ وقتًا، لكن كل ادعاء عن الدقة مدعوم بدليل.",
        },
        {
          title: "الدليل قبل البلاغة (مبدأ الفريق)",
          body: "لا يظهر النمط إلا إذا كان ذا دلالة إحصائية. وحين لا يوجد دليل على سبب، يقولها الوكيل بصراحة ولا يختلق تفسيرًا. والبيانات المفقودة تبقى فارغة، لا صفرًا.",
          tradeoff: "رؤى أقل على الشاشة، لكن كل واحدة منها موثوقة.",
        },
      ],
      outcome: [
        "الوصول إلى المرحلة النهائية في هاكاثون AgentX (النسخة الثالثة)",
        "7 وكلاء يعملون على بيانات حقيقية: أكثر من 15 ألف منشور من 19 حسابًا رسميًا، منها 7.7 ألف فيديو على YouTube بنحو 95 مليون مشاهدة",
        "دقة تصنيف الجمهور مقاسة مقابل تصنيفات بشرية عمياء (الدقة، وmacro-F1، ومعامل كابا)",
        "الخصوصية من التصميم: نتائج مجمّعة فقط، دون تخزين أي بيانات عن أصحاب التعليقات",
      ],
      next: "ربط إشارة بث مباشر حقيقية لاكتشاف المقاطع، وإضافة TikTok عند اعتماد الوصول لواجهته البرمجية.",
    },
  },
  {
    slug: "yusor",
    badge: { en: "Bootcamp Capstone", ar: "مشروع تخرج المعسكر" },
    stack: [
      "Python",
      "FastAPI",
      "Streamlit",
      "Qdrant",
      "BM25 hybrid RAG",
      "Groq LLM",
      "SQLite",
      "Docker",
    ],
    links: [
      {
        label: "View on GitHub",
        labelAr: "عرض على GitHub",
        href: "https://github.com/ShahadBusaleh/YusrAgent",
      },
    ],
    en: {
      title: "Yusor (يُسر) — Bilingual Multi-Agent HR Assistant",
      context:
        "Agentic AI Bootcamp Capstone (SDA & WeCloudData) · Team of 4 · Repository owner",
      problem:
        "Employees wait on HR for routine questions such as leave balance, payroll and labor-law rules, and answers are not always consistent with policy. Sensitive changes like bank details need strict control.",
      audience:
        "Employees asking questions in Arabic or English, and HR managers who approve requests.",
      role: "Owned the repository and coordinated how work was split across the team. Co-led the evaluation harness, built the Arabic experience, Team Insights and the payroll feature, and curated the policy knowledge base. With a teammate, turned the policy and labor-law documents into the retrieval layer: chunking, the vector database, and retrieval tuning.",
      decisions: [
        {
          title: "Measure before claiming",
          body: "We built an evaluation harness before polishing features: golden test cases per agent, Ragas metrics for retrieval, and LLM-as-judge. Every quality claim about Yusor comes from it.",
          tradeoff: "Less time on features, but we knew what actually worked.",
        },
        {
          title: "Arabic as a first-class experience",
          body: "Arabic questions get Arabic answers, the interface switches to right-to-left, and retrieval works directly over Arabic labor-law text rather than a translated afterthought.",
        },
        {
          title: "Humans approve anything risky (team principle)",
          body: "Leave, IBAN changes, hires and terminations become proposed actions. Nothing is written until an HR manager approves, with an AI Decision Brief to help. A supervisor agent checks every answer against its sources before the user sees it.",
          tradeoff: "Slower than full automation, but safe for real HR data.",
        },
      ],
      outcome: [
        "Faithfulness 0.94 and context recall 0.91 (Ragas, 29 retrieval test cases)",
        "54/54 golden test cases and 150+ offline unit tests passing",
        "Hybrid RAG (vector + keyword search) over 176 policy and Saudi Labor Law documents, with cited sources",
      ],
      next: "Pilot it with a real HR team on a narrow use case (policy Q&A first), measure how many questions it resolves without HR, then expand to requests.",
    },
    ar: {
      title: "يُسر (Yusor) — مساعد موارد بشرية متعدد الوكلاء ثنائي اللغة",
      context:
        "مشروع تخرج معسكر Agentic AI (SDA وWeCloudData) · فريق من 4 · مالكة المستودع",
      problem:
        "ينتظر الموظفون الموارد البشرية للإجابة عن أسئلة روتينية مثل رصيد الإجازات والرواتب وأحكام نظام العمل، والإجابات لا تتوافق دائمًا مع السياسات. والتغييرات الحساسة مثل بيانات الحساب البنكي تحتاج ضبطًا صارمًا.",
      audience:
        "الموظفون الذين يسألون بالعربية أو الإنجليزية، ومدراء الموارد البشرية الذين يعتمدون الطلبات.",
      role: "ملكية المستودع وتنسيق توزيع العمل على الفريق. شاركتُ في قيادة منظومة التقييم، وبنيتُ التجربة العربية وميزة رؤى الفريق (Team Insights) وميزة الرواتب، وأعددتُ قاعدة معرفة السياسات. ومع زميلة في الفريق حوّلنا وثائق السياسات ونظام العمل إلى طبقة الاسترجاع: التقطيع، وقاعدة البيانات المتجهية، وتحسين الاسترجاع.",
      decisions: [
        {
          title: "القياس قبل الادعاء",
          body: "بنينا منظومة التقييم قبل تلميع الميزات: حالات اختبار مرجعية لكل وكيل، ومقاييس Ragas للاسترجاع، وتقييم بنموذج لغوي (LLM-as-judge). كل ادعاء عن جودة يُسر مصدره هذه المنظومة.",
          tradeoff: "وقت أقل للميزات، لكننا عرفنا ما الذي يعمل فعلًا.",
        },
        {
          title: "العربية تجربة أساسية لا إضافة",
          body: "السؤال بالعربية يُجاب بالعربية، والواجهة تتحول من اليمين إلى اليسار، والاسترجاع يعمل مباشرة على نصوص نظام العمل العربية لا على ترجمة لاحقة.",
        },
        {
          title: "الإنسان يعتمد أي إجراء حساس (مبدأ الفريق)",
          body: "الإجازات وتغيير الآيبان والتعيين وإنهاء الخدمة تتحول إلى إجراءات مقترحة، ولا يُكتب شيء حتى يعتمده مدير الموارد البشرية بمساعدة ملخص قرار يولّده الذكاء الاصطناعي. ووكيل مشرف يتحقق من كل إجابة مقابل مصادرها قبل أن تصل للمستخدم.",
          tradeoff: "أبطأ من الأتمتة الكاملة، لكنه آمن لبيانات موارد بشرية حقيقية.",
        },
      ],
      outcome: [
        "Faithfulness بنسبة 0.94 وcontext recall بنسبة 0.91 (Ragas، على 29 حالة اختبار استرجاع)",
        "نجاح 54/54 حالة اختبار مرجعية وأكثر من 150 اختبار وحدة",
        "RAG هجين (بحث متجهي + بحث بالكلمات) على 176 وثيقة سياسات ونظام عمل سعودي، مع ذكر المصادر",
      ],
      next: "تجربته مع فريق موارد بشرية حقيقي على حالة استخدام محددة (أسئلة السياسات أولًا)، وقياس عدد الأسئلة التي يحلها دون تدخل الموارد البشرية، ثم التوسع إلى الطلبات.",
    },
  },
  {
    slug: "meeting-assistant",
    badge: { en: "Enterprise · Deployed", ar: "مؤسسي · منشور" },
    stack: ["Next.js", "FastAPI", "ASP.NET", "YARP", "LM Studio", "SQLite", "Microsoft Graph"],
    en: {
      title: "AI Meeting Assistant",
      context: "Khalifa A. Algosaibi Group · Tamheer program",
      problem:
        "Meeting minutes were written by hand, which took time after every meeting. Cloud transcription tools raised privacy concerns for internal meetings and came with a recurring subscription cost.",
      audience:
        "Employees across the Group who run and attend internal meetings, using the corporate IT portal they already work in.",
      role: "Designed and built it end to end: recording and transcription, AI summaries and formal minutes, PDF export, email through Microsoft Graph, and integration into the corporate IT portal.",
      decisions: [
        {
          title: "A local model instead of a cloud API",
          body: "Summaries and minutes run on a local LLM (LM Studio), so meeting content never leaves the company's servers.",
          tradeoff:
            "A smaller model and hardware limits instead of the newest cloud models, in exchange for privacy and no subscription cost.",
        },
        {
          title: "No second login",
          body: "The tool lives inside the existing IT portal. A YARP reverse proxy passes the user's Microsoft Entra ID identity through, so people open it without signing in again, because a separate tool with its own login would not get used.",
          tradeoff:
            "A more complex two-server setup (ASP.NET portal + Next.js/FastAPI) to keep the experience simple.",
        },
        {
          title: "Output people can use as-is",
          body: "Instead of a raw transcript, it produces formal minutes from customizable templates, exports them to PDF, and emails the summary through Microsoft Graph.",
        },
      ],
      outcome: [
        "Deployed inside the corporate IT portal with Entra ID single sign-on",
        "Replaced the need for a paid transcription subscription",
        "Meeting content stays on company infrastructure",
      ],
      next: "Measure the time saved per meeting with regular users, and turn action items in the minutes into tracked follow-ups.",
    },
    ar: {
      title: "مساعد الاجتماعات الذكي",
      context: "مجموعة خليفة أ. القصيبي · برنامج تمهير",
      problem:
        "كانت محاضر الاجتماعات تُكتب يدويًا وتأخذ وقتًا بعد كل اجتماع. وأدوات النسخ السحابية تثير مخاوف خصوصية في الاجتماعات الداخلية، وتأتي باشتراك مدفوع متكرر.",
      audience:
        "موظفو المجموعة الذين يديرون الاجتماعات الداخلية ويحضرونها، من داخل بوابة IT التي يعملون عليها أصلًا.",
      role: "صممتُه وبنيتُه بالكامل: التسجيل والنسخ، والملخصات والمحاضر الرسمية بالذكاء الاصطناعي، وتصدير PDF، والبريد عبر Microsoft Graph، والدمج في بوابة IT المؤسسية.",
      decisions: [
        {
          title: "نموذج محلي بدل واجهة سحابية",
          body: "الملخصات والمحاضر تعمل على نموذج لغوي محلي (LM Studio)، فلا يغادر محتوى الاجتماعات خوادم الشركة.",
          tradeoff: "نموذج أصغر وحدود في العتاد بدل أحدث النماذج السحابية، مقابل الخصوصية وعدم وجود اشتراك.",
        },
        {
          title: "بدون تسجيل دخول ثانٍ",
          body: "الأداة داخل بوابة IT الحالية، ووسيط YARP يمرّر هوية المستخدم من Microsoft Entra ID، فيفتحها الموظف دون تسجيل دخول جديد، لأن أداة منفصلة بحساب مستقل لن تُستخدم.",
          tradeoff: "بنية أعقد على خادمين (بوابة ASP.NET + Next.js/FastAPI) لتبقى التجربة بسيطة.",
        },
        {
          title: "مخرجات جاهزة للاستخدام",
          body: "بدل نص خام، تُنتج محاضر رسمية من قوالب قابلة للتخصيص، وتصدّرها PDF، وترسل الملخص بالبريد عبر Microsoft Graph.",
        },
      ],
      outcome: [
        "منشور داخل بوابة IT المؤسسية مع تسجيل دخول موحد عبر Entra ID",
        "أغنى عن الحاجة إلى اشتراك مدفوع في خدمة نسخ",
        "محتوى الاجتماعات يبقى على بنية الشركة التحتية",
      ],
      next: "قياس الوقت الموفّر في كل اجتماع مع المستخدمين الدائمين، وتحويل المهام في المحاضر إلى متابعات قابلة للتتبع.",
    },
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
