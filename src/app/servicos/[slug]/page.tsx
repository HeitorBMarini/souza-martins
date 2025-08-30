import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SoldaSection } from "../index";

const SERVICE_COMPONENTS = {
  solda: SoldaSection,
  // serralheria: SerralheriaSection,
  // estruturas: EstruturasSection,
} as const;

type Slug = keyof typeof SERVICE_COMPONENTS;

export default async function ServicoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;            // 👈 AQUI
  const Comp = SERVICE_COMPONENTS[slug as Slug];
  if (!Comp) return notFound();
  return <Comp />; // layout cuida do breadcrumb/title
}

export function generateStaticParams() {
  return Object.keys(SERVICE_COMPONENTS).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;            // 👈 AQUI
  const titles: Record<string, string> = {
    solda: "Solda | Serviços",
    serralheria: "Serralheria | Serviços",
    estruturas: "Estruturas Metálicas | Serviços",
  };
  return { title: titles[slug] ?? "Serviços" };
}
