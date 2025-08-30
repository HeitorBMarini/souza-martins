"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

import logo from "@/components/imgs/logo-souza.png";

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
  scrolled,
  onClick,
}: {
  item: NavItem;
  isActive: boolean;
  scrolled: boolean;
  onClick?: () => void;
}) {
  return (
    <Link
      href={item.href}
      onClick={onClick}
      className={`relative px-3 py-2 text-sm uppercase tracking-wide transition font-bold
        ${scrolled
          ? isActive
            ? "text-white"
            : "text-white hover:text-gray-300"
          : isActive
            ? "text-black"
            : "text-zinc-900 hover:text-zinc-600"
        }
        after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0
        ${scrolled ? "after:bg-black" : "after:bg-white"}
        after:transition-all after:duration-300 after:content-['']
        hover:after:w-full
      `}
    >
      {item.label}
    </Link>
  );
}

export default function HeaderSecondary() {
  const pathname = usePathname();
  const [openMobile, setOpenMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpenMobile(false);
  }, [pathname]);

  const isServicos = pathname.startsWith("/servicos");

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all pt-10 pb-10 ${scrolled ? "bg-primary border-b border-zinc-200 shadow-sm" : "md:bg-white bg-primary"
        }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top bar */}
        <div className="h-20 flex items-center justify-between relative">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image src={logo} alt="Souza Martins" priority width={150} height={200} />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-2">
            {MAIN_LINKS.slice(0, 2).map((item) => (
              <NavLink
                key={item.href}
                item={item}
                isActive={pathname === item.href}
                scrolled={scrolled}
              />
            ))}

            {/* Serviços: link principal + caret que abre submenu (sem duplicar o link /servicos no menu) */}
            <div className="flex items-center">
              <Link
                href="/servicos"
                className={`px-3 py-2 text-sm uppercase tracking-wide transition font-bold
      ${scrolled ? "text-white" : isServicos ? "text-black" : "text-zinc-600"}
      hover:${scrolled ? "text-gray-300" : "text-zinc-500"}
    `}
              >
                Serviços
              </Link>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    aria-label="Abrir submenu de Serviços"
                    className={`p-2 ml-1 hover:bg-transparent ${scrolled ? "text-white hover:text-gray-300" : "text-black hover:text-zinc-700"
                      }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent
                  align="end"
                  sideOffset={6}
                  // evita overflow horizontal e “pulo” lateral
                  className={`min-w-56 max-w-[calc(100vw-2rem)] overflow-x-hidden ${scrolled ? "" : "bg-primary text-white"
                    }`}
                >
                  {SERVICES.map((s) => (
                    <DropdownMenuItem key={s.href} asChild>
                      <Link href={s.href}>{s.label}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>


            <NavLink
              item={MAIN_LINKS[2]}
              isActive={pathname === MAIN_LINKS[2].href}
              scrolled={scrolled}
            />
          </nav>

          {/* Mobile button */}
          <button
            className={`md:hidden inline-flex items-center justify-center rounded-md p-2 ${scrolled ? "text-white hover:text-black" : "text-white hover:text-zinc-900"
              } focus:outline-none`}
            onClick={() => setOpenMobile((v) => !v)}
            aria-label="Abrir menu"
            aria-expanded={openMobile}
            aria-controls="mobile-menu"
          >
            {openMobile ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu panel */}
        {openMobile && (
          <div
            id="mobile-menu"
            className="md:hidden absolute left-0 right-0 top-full bg-primary/95 backdrop-blur z-40 shadow-lg border-t border-white/10"
          >
            <nav className="flex flex-col p-4 space-y-1 text-white">
              {MAIN_LINKS.slice(0, 2).map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpenMobile(false)}
                    className={`block px-3 py-2 text-sm uppercase tracking-wide rounded-md transition ${isActive ? "bg-white/10" : "text-zinc-200 hover:text-white hover:bg-white/10"
                      }`}
                  >
                    {item.label}
                  </Link>
                );
              })}

              {/* Linha de Serviços no mobile: texto leva a /servicos; caret abre a lista */}
              <div className="rounded-md">
                <div className="flex items-center justify-between">
                  <Link
                    href="/servicos"
                    onClick={() => setOpenMobile(false)}
                    className="block flex-1 px-3 py-2 text-sm uppercase tracking-wide text-zinc-200 hover:text-white rounded-md"
                  >
                    Serviços
                  </Link>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button
                        aria-label="Abrir submenu de Serviços"
                        className="px-2 py-2 text-zinc-200 hover:text-white"
                      >
                        <ChevronDown className="h-4 w-4" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align="end"
                      sideOffset={6}
                      className="w-[calc(100vw-2rem)] mx-2 rounded-md border-0 bg-primary text-white"
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
                          className="w-full px-3 py-2 uppercase tracking-wide text-sm text-zinc-300 hover:bg-white/10 hover:text-white"
                        >
                          <Link href={s.href}>{s.label}</Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>

              <Link
                href="/contato"
                onClick={() => setOpenMobile(false)}
                className={`block px-3 py-2 text-sm uppercase tracking-wide rounded-md ${pathname === "/contato"
                  ? "bg-white/10"
                  : "text-zinc-200 hover:text-white hover:bg-white/10"
                  }`}
              >
                Contato
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
