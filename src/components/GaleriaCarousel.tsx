"use client";

import Image, { type StaticImageData } from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Search } from "lucide-react";
import useFancybox from "./Galeria/useFancybox";

// ---- importe suas imagens .jpg daqui:
import g1  from "@/components/imgs/galeria/galeria.jpg";
import g2  from "@/components/imgs/galeria/galeria-2.jpg";
import g3  from "@/components/imgs/galeria/galeria-3.jpg";
import g4  from "@/components/imgs/galeria/galeria-4.jpg";
import g5  from "@/components/imgs/galeria/galeria-5.jpg";
import g6  from "@/components/imgs/galeria/galeria-6.jpg";
import g7  from "@/components/imgs/galeria/galeria-7.jpg";
import g8  from "@/components/imgs/galeria/galeria-8.jpg";
import g9  from "@/components/imgs/galeria/galeria-9.jpg";
import g10 from "@/components/imgs/galeria/galeria-10.jpg";
import g11 from "@/components/imgs/galeria/galeria-11.jpg";
import g12 from "@/components/imgs/galeria/galeria-12.jpg";
import g13 from "@/components/imgs/galeria/galeria-13.jpg";
import g14 from "@/components/imgs/galeria/galeria-14.jpg";
import g15 from "@/components/imgs/galeria/galeria-15.jpg";
import g16 from "@/components/imgs/galeria/galeria-16.jpg";
import g17 from "@/components/imgs/galeria/galeria-17.jpg";
import g18 from "@/components/imgs/galeria/galeria-18.jpg";
import g19 from "@/components/imgs/galeria/galeria-19.jpg";

// Coloque aqui todas as que tiver
const IMAGES: (StaticImageData | string)[] = [
  g1, g2, g3, g4, g5, g6, g7, g8, g9, g10,
  g11, g12, g13, g14, g15, g16, g17, g18, g19,
];

function srcToHref(src: StaticImageData | string) {
  return typeof src === "string" ? src : src.src;
}

export default function GaleriaCarousel() {
  const [fancyboxRef] = useFancybox({}); // opções opcionais

  return (
    <section className="w-full py-16 bg-[var(--light)]">
      <div className="mx-auto max-w-7xl px-4 text-center" ref={fancyboxRef}>
        <p className="text-sm text-zinc-500">Veja</p>
        <h2 className="text-2xl md:text-3xl font-bold text-[var(--primary)] mb-8">
          Nossos Trabalhos
        </h2>

        <div className="relative">
          <Splide
            aria-label="Galeria de trabalhos"
            options={{
              type: "loop",
              perPage: 4,
              perMove: 1,
              autoplay: true,
              gap: "1rem",
              speed: 1000,
              arrows: true,
              pagination: false,
              breakpoints: {
                1280: { perPage: 4 },
                1024: { perPage: 3 },
                768:  { perPage: 2 },
                480:  { perPage: 1 },
              },
            }}
            className="galeria-splide !px-2"
          >
            {IMAGES.map((src, i) => (
              <SplideSlide key={i}>
                <a
                  data-fancybox="galeria"
                  href={srcToHref(src)} // abre no fancybox
                  className="group relative block w-full overflow-hidden rounded-xl"
                  title="Ampliar"
                >
                  <div className="relative h-[220px] w-full">
                    <Image
                      src={src}
                      alt={`Trabalho ${i + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover"
                      priority={i < 4}
                    />
                  </div>

                  {/* overlay */}
                  <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  {/* lupa animada */}
                  <span className="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-4 translate-y-10 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/90 shadow">
                      <Search className="h-5 w-5 text-[var(--primary)]" />
                    </span>
                  </span>
                </a>
              </SplideSlide>
            ))}
          </Splide>

          {/* setas do Splide centralizadas embaixo */}
          <style jsx global>{`
            .galeria-splide .splide__arrows {
              position: absolute;
              left: 50%;
              transform: translateX(-50%);
              bottom: -48px;
              display: flex;
              gap: 12px;
              z-index: 5;
            }
            .galeria-splide .splide__arrow {
              position: static !important;
              width: auto;
              height: auto;
              background: transparent !important;
              border: 0 !important;
              box-shadow: none !important;
              opacity: 1;
              padding: 2px;
              color: #1a2602;
            }
            .galeria-splide .splide__arrow svg {
              width: 22px;
              height: 22px;
              fill: currentColor;
            }
          `}</style>
        </div>
      </div>
    </section>
  );
}
