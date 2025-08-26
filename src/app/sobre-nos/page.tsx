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
import Footer from "@/components/Footer";
import Cta from "@/components/Cta";

export default function SobreNosPage() {
  return (
    <>
      <HeaderSecondary />

      {/* Breadcrumb */}
      <div className="w-full bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20">
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

          {/* Título da página com underline */}
          <h2 className="mt-6 text-3xl font-bold text-[var(--dark-text)] inline-block border-b-2 border-[color:var(--secondary)] pb-1">
            Sobre nós
          </h2>
        </div>
      </div>

      <main className="w-full mx-auto ">
        <section className="w-full bg-white px-10">
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
            <div>
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
                Lorem ipsum dolor sit amet. Et repellat omnis aut dolor aperiam
                At quibusdam dolor et enim dolore est explicabo aliquam id culpa
                eveniet? Est impedit voluptatem cum officia nihil est
                exercitationem repellendus. Et consectetur impedit qui
                repellendus suscipit et officiis magnam a dolor repellat aut
                dicta illum hic itaque minus. Sit ipsam deserunt eum dicta
                voluptates sed minima minima cum corrupti beatae ut quod sunt ea
                quod adipisci. Eum aspernatur repellat quo corporis laborum eos
                libero atque est autem aliquam.
              </p>
            </div>
          </div>



        </section>
        <Cta />

        <Footer />
      </main>
    </>
  );
}
