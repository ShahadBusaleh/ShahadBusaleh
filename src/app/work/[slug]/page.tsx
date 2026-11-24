import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { caseStudies, getCaseStudy } from "@/data/caseStudies";
import { CaseStudyView } from "@/components/CaseStudyView";

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) return {};
  const title = `${cs.en.title} — Case Study · Shahad Busaleh`;
  return {
    title,
    description: cs.en.problem,
    alternates: { canonical: `work/${cs.slug}/` },
    openGraph: { title, description: cs.en.problem, url: `work/${cs.slug}/` },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!getCaseStudy(slug)) notFound();
  return <CaseStudyView slug={slug} />;
}
