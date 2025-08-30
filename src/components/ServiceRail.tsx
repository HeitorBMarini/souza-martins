"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { ChevronLeft, Wrench, Hammer, Factory } from "lucide-react";

const SERVICES = [
  { label: "Serralheria", href: "/servicos/serralheria", icon: Wrench },
  { label: "Solda", href: "/servicos/solda", icon: Hammer },
  { label: "Estruturas Metálicas", href: "/servicos/estruturas", icon: Factory },
];

export default function ServiceRail() {
  const [open, setOpen] = useState(false);

  const handleEnter = useCallback(() => setOpen(true), []);
  const handleLeave = useCallback(() => setOpen(false), []);
  const toggle = useCallback(() => setOpen((v) => !v), []);

  return (
    <div
      className="fixed top-1/2 right-0 -translate-y-1/2 z-50 hidden md:block [--rail-w:260px]"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      aria-label="Atalhos de serviços"
    >
      {/* Painel que desliza */}
      <aside
        className={`
          absolute top-1/2 right-0 -translate-y-1/2
          w-[var(--rail-w)] max-h-[80vh]
          rounded-l-xl bg-primary text-white shadow-xl
          ring-1 ring-black/10 overflow-y-auto overscroll-contain
          transition-transform duration-300
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
        style={{ contain: "layout paint" } as any}
      >
        <header className="px-4 py-3 border-b border-white/10 font-semibold uppercase tracking-wide text-sm">
          Serviços
        </header>

        <nav className="p-2 space-y-1">
          {SERVICES.map(({ label, href, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className="flex items-center gap-3 px-3 py-2 rounded-md text-sm text-zinc-200 hover:text-white hover:bg-white/10 transition"
            >
              <Icon className="h-4 w-4 shrink-0" />
              {label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Botão/aba que fica na borda direita */}
      <button
        type="button"
        onClick={toggle}
        aria-expanded={open}
        aria-controls="service-rail"
        className={`
          absolute top-1/2 right-0 -translate-y-1/2
          h-16 w-8 rounded-l-md
          bg-[var(--secondary)] text-white shadow-lg
          flex items-center justify-center
          transition-colors
          hover:bg-[color:var(--primary)]
          focus:outline-none focus:ring-2 focus:ring-white/40
        `}
        title={open ? "Fechar serviços" : "Abrir serviços"}
      >
        <ChevronLeft className={`h-4 w-4 transition-transform ${open ? "" : "rotate-180"}`} />
      </button>
    </div>
  );
}
