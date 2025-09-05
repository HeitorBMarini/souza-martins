"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { POSTS } from "@/data/blog";

export default function BlogRail() {
  const pathname = usePathname();
  const isBlog = pathname.startsWith("/blog");
  const [open, setOpen] = useState(false);

  // fecha o painel quando trocar de rota
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const currentSlug = useMemo(() => pathname.split("/").at(-1) ?? "", [pathname]);
  if (!isBlog) return null;

  const ordered = useMemo(
    () => [...POSTS].sort((a, b) => (a.date < b.date ? 1 : -1)),
    []
  );

  /* ----------------------------- DESKTOP (md+) ----------------------------- */
  return (
    <>
      <div
        className="fixed top-1/2 right-0 -translate-y-1/2 z-50 hidden md:block [--rail-w:280px]"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        aria-label="Navegação do blog (desktop)"
      >
        <aside
          id="blog-rail-desktop"
          className={`absolute top-1/2 right-0 -translate-y-1/2
            w-[var(--rail-w)] max-h-[80vh] overflow-y-auto overscroll-contain
            rounded-l-xl bg-primary text-white shadow-xl ring-1 ring-black/10
            transition-transform duration-300
            ${open ? "translate-x-0" : "translate-x-full"}`}
        >
          <header className="px-4 py-3 border-b border-white/10 font-semibold uppercase tracking-wide text-sm">
            Blog — últimos artigos
          </header>

          <nav className="p-2 space-y-1">
            {ordered.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className={`block px-3 py-2 rounded-md text-sm transition
                  ${currentSlug === p.slug
                    ? "bg-white/10 text-white"
                    : "text-zinc-200 hover:text-white hover:bg-white/10"}`}
              >
                {p.title}
              </Link>
            ))}
          </nav>
        </aside>

        {/* Botão que “viaja” com o aside */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="blog-rail-desktop"
          className={`absolute top-1/2 -translate-y-1/2 h-16 w-8 rounded-l-md
            bg-[var(--secondary)] text-white shadow-lg flex items-center justify-center
            transition-all duration-300 ${open ? "right-[var(--rail-w)]" : "right-0"}
            hover:bg-[color:var(--primary)] focus:outline-none focus:ring-2 focus:ring-white/40`}
          title={open ? "Fechar blog" : "Abrir blog"}
        >
          <span className={`inline-block transition-transform ${open ? "" : "rotate-180"}`}>‹</span>
        </button>
      </div>

      {/* ------------------------------ MOBILE (<md) ------------------------------ */}
      {/* Backdrop */}
      <div
        className={`md:hidden fixed inset-0 z-[60] bg-black/40 transition-opacity
          ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* Off-canvas */}
      <aside
        id="blog-rail-mobile"
        className={`md:hidden fixed top-0 right-0 z-[61]
          h-full w-[85vw] max-w-[360px]
          bg-primary text-white shadow-2xl ring-1 ring-black/10
          transition-transform duration-300
          ${open ? "translate-x-0" : "translate-x-full"}`}
        aria-label="Navegação do blog (mobile)"
      >
        <header className="px-4 py-4 border-b border-white/10 flex items-center justify-between">
          <span className="font-semibold uppercase tracking-wide text-sm">Blog</span>
          <button
            onClick={() => setOpen(false)}
            className="rounded-md px-2 py-1 text-white/80 hover:text-white hover:bg-white/10"
            aria-label="Fechar"
          >
            Fechar
          </button>
        </header>

        <nav className="p-3 space-y-1 overflow-y-auto h-[calc(100%-56px)]">
          {ordered.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              onClick={() => setOpen(false)}
              className={`block px-3 py-2 rounded-md text-sm transition
                ${currentSlug === p.slug
                  ? "bg-white/10 text-white"
                  : "text-zinc-200 hover:text-white hover:bg-white/10"}`}
            >
              {p.title}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Botão flutuante mobile */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="blog-rail-mobile"
        className="md:hidden fixed bottom-50 right-4 z-[62]
          h-12 w-12 rounded-full bg-[var(--secondary)] text-white shadow-xl
          flex items-center justify-center active:scale-95
          hover:bg-[color:var(--primary)] focus:outline-none focus:ring-2 focus:ring-white/40"
        title={open ? "Fechar blog" : "Abrir blog"}
      >
        <span className={`text-xl leading-none transition-transform ${open ? "" : "rotate-180"}`}>‹</span>
      </button>
    </>
  );
}
