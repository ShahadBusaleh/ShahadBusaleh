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
};

export const projects: Project[] = [
  {
    id: "sada",
    title: "Sada (صدى) — Multi-Agent Audience Intelligence Platform",
    titleAr: "صدى (Sada) — منصة ذكاء الجمهور متعددة الوكلاء",
    role: "AgentX Hackathon — Backend & AI Agents | Team Project, continued independently",
    roleAr: "هاكاثون AgentX — الخلفية ووكلاء الذكاء الاصطناعي | مشروع فريق، استكملتُ تطويره بشكل مستقل",
    description:
      "A multi-agent AI platform that turns audience data from the Saudi Broadcasting Authority's official YouTube, X and Instagram accounts into content decisions: what to publish, where, when, and why a post over- or under-performed. Live Arabic (RTL) dashboard.",
    descriptionAr:
      "منصة ذكاء اصطناعي متعددة الوكلاء تحوّل بيانات الجمهور من حسابات هيئة الإذاعة والتلفزيون الرسمية على YouTube وX وInstagram إلى قرارات محتوى: ماذا يُنشر، وأين، ومتى، ولماذا تفوّق منشور على المتوقع أو قصّر عنه. لوحة معلومات عربية (RTL) مباشرة.",
    highlights: [
      "7 agents sharing one database and pattern store: Data Collector, Behavior Analysis, Content Optimizer, Trend & Viral Prediction, Alerts & Diagnosis, Audience Analysis, Live Clip Detection (prototype on a simulated signal)",
      "Real data: 15K+ posts from 19 official accounts (incl. 7.7K YouTube videos with ~95M views) and 2.5K audience comments; no author data stored",
      "Evidence-first: every pattern cites its sample size and t-test; diagnoses link to real comparable posts and never invent a cause",
      "Saudi-dialect audience analysis: 94% agreement with blind human labels",
      "My role — Hackathon: backend, AI agents, and platform API integration (YouTube, X, Instagram). After the hackathon, I continued development independently: production deployment (Render + Supabase Postgres), Supabase Auth, multi-tenant data isolation, Alembic migrations, and CI on SQLite and Postgres.",
    ],
    highlightsAr: [
      "7 وكلاء يتشاركون قاعدة بيانات واحدة ومخزن أنماط: جامع البيانات، وتحليل السلوك، ومحسّن المحتوى، والتنبؤ بالترند والانتشار، والتنبيهات والتشخيص، وتحليل الجمهور، واكتشاف المقاطع المباشرة (نموذج أولي على إشارة محاكاة)",
      "بيانات حقيقية: أكثر من 15 ألف منشور من 19 حسابًا رسميًا (منها 7.7 ألف فيديو على YouTube بنحو 95 مليون مشاهدة) و2.5 ألف تعليق من الجمهور؛ دون تخزين أي بيانات عن أصحابها",
      "الدليل أولًا: كل نمط يذكر حجم العينة واختبار t، والتشخيصات ترتبط بمنشورات حقيقية مماثلة ولا تختلق سببًا أبدًا",
      "تحليل الجمهور باللهجة السعودية: توافق بنسبة 94% مع تصنيفات بشرية معمّاة",
      "دوري — في الهاكاثون: الخلفية، ووكلاء الذكاء الاصطناعي، وتكامل واجهات المنصات البرمجية (YouTube وX وInstagram). بعد الهاكاثون واصلتُ التطوير بشكل مستقل: النشر في بيئة الإنتاج (Render + Supabase Postgres)، وSupabase Auth، وعزل بيانات متعدد المستأجرين (Multi-tenant)، وترحيلات Alembic، والتكامل المستمر (CI) على SQLite وPostgres.",
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
  },
  {
    id: "yusor",
    title: "Yusor — Bilingual Multi-Agent HR Assistant",
    titleAr: "يُسر — مساعد موارد بشرية متعدد الوكلاء ثنائي اللغة",
    role: "Agentic AI Bootcamp Capstone (SDA & WeCloudData) — Repo Owner | Team of 4",
    roleAr: "مشروع تخرج معسكر Agentic AI (SDA و WeCloudData) — مالكة المستودع | فريق من 4",
    description:
      "An Arabic/English HR assistant that answers from the HR database and Saudi Labor Law, cites its sources, verifies every answer before the user sees it, and keeps risky actions under human approval.",
    descriptionAr:
      "مساعد موارد بشرية بالعربية والإنجليزية يجيب من قاعدة بيانات الموارد البشرية ونظام العمل السعودي، ويستشهد بمصادره، ويتحقق من كل إجابة قبل أن تصل للمستخدم، ويُبقي الإجراءات الحساسة تحت الموافقة البشرية.",
    highlights: [
      "Orchestrator, HR, Consultant and Manager agents, plus specialists for regulation updates, decision briefs, CV parsing and growth plans",
      "Hybrid RAG (Qdrant + BM25 + Reciprocal Rank Fusion) over 176 policy and Labor Law documents, with cited sources",
      "Results: Ragas faithfulness 0.94, context recall 0.91, 54/54 golden test cases, 158 unit tests passing",
      "My role: Owned the repository, coordinated how work was split across a team of four, co-led the evaluation harness (Ragas + LLM-as-judge), built the Arabic experience, Team Insights, and the payroll feature, and curated the policy knowledge base.",
    ],
    highlightsAr: [
      "وكلاء المنسّق والموارد البشرية والمستشار والمدير، إضافة إلى وكلاء متخصصين لتحديثات الأنظمة وملخصات القرار وتحليل السير الذاتية وخطط النمو",
      "RAG هجين (Qdrant + BM25 + Reciprocal Rank Fusion) على 176 وثيقة سياسات ونظام عمل، مع ذكر المصادر",
      "النتائج: Ragas faithfulness بنسبة 0.94، وcontext recall بنسبة 0.91، ونجاح 54/54 حالة اختبار مرجعية، ونجاح 158 اختبار وحدة",
      "دوري: ملكية المستودع، وتنسيق توزيع العمل على فريق من أربعة، والمشاركة في قيادة منظومة التقييم (Ragas + LLM-as-judge)، وبناء التجربة العربية وميزة رؤى الفريق (Team Insights) وميزة الرواتب، وإعداد قاعدة معرفة السياسات.",
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
    badge: "Completed — Bootcamp Capstone",
    badgeAr: "مكتمل — مشروع تخرج المعسكر",
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
    featured: true,
    badge: "1st Place",
    badgeAr: "المركز الأول",
  },
  {
    id: "meeting-assistant",
    title: "AI Meeting Assistant",
    titleAr: "مساعد الاجتماعات الذكي",
    role: "Enterprise Integration & Full-Stack Delivery",
    roleAr: "تكامل مؤسسي وتطوير Full Stack",
    description:
      "Enterprise web app for recording meetings, live transcription, AI summaries, formal meeting minutes documents, PDF export, and Microsoft Graph email — integrated into a corporate IT portal with Entra ID SSO via YARP reverse proxy.",
    descriptionAr:
      "تطبيق مؤسسي لتسجيل الاجتماعات والنسخ المباشر والملخصات بالذكاء الاصطناعي ومحاضر الاجتماعات الرسمية وتصدير PDF والبريد عبر Microsoft Graph — مدمج في بوابة IT مع تسجيل دخول موحد عبر YARP.",
    highlights: [
      "Two-server Windows architecture: ASP.NET portal + Next.js/FastAPI stack",
      "SSO without second login — YARP injects X-User headers from Entra ID",
      "Local LM Studio summarization with browser-side transcription path",
      "Production troubleshooting: 502 gateway, transcript persistence, template routing",
    ],
    highlightsAr: [
      "بنية Windows ثنائية الخوادم: بوابة ASP.NET + Next.js/FastAPI",
      "تسجيل دخول موحد بدون تسجيل ثانٍ عبر YARP و Entra ID",
      "تلخيص محلي عبر LM Studio مع مسار نسخ في المتصفح",
      "حل مشاكل إنتاج: 502، حفظ النصوص، مسارات القوالب",
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
    badge: "Production",
    badgeAr: "قيد التشغيل",
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
    badge: "Enterprise",
    badgeAr: "مؤسسي",
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
