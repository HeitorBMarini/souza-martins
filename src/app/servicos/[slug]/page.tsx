import { notFound } from "next/navigation";
import {
  SoldaSection,
  
} from "../index";
const SERVICE_COMPONENTS: Record<string, React.FC> = {
  solda: SoldaSection,
 
};

type Props = { params: { slug: string } };

export default function ServicoPage({ params }: Props) {
  const Comp = SERVICE_COMPONENTS[params.slug];
  if (!Comp) return notFound();
  return <Comp />;
}

export function generateStaticParams() {
  return Object.keys(SERVICE_COMPONENTS).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props) {
  const titles: Record<string, string> = {
    solda: "Solda | Serviços",
    serralheria: "Serralheria | Serviços",
    estruturas: "Estruturas Metálicas | Serviços",
  };
  return { title: titles[params.slug] ?? "Serviços" };
}
