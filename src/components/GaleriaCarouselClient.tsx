"use client";

import * as React from "react";
import Image, { type StaticImageData } from "next/image";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Search } from "lucide-react";
import useFancybox from "@/hooks/useFancybox";

type Props = { images: (StaticImageData | string)[] };

export default function GaleriaCarouselClient({ images }: Props) {
  const [setRoot] = useFancybox({
    Thumbs: false,
    Toolbar: { display: ["close"] },
    animated: true,
    compact: false,
    dragToClose: true,
  });

  return (
    <section className="w-full py-16 bg-[var(--light)]" ref={setRoot}>
      <div className="mx-auto max-w-7xl px-4 text-center">
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
                768: { perPage: 2 },
                480:  { perPage: 1 },
              },
            }}
            className="galeria-splide !px-2"
          >
            {images.map((img, i) => {
              const imgSrc = typeof img === "string" ? img : img.src;
              return (
                <SplideSlide key={imgSrc + i}>
                  {/* Fancybox: anchor com data-fancybox e href do arquivo grande */}
                  <a
                    data-fancybox="galeria"
                    href={imgSrc}
                    className="group relative block w-full overflow-hidden rounded-xl"
                    title="Ampliar"
                  >
                    <div className="relative h-[220px] w-full">
                      <Image
                        src={img}
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
              );
            })}
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
