"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SERVICES } from "@/data/services";

export default function ServicosHome() {
  return (
    <section className="w-full bg-[var(--light)] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-10">
          <span className="block text-xl uppercase tracking-[0.25em] text-[color:var(--grey-custom)]">
            Confira os
          </span>
          <h2
            className="relative inline-block mt-1 text-[color:var(--dark-text)] text-4xl font-bold 
      after:content-[''] after:block after:w-20 after:h-[3px] after:bg-[color:var(--secondary)] after:mx-auto after:mt-2 rounded-full"
          >
            Nossos Serviços
          </h2>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <Link key={s.href} href={s.href} className="block">
              <article
                className="group overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-zinc-100 transition hover:shadow-md"
              >
                {/* Imagem */}
                <div className="relative h-80 w-full">
                  <Image
                    src={s.img}
                    alt={s.label}
                    className="object-cover"
                    fill
                  />

                  <span className="absolute bottom-5 left-5 rounded-full bg-primary px-5 py-2 text-[12px] tracking-wide text-white">
                    Serviços
                  </span>
                </div>

                {/* Conteúdo */}
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-zinc-900">{s.label}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-zinc-600">{s.desc}</p>

                  <div className="mt-4">
                    <Button
                      size="sm"
                      className="rounded-full bg-[var(--secondary)]  uppercase text-white hover:bg-[color:var(--primary)]"
                    >
                      Saiba mais
                    </Button>
                  </div>
                </div>
              </article>
            </Link>

          ))}
        </div>
      </div>
    </section>
  );
}
