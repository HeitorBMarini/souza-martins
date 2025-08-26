"use client";

import Image from "next/image";
import Link from "next/link";
import ctaImg from "@/components/imgs/cta.png";
import { Button } from "@/components/ui/button";

export default function Cta() {
    return (
        <section className="w-full">
            <div className="relative h-[22rem] md:h-[28rem] overflow-hidden">
                {/* Imagem */}
                {/* Imagem posicionada manualmente */}
                <div className="absolute inset-0 z-0 flex items-center justify-center">
                    <Image
                        src={ctaImg}
                        alt="Trabalhador realizando solda"
                        priority
                        width={1300}
                        height={550}
                        className="
      object-cover object-center 
      w-full h-full         
      md:w-[1300px] md:h-[550px] 
      md:-translate-x-40   
      
    "
                    />
                </div>


                {/* Faixa secondary com clip-path */}
                <div
                    className="
    absolute inset-0 z-10 
    bg-[var(--secondary)] 
    [clip-path:polygon(62%_0,100%_0,100%_100%,40%_100%)]
  "
                />

                {/* Conteúdo */}
                <div className="relative z-20 h-full max-w-7xl md:left-10 mx-auto px-6 md:px-8 flex items-center">
                    <div className="ml-auto ">
                        <h2 className="text-2xl md:text-4xl font-medium leading-snug text-white">
                            Entre em Contato e Realize <br />
                            seu Orçamento Rápido e Fácil!
                        </h2>

                        <Link href="/contato" className="mt-6 inline-block">
                            <Button className="bg-primary text-white px-6 py-3 fw-light uppercase rounded-md hover:bg-zinc-900/90">
                                Fale Conosco
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
