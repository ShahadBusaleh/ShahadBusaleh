export type ProjectCategory = "enterprise" | "ai" | "data" | "mobile";

export type Project = {
  id: string;
  title: string;
  titleAr: string;
  role: string;
  roleAr: string;
  description: string;
  descriptionAr: string;
  highlights: string[];
  highlightsAr: string[];
  stack: string[];
  category: ProjectCategory;
  featured: boolean;
  github?: string;
  live?: string;
  badge?: string;
  badgeAr?: string;
  caseStudy?: string;
};

export const projects: Project[] = [
  {
    id: "sada",
    title: "Sada (صدى) — Multi-Agent Audience Intelligence Platform",
    titleAr: "صدى (Sada) — منصة ذكاء الجمهور متعددة الوكلاء",
    role: "Backend & AI Agents · Team of 4, continued independently",
    roleAr: "الخلفية ووكلاء الذكاء الاصطناعي · فريق من 4، واستكملتُ تطويره بشكل مستقل",
    description:
      "Turns audience data from official YouTube, X and Instagram accounts into content decisions: what to publish, where, when, and why a post over- or under-performed.",
    descriptionAr:
      "تحوّل بيانات الجمهور من الحسابات الرسمية على YouTube وX وInstagram إلى قرارات محتوى: ماذا يُنشر، وأين، ومتى، ولماذا تفوّق منشور أو قصّر.",
    highlights: [
      "7 agents on real data: 15K+ posts from 19 official accounts",
      "Evidence-first: significant patterns only, no invented causes",
      "Saudi-dialect audience analysis, measured against blind human labels",
    ],
    highlightsAr: [
      "7 وكلاء على بيانات حقيقية: أكثر من 15 ألف منشور من 19 حسابًا رسميًا",
      "الدليل أولًا: أنماط ذات دلالة إحصائية فقط، ولا أسباب مختلقة",
      "تحليل الجمهور باللهجة السعودية، مقاس مقابل تصنيفات بشرية عمياء",
    ],
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
    category: "ai",
    featured: true,
    badge: "AgentX Hackathon Finalist (3rd Edition)",
    badgeAr: "متأهلة لنهائي هاكاثون AgentX (النسخة الثالثة)",
    caseStudy: "sada",
  },
  {
    id: "yusor",
    title: "Yusor — Bilingual Multi-Agent HR Assistant",
    titleAr: "يُسر — مساعد موارد بشرية متعدد الوكلاء ثنائي اللغة",
    role: "Bootcamp Capstone (SDA & WeCloudData) · Repo owner · Team of 4",
    roleAr: "مشروع تخرج المعسكر (SDA وWeCloudData) · مالكة المستودع · فريق من 4",
    description:
      "An Arabic/English HR assistant that answers from the HR database and Saudi Labor Law, cites its sources, and keeps risky actions under human approval.",
    descriptionAr:
      "مساعد موارد بشرية بالعربية والإنجليزية يجيب من قاعدة بيانات الموارد البشرية ونظام العمل السعودي، ويذكر مصادره، ويُبقي الإجراءات الحساسة تحت الموافقة البشرية.",
    highlights: [
      "Faithfulness 0.94 · context recall 0.91 · 54/54 golden cases",
      "Hybrid RAG over 176 policy and Labor Law documents, with citations",
      "Human approval for risky actions; every answer verified before the user sees it",
    ],
    highlightsAr: [
      "Faithfulness ‏0.94 · context recall ‏0.91 · نجاح 54/54 حالة مرجعية",
      "RAG هجين على 176 وثيقة سياسات ونظام عمل، مع ذكر المصادر",
      "موافقة بشرية على الإجراءات الحساسة، وتحقق من كل إجابة قبل وصولها للمستخدم",
    ],
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
    category: "ai",
    featured: true,
    github: "https://github.com/ShahadBusaleh/YusrAgent",
    badge: "Completed — Bootcamp Capstone",
    badgeAr: "مكتمل — مشروع تخرج المعسكر",
    caseStudy: "yusor",
  },
  {
    id: "travel-in",
    title: "Travel-In — AI Travel Concierge",
    titleAr: "Travel-In — مساعد السفر الذكي",
    role: "Full Stack Developer — Architecture, API Design, AI Integration, Database, Figma-to-UI Implementation",
    roleAr: "مطورة Full Stack — البنية، تصميم الواجهات البرمجية، تكامل الذكاء الاصطناعي، قاعدة البيانات، وتحويل تصاميم Figma إلى واجهات",
    description:
      "1st Place AI travel concierge at Rkiza V-Camp 2026. Generates personalized, editable itineraries with Google Gemini AI, and integrates real-time flight and hotel APIs for dynamic pricing and booking.",
    descriptionAr:
      "المركز الأول في Rkiza V-Camp 2026. منصة سفر ذكية تولّد خططاً قابلة للتعديل عبر Google Gemini AI، مع تكامل واجهات طيران وفنادق حية للتسعير والحجز.",
    highlights: [
      "1st Place — Rkiza V-Camp 2026; Gemini-generated structured itineraries",
      "Live flight and hotel search with multi-key API failover; real-time pricing and checkout",
      "Clerk auth with server-side route protection; per-IP rate limiting, CSRF validation, and Zod sanitization",
      "Team: Elaf Albelali (UI/UX), Ziyad Tammar (security, performance, deployment), Saud Alotaibi (business analysis)",
    ],
    highlightsAr: [
      "المركز الأول — Rkiza V-Camp 2026؛ خطط رحلات منظمة يولّدها Gemini",
      "بحث حي عن الرحلات والفنادق مع تبديل تلقائي بين مفاتيح API متعددة؛ تسعير حي وإتمام الحجز",
      "مصادقة Clerk مع حماية المسارات من جهة الخادم؛ تحديد معدل الطلبات لكل IP، وتحقق CSRF، وتنقية المدخلات عبر Zod",
      "الفريق: إلاف البلعلي (UI/UX)، زياد تمار (الأمان والأداء والنشر)، سعود العتيبي (تحليل الأعمال)",
    ],
    stack: [
      "Next.js 15",
      "TypeScript",
      "Tailwind",
      "shadcn/ui",
      "Clerk",
      "Prisma",
      "PostgreSQL",
      "Vercel AI SDK",
      "Google Gemini 2.5 Flash",
      "SerpApi",
      "Resend",
      "Zod",
    ],
    category: "ai",
    featured: false,
    badge: "1st Place",
    badgeAr: "المركز الأول",
  },
  {
    id: "meeting-assistant",
    title: "AI Meeting Assistant",
    titleAr: "مساعد الاجتماعات الذكي",
    role: "Khalifa A. Algosaibi Group · Designed and built end to end",
    roleAr: "مجموعة خليفة أ. القصيبي · تصميم وبناء كامل",
    description:
      "Records meetings and produces AI summaries and formal minutes on a local LLM, inside the corporate IT portal, so meeting content never leaves company servers.",
    descriptionAr:
      "يسجّل الاجتماعات ويُنتج ملخصات ومحاضر رسمية بنموذج لغوي محلي من داخل بوابة IT المؤسسية، فلا يغادر محتوى الاجتماعات خوادم الشركة.",
    highlights: [
      "Privacy-first: local LLM (LM Studio), no third-party cloud",
      "No second login: Microsoft Entra ID SSO through a YARP reverse proxy",
      "Formal minutes from templates, PDF export, and email via Microsoft Graph",
    ],
    highlightsAr: [
      "الخصوصية أولًا: نموذج لغوي محلي (LM Studio) دون أي سحابة خارجية",
      "بدون تسجيل دخول ثانٍ: Microsoft Entra ID عبر وسيط YARP",
      "محاضر رسمية من قوالب، وتصدير PDF، وبريد عبر Microsoft Graph",
    ],
    stack: [
      "Next.js",
      "FastAPI",
      "ASP.NET",
      "YARP",
      "LM Studio",
      "SQLite",
      "MS Graph",
    ],
    category: "enterprise",
    featured: true,
    badge: "Deployed",
    badgeAr: "منشور",
    caseStudy: "meeting-assistant",
  },
  {
    id: "equipment",
    title: "IT Equipment Management System",
    titleAr: "نظام إدارة معدات IT",
    role: "Full Stack Developer",
    roleAr: "مطورة Full Stack",
    description:
      "Enterprise-grade web app that digitizes IT equipment issuance through a multi-step approval workflow (Preparer → Issuer → Receiver), with Microsoft Graph email notifications, bilingual PDF generation, and Microsoft-based authentication.",
    descriptionAr:
      "تطبيق مؤسسي لرقمنة صرف معدات IT عبر سير موافقات متعدد الخطوات (مُعِدّ → مُصدِر → مُستلِم)، مع إشعارات بريد Microsoft Graph وتوليد PDF ثنائي اللغة ومصادقة Microsoft.",
    highlights: [
      "Multi-role workflow: Preparer → Issuer → Receiver with role-based access control",
      "Microsoft Graph API for automated email notifications; cookie-based Microsoft authentication",
      "Bilingual English/Arabic PDF generation with QuestPDF; deployed on private IIS",
    ],
    highlightsAr: [
      "سير عمل متعدد الأدوار: مُعِدّ → مُصدِر → مُستلِم مع صلاحيات حسب الدور",
      "Microsoft Graph لإشعارات البريد؛ مصادقة Microsoft عبر ملفات تعريف الارتباط",
      "توليد PDF بالعربي والإنجليزي عبر QuestPDF؛ نشر على IIS خاص",
    ],
    stack: [
      "ASP.NET Core MVC",
      "EF Core",
      "SQL Server",
      "Microsoft Graph",
      "QuestPDF",
      "Bootstrap",
      "IIS",
    ],
    category: "enterprise",
    featured: false,
  },
  {
    id: "research-mission",
    title: "Research Mission Facilitation System",
    titleAr: "نظام تسهيل المهام البحثية",
    role: "Full Stack Developer | Trainee & Volunteer",
    roleAr: "مطورة Full Stack | متدربة وتطوع",
    description:
      "Institutional ASP.NET Core MVC platform for research facilitation requests — multi-stage scientific and ethical review, role-based dashboards, bilingual Arabic–English UI, and automated poster generation.",
    descriptionAr:
      "منصة مؤسسية بـ ASP.NET Core MVC لطلبات تسهيل البحث — مراجعة علمية وأخلاقية متعددة المراحل، لوحات حسب الدور، واجهة عربية–إنجليزية، وتوليد ملصقات آلي.",
    highlights: [
      "Full Arabic–English localization using .resx files and culture middleware",
      "Fixed backend logic and optimized EF Core / LINQ queries for search and workflow state",
      "Enhanced Razor views and multi-role workflow handling for academic users",
    ],
    highlightsAr: [
      "تعريب كامل عربي–إنجليزي عبر ملفات .resx و culture middleware",
      "إصلاح منطق الخلفية وتحسين استعلامات EF Core / LINQ للبحث وحالة سير العمل",
      "تحسين واجهات Razor ومعالجة سير العمل متعدد الأدوار للمستخدمين الأكاديميين",
    ],
    stack: [
      "ASP.NET Core MVC",
      "EF Core",
      "LINQ",
      "SQL Server",
      "Bootstrap",
      "Razor",
    ],
    category: "enterprise",
    featured: false,
  },
  {
    id: "endless-words",
    title: "Endless Words — AI-Powered Platform for Creative Writing & Book Design",
    titleAr: "Endless Words — منصة ذكاء اصطناعي للكتابة الإبداعية وتصميم الكتب",
    role: "Full Stack / Mobile Developer | Graduation Project",
    roleAr: "مطورة Full Stack وتطبيقات جوال | مشروع تخرج",
    description:
      "An AI-powered mobile platform that helps writers generate ideas, develop characters, get grammar and style feedback, and design book covers — while letting readers browse, rate, and discuss published work in a shared community. Built as a Bachelor's graduation project in Computer Information Systems at Imam Abdulrahman Bin Faisal University.",
    descriptionAr:
      "منصة جوال مدعومة بالذكاء الاصطناعي تساعد الكُتّاب على توليد الأفكار وتطوير الشخصيات والحصول على ملاحظات نحوية وأسلوبية وتصميم أغلفة الكتب، بينما يمكن للقراء تصفح الأعمال المنشورة وتقييمها ومناقشتها ضمن مجتمع مشترك. أُنجز كمشروع تخرج لبكالوريوس نظم المعلومات الحاسوبية في جامعة الإمام عبدالرحمن بن فيصل.",
    highlights: [
      "AI-assisted writing tools — idea generation, character development, and grammar/style enhancement — powered by the OpenAI API",
      "Reader community features: browsing, ratings, comments, and following authors, plus AI-assisted book cover design",
      "Built with Flutter and Firebase for cross-platform mobile delivery",
    ],
    highlightsAr: [
      "أدوات كتابة مدعومة بالذكاء الاصطناعي — توليد الأفكار، وتطوير الشخصيات، وتحسين القواعد والأسلوب — عبر واجهة OpenAI البرمجية",
      "ميزات مجتمعية للقراء: التصفح والتقييم والتعليقات ومتابعة الكُتّاب، إضافة إلى تصميم أغلفة الكتب بالذكاء الاصطناعي",
      "مبني بـ Flutter وFirebase للتطوير الجوال متعدد المنصات",
    ],
    stack: ["Flutter", "Dart", "Firebase", "OpenAI API"],
    category: "mobile",
    featured: false,
  },
  {
    id: "ticket-analytics",
    title: "IT Ticket Data Analysis",
    titleAr: "تحليل بيانات تذاكر IT",
    role: "IT Trainee — COOP",
    roleAr: "متدربة IT",
    description:
      "Analyzed 10 months of IT support ticket data to identify peak periods, seasonal trends, and category relationships — delivering strategic recommendations via interactive Tableau dashboards.",
    descriptionAr:
      "تحليل 10 أشهر من بيانات تذاكر الدعم الفني لتحديد فترات الذروة والاتجاهات الموسمية — مع توصيات استراتيجية عبر لوحات Tableau تفاعلية.",
    highlights: [
      "Data cleaning: mixed time formats and inconsistent categorization",
      "Interactive Tableau dashboards for resource planning",
      "Strategic recommendations presented to IT operations",
    ],
    highlightsAr: [
      "تنظيف بيانات: صيغ زمنية مختلطة وتصنيفات غير متسقة",
      "لوحات Tableau تفاعلية لتخطيط الموارد",
      "توصيات استراتيجية لعمليات IT",
    ],
    stack: ["Excel", "Tableau"],
    category: "data",
    featured: false,
  },
];

export const skills = {
  productAi: [
    "Product Management",
    "Agentic AI",
    "Multi-Agent Systems",
    "RAG",
    "LLMs",
    "LLM Evaluation",
    "Prompt Engineering",
    "AI Integration",
    "LangChain",
    "Workflow Automation",
  ],
  engineering: [
    "Python",
    "FastAPI",
    "Next.js",
    "React",
    "TypeScript",
    "ASP.NET Core",
    "C#",
    "Entity Framework Core",
    "REST APIs",
    "Microsoft Graph",
    "Docker",
    "Git",
    "Flutter",
  ],
  data: ["SQL", "PostgreSQL", "SQL Server", "Qdrant", "Tableau", "Power BI", "Pandas"],
  cloudSecurity: [
    "Microsoft Azure",
    "Supabase",
    "Render",
    "Software Security Testing",
  ],
};
