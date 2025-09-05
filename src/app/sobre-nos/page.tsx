"use client";

import Image from "next/image";
import Link from "next/link";
import HeaderSecondary from "@/components/HeaderSecondary";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Home as HomeIcon, ChevronRight } from "lucide-react";

import img1 from "@/components/imgs/quem-1.png";
import img2 from "@/components/imgs/quem-2.png";
import Cta from "@/components/Cta";

export default function SobreNosPage() {
  return (
    <>
      <HeaderSecondary />

      {/* Breadcrumb */}
      <div className="w-full bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-40">
          <div className="pt-10 md:pt-0">
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
                  <BreadcrumbPage className="font-bold">Sobre nós</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>


          {/* Título da página com underline */}
          <h2 className="relative mt-6 text-3xl font-bold text-[var(--dark-text)] pb-1
             after:content-[''] after:block after:h-[3px] after:w-16 
             after:bg-[var(--primary)] after:mt-2">
            Sobre nós
          </h2>
        </div>
      </div>

      <main className="mx-auto max-w-7xl px-0 md:px-10 pb-20">
        <section className="w-full bg-white px-2 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-20 pb-30 items-center">
            {/* Coluna das imagens */}
            <div className="flex gap-4">
              <Image
                src={img1}
                alt="Porta e grade metálica"
                className="object-cover"
                width={300}
                height={400}
              />
              <Image
                src={img2}
                alt="Portão metálico decorado"
                className="object-cover relative top-10 sm:top-20"
                width={300}
                height={400}
              />
            </div>

            {/* Coluna do texto */}
            <div className="pt-10 md:pt-0">
              <h4 className="uppercase w-44 text-center p-2 rounded-full font-medium mb-4 bg-[var(--gradient)]">
                Sobre nós
              </h4>
              <h2 className="text-5xl font-extrabold text-[var(--dark-text)]">
                SOUSA MARTINS
              </h2>
              <h3 className="mt-1 mb-6 text-2xl tracking-wider text-[var(--grey-custom)]">
                SERRALHERIA E PINTURAS
              </h3>
              <p className="text-zinc-600 leading-relaxed">
                A SM Sousa Martins nasceu da tradição e da experiência no ramo da serralheria. Fundada  pelo Sr. Alencar, um mestre reconhecido por sua dedicação e excelência no ofício, a  empresa carrega em sua essência o valor do trabalho bem-feito e a paixão pelo metal.
              </p>
              <p className="text-zinc-600 leading-relaxed">
                Seguindo os passos do pai, seu filho aprendeu desde cedo os segredos da profissão e  decidiu dar continuidade a essa história, fundando sua própria empresa.
              </p>
              <p className="text-zinc-600 leading-relaxed">
                Hoje, a SM Sousa  Martins une tradição e inovação, oferecendo soluções em serralheria com qualidade,  confiança e compromisso.
              </p>
            </div>
          </div>



        </section>

      </main>
      <Cta />

    </>
  );
}
