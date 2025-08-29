"use client";

import Image from "next/image";
import Link from "next/link";
import ctaImg from "@/components/imgs/cta.png";
import { Button } from "@/components/ui/button";

export default function Cta() {
  return (
    <section className="w-full">
      <div className="relative h-[22rem] md:h-[28rem] overflow-hidden">
        {/* Imagem como background */}
        <Image
          src={ctaImg}
          alt="Trabalhador realizando solda"
          priority
          fill
          className="object-cover object-center"
        />

        {/* Overlay escuro para contraste (opcional) */}
        <div className="absolute inset-0" />

        {/* Conteúdo */}
        <div className="relative z-20 h-full max-w-7xl mx-auto px-6 md:px-8 flex items-center">
          <div className="ml-auto text-left">
            <h2 className="text-2xl md:text-4xl font-medium leading-snug text-white">
              Entre em Contato e Realize <br />
              seu Orçamento Rápido e Fácil!
            </h2>

            <Link href="/contato" className="mt-6 flex items-start">
              <Button className="bg-primary text-white px-6 py-3 fw-light uppercase cursor-pointer rounded-md hover:bg-zinc-900/90">
                Fale Conosco
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
