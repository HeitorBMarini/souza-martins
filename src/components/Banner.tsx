"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Banner() {
  return (
    <section className="relative w-full min-h-[90vh] overflow-hidden hidden sm:block">
      {/* Vídeo de fundo */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/video/video-banner.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
      />

      {/* Overlay escuro */}
      <div
        className="absolute inset-0"
        style={{ background: "rgba(0, 0, 0, 0.52)" }}
      />

      {/* Gradiente lateral */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

      {/* Conteúdo */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="min-h-[84vh] flex items-center">
          <div className="max-w-3xl pt-52">
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
              Não é só metal, é{" "}
              <span className="text-white/90">tranquilidade</span>
              <br />
              Estruturas que garantem sua{" "}
              <span className="text-white">segurança.</span>
            </h2>

            <div className="mt-8">
              <Link href="/contato">
                <Button
                  size="lg"
                  className="uppercase tracking-wide font-semibold cursor-pointer"
                >
                  Solicite um orçamento
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
