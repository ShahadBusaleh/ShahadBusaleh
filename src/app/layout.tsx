import type { Metadata } from "next";
import { DM_Sans, Noto_Sans_Arabic } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const notoArabic = Noto_Sans_Arabic({
  variable: "--font-noto-arabic",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
});

const SITE_URL = "https://shahadbusaleh.github.io/ShahadBusaleh/";
const OG_IMAGE = `${SITE_URL}og.jpg`;
const DESCRIPTION =
  "AI Engineer in Saudi Arabia building Arabic-first agentic AI and RAG products, from user problem to shipped product. AgentX Hackathon finalist and Rkiza V-Camp 2026 winner.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Shahad Busaleh — AI Engineer",
  description: DESCRIPTION,
  keywords: [
    "Shahad Busaleh",
    "AI Engineer",
    "Technical Product",
    "Agentic AI",
    "Multi-Agent Systems",
    "RAG",
    "Saudi Arabia",
  ],
  authors: [{ name: "Shahad Busaleh" }],
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: "Shahad Busaleh — AI Engineer",
    description:
      "I build Arabic-first AI products, owning both the engineering and the product decisions behind them.",
    url: SITE_URL,
    siteName: "Shahad Busaleh",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Shahad Busaleh — AI Engineer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shahad Busaleh — AI Engineer",
    description:
      "I build Arabic-first AI products, owning both the engineering and the product decisions behind them.",
    images: [OG_IMAGE],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${notoArabic.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <LanguageProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
