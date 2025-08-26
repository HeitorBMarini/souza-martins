import { notFound } from "next/navigation";
// Define the type for route params manually
type ServicoPageProps = { params: { slug: string } };

import { SoldaSection } from "../index";

const SERVICE_COMPONENTS: Record<string, React.FC> = {
  solda: SoldaSection,
};
export default function ServicoPage({ params }: ServicoPageProps) {
  const Comp = SERVICE_COMPONENTS[params.slug];

  if (!Comp) return notFound();

  return <Comp />;
}


export function generateStaticParams() {
  return Object.keys(SERVICE_COMPONENTS).map((slug) => ({ slug }));
}
export function generateMetadata({ params }: ServicoPageProps) {
  const titles: Record<string, string> = {
    solda: "Solda | Serviços",
    serralheria: "Serralheria | Serviços",
    estruturas: "Estruturas Metálicas | Serviços",
  };

  return { title: titles[params.slug] ?? "Serviços" };
}

