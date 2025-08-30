import { ReactNode } from "react";
import Link from "next/link";
import HeaderSecondary from "@/components/HeaderSecondary";
import {
  Breadcrumb, BreadcrumbList, BreadcrumbItem,
  BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Home as HomeIcon, ChevronRight } from "lucide-react";
import Cta from "@/components/Cta";
import ServiceRail from "@/components/ServiceRail";

// Mapeia slug -> rótulo bonito
const LABELS: Record<string, string> = {
  solda: "Serviço de Solda",
  serralheria: "Serralheria",
  estruturas: "Estruturas Metálicas",
};

export default async function ServicoLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const pretty = (s: string) =>
    s.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

  const label = LABELS[slug] ?? pretty(slug ?? "");

  return (
    <>
      <HeaderSecondary />

      {/* Breadcrumb + título */}
      <div className="w-full bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-40">
          <div className="md:pt-2 pt-10">
            <Breadcrumb>
              <BreadcrumbList className="flex items-center gap-2 text-sm text-black">
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href="/" className="flex items-center gap-1">
                      <HomeIcon size={16} /> Home
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbSeparator>
                  <ChevronRight size={14} className="text-black" />
                </BreadcrumbSeparator>

                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href="/servicos">Serviços</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbSeparator>
                  <ChevronRight size={14} className="text-black" />
                </BreadcrumbSeparator>

                <BreadcrumbItem>
                  <BreadcrumbPage className="font-bold">{label}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>


          <h2
            className="relative mt-6 text-3xl font-bold text-[var(--dark-text)] pb-1
             after:content-[''] after:block after:h-[3px] after:w-16 
             after:bg-[var(--primary)] after:mt-2"
          >
            {label}
          </h2>

        </div>
      </div>

      {/* Conteúdo principal */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {children}
      </main>

      {/* Rail lateral fixo (desktop) */}
      <ServiceRail />

      <Cta />
    </>
  );
}
