// app/servicos/page.tsx
import Image from "next/image";
import Link from "next/link";
import HeaderSecondary from "@/components/HeaderSecondary";
import {
    Breadcrumb,
    BreadcrumbList,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
    BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Home as HomeIcon, ChevronRight } from "lucide-react";

// Imagens (troque pelos seus arquivos reais)
import imgSerralheria from "@/components/imgs/servicos/solda.png";
import imgSolda from "@/components/imgs/servicos/solda.png";
import imgEstruturas from "@/components/imgs/servicos/solda.png";
import Cta from "@/components/Cta";

const SERVICES = [
    {
        slug: "serralheria",
        title: "Serralheria",
        excerpt:
            "Fabricação, manutenção e instalação de portas, portões e estruturas sob medida.",
        img: imgSerralheria,
        alt: "Serviço de serralheria",
    },
    {
        slug: "solda",
        title: "Serviço de Solda",
        excerpt:
            "Solda MIG/MAG, TIG e eletrodo revestido com precisão e alto padrão de acabamento.",
        img: imgSolda,
        alt: "Serviço de solda",
    },
    {
        slug: "estruturas",
        title: "Estruturas Metálicas",
        excerpt:
            "Projetos e montagens de galpões, mezaninos e coberturas metálicas robustas.",
        img: imgEstruturas,
        alt: "Estruturas metálicas",
    },
] as const;

export const metadata = {
    title: "Serviços | Souza Martins",
};

export default function ServicosPage() {
    return (
        <>
            <HeaderSecondary />

            {/* Breadcrumb + Título */}
            <div className="w-full bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-40">
                    <Breadcrumb>
                        <BreadcrumbList className="flex items-center gap-2 text-sm text-black">
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link href="/" className="flex items-center gap-1">
                                        <HomeIcon size={16} />
                                        Home
                                    </Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>

                            <BreadcrumbSeparator>
                                <ChevronRight size={14} className="text-black" />
                            </BreadcrumbSeparator>

                            <BreadcrumbItem>
                                <BreadcrumbPage className="font-bold">Serviços</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>

                    <h2  className="relative mt-6 text-3xl font-bold text-[var(--dark-text)] pb-1
             after:content-[''] after:block after:h-[3px] after:w-16 
             after:bg-[var(--primary)] after:mt-2">
                        Serviços
                    </h2>
                </div>
            </div>

            {/* Grid de Cards */}
            <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {SERVICES.map((s) => (
                        <Link
                            key={s.slug}
                            href={`/servicos/${s.slug}`}
                            className="group block overflow-hidden rounded-xl bg-white ring-1 ring-zinc-200 border border-secondary shadow-sm transition hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[var(--secondary)]"
                        >
                            <article>
                                <div className="relative">
                                    <Image
                                        src={s.img}
                                        alt={s.alt}
                                        width={800}
                                        height={800}
                                        className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                                        priority={false}
                                    />
                                </div>

                                <div className="p-4">
                                    <h3 className="text-lg font-semibold text-[var(--dark-text)]">
                                        {s.title}
                                    </h3>
                                    <p className="mt-2 text-sm text-zinc-600">{s.excerpt}</p>

                                    <div className="mt-4">
                                        <span className="inline-block rounded-2xl bg-[var(--primary)] px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition group-hover:bg-[color:var(--secondary)]">
                                            Saiba mais
                                        </span>
                                    </div>
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>
               
            </main>
<Cta/>
        </>
    );
}
