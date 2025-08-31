"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, ChevronDown, X } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

import logo from "@/components/imgs/logo-souza.png";
import { SERVICE_CATEGORIES } from "@/data/services";

type NavItem = { label: string; href: string };

const MAIN_LINKS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Sobre nós", href: "/sobre-nos" },
  { label: "Contato", href: "/contato" },
];

const SERVICES: NavItem[] = [
  { label: "Serralheria", href: "/servicos/serralheria" },
  { label: "Solda", href: "/servicos/solda" },
  { label: "Estruturas Metálicas", href: "/servicos/estruturas" },
];

function NavLink({
  item,
  isActive,
  onClick,
}: {
  item: NavItem;
  isActive: boolean;
  onClick?: () => void;
}) {
  return (
    <Link
      href={item.href}
      onClick={onClick}
      className={`relative px-3 py-2 text-sm uppercase tracking-wide transition
        ${isActive ? "text-white" : "text-zinc-300 hover:text-white"}
        after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white
        after:transition-all after:duration-300 after:content-['']
        hover:after:w-full
      `}
    >
      {item.label}
    </Link>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [openMobile, setOpenMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // fecha o menu ao trocar de rota
  useEffect(() => {
    setOpenMobile(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all
        ${scrolled ? "bg-primary/95 backdrop-blur border-b border-white/10 shadow-sm" : "bg-primary sm:bg-transparent"}
      `}
    >
      <div className="mx-auto max-w-7xl px-4 pt-10 pb-8 sm:pb-7 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between relative">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2" aria-label="Ir para a Home">
            <Image src={logo} alt="Souza Martins" priority width={150} height={200} />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-2">
            {MAIN_LINKS.slice(0, 2).map((item) => (
              <NavLink
                key={item.href}
                item={item}
                isActive={pathname === item.href}
              />
            ))}

            {/* Serviços: link + caret separado para dropdown */}
            <div className="relative flex items-center">
              {/* Link que navega para /servicos */}
              <Link
                href="/servicos"
                className={`relative px-3 py-2 text-sm uppercase tracking-wide transition font-bold
        ${scrolled ? "text-white hover:text-gray-300" : "text-zinc-900 hover:text-zinc-600"}
        after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0
        ${scrolled ? "after:bg-white" : "after:bg-black"}
        after:transition-all after:duration-300 after:content-[''] hover:after:w-full
      `}
              >
                Serviços
              </Link>

              {/* Caret que abre o submenu */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button
                    type="button"
                    aria-label="Abrir submenu de serviços"
                    className={`ml-1 inline-flex h-8 w-8 items-center justify-center rounded-md
            ${scrolled
                        ? "text-white hover:bg-white/10"
                        : "text-zinc-700 hover:bg-zinc-100"}
            transition`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </button>
                </DropdownMenuTrigger>

                <DropdownMenuContent align="end" className="min-w-60">
                  <DropdownMenuLabel>Categorias</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {SERVICE_CATEGORIES.map((cat) => (
                    <DropdownMenuSub key={cat.category}>
                      <DropdownMenuSubTrigger>{cat.label}</DropdownMenuSubTrigger>
                      <DropdownMenuSubContent className="min-w-56">
                        {cat.children.map((s) => (
                          <DropdownMenuItem key={s.slug} asChild>
                            <Link href={`/servicos/${cat.category}/${s.slug}`}>
                              {s.label}
                            </Link>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuSubContent>
                    </DropdownMenuSub>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <NavLink
              item={MAIN_LINKS[2]}
              isActive={pathname === MAIN_LINKS[2].href}
            />
          </nav>


          {/* Botão mobile */}
          <button
            type="button"
            className="md:hidden inline-flex pt-5 sm:pt-0 items-center justify-center rounded-md p-2 text-zinc-300 hover:text-white focus:outline-none"
            onClick={() => setOpenMobile((v) => !v)}
            aria-label="Abrir menu"
            aria-expanded={openMobile}
            aria-controls="mobile-menu"
          >
            <span className="relative block h-6 w-6">
              <Menu
                className={`absolute inset-0 h-6 w-6 transform transition-all duration-300 ${openMobile ? "opacity-0 rotate-90 scale-75" : "opacity-100 rotate-0 scale-100"
                  }`}
              />
              <X
                className={`absolute inset-0 h-6 w-6 transform transition-all duration-300 ${openMobile ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-75"
                  }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile nav (painel abaixo do header) */}
      {openMobile && (
        <div
          id="mobile-menu"
          className="md:hidden absolute left-0 right-0 top-full bg-primary/95 backdrop-blur z-40 border-t border-white/10 shadow-lg"
        >
          <div className="px-4 py-3 space-y-1">
            {MAIN_LINKS.slice(0, 2).map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpenMobile(false)}
                  className={`block px-3 py-2 text-sm uppercase tracking-wide transition ${isActive ? "text-white" : "text-zinc-300 hover:text-white"
                    }`}
                >
                  {item.label}
                </Link>
              );
            })}

            {/* Serviços (Dropdown mobile) */}
            <DropdownMenu modal={false}>
              <DropdownMenuTrigger asChild>
                <button
                  type="button"
                  className="w-full flex items-center justify-between px-3 py-2 text-sm uppercase tracking-wide text-zinc-300 hover:text-white"
                >
                  Serviços
                  <ChevronDown className="h-4 w-4" />
                </button>
              </DropdownMenuTrigger>

              <DropdownMenuContent
                align="start"
                sideOffset={4}
                className="w-[100vw] mx-0 rounded-none border-0 bg-primary text-white"
              >
                <DropdownMenuLabel className="px-3 py-2 text-xs uppercase tracking-widest text-zinc-400">
                  Serviços
                </DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-zinc-700" />

                {SERVICES.map((s) => (
                  <DropdownMenuItem
                    key={s.href}
                    asChild
                    onClick={() => setOpenMobile(false)}
                    className="w-full px-3 py-2 uppercase tracking-wide text-sm text-zinc-300 hover:bg-zinc-800 hover:text-white"
                  >
                    <Link href={s.href}>{s.label}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href="/contato"
              onClick={() => setOpenMobile(false)}
              className={`block px-3 py-2 text-sm uppercase tracking-wide ${pathname === "/contato" ? "text-white" : "text-zinc-300 hover:text-white"
                }`}
            >
              Contato
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
