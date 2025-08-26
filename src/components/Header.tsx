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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all
        ${scrolled ? "bg-primary/95 backdrop-blur border-b border-white/10 shadow-sm" : "bg-primary sm:bg-transparent"}
      `}
    >
      <div className="mx-auto max-w-7xl px-4 pt-14 pb-8 sm:pb-7 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image src={logo} alt="Souza Martins" priority width={150} height={200} />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center mt-4 gap-2">
            {MAIN_LINKS.slice(0, 2).map((item) => (
              <NavLink key={item.href} item={item} isActive={pathname === item.href} />
            ))}

            {/* Serviços (Dropdown desktop) */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className={`relative px-3 py-2 text-sm uppercase tracking-wide
                    ${pathname.startsWith("/servicos") ? "text-white" : "text-zinc-300"}
                    hover:text-white hover:bg-transparent
                    after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white 
                    after:transition-all after:duration-300 after:content-[''] 
                    hover:after:w-full
                  `}
                >
                  Serviços
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="min-w-56">
                <DropdownMenuLabel>Serviços</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {SERVICES.map((s) => (
                  <DropdownMenuItem key={s.href} asChild>
                    <Link href={s.href}>{s.label}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <NavLink item={MAIN_LINKS[2]} isActive={pathname === MAIN_LINKS[2].href} />
          </nav>

          {/* Mobile button */}
          <button
            className="md:hidden inline-flex pt-5 sm:pt-0 items-center justify-center rounded-md p-2 text-zinc-300 hover:text-white focus:outline-none"
            onClick={() => setOpenMobile((v) => !v)}
            aria-label="Abrir menu"
            aria-expanded={openMobile}
          >
            <span className="relative block h-6 w-6">
              <Menu
                className={`absolute inset-0 h-6 w-6 transform transition-all duration-300 ${openMobile ? "opacity-0 rotate-90 scale-75" : "opacity-100 rotate-0 scale-100"}`}
              />
              <X
                className={`absolute inset-0 h-6 w-6 transform transition-all duration-300 ${openMobile ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-75"}`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {openMobile && (
        <div className="md:hidden border-t border-white/10 bg-primary/95 backdrop-blur">
          <div className="px-4 py-3 space-y-1">
            {MAIN_LINKS.slice(0, 2).map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpenMobile(false)}
                  className={`block px-3 py-2 text-sm uppercase tracking-wide transition ${isActive ? "text-white" : "text-zinc-300 hover:text-white"}`}
                >
                  {item.label}
                </Link>
              );
            })}

            {/* Serviços (Dropdown mobile) */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="w-full flex items-center justify-between px-3 py-2 text-sm uppercase tracking-wide text-zinc-300 hover:text-white">
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
              className={`block px-3 py-2 text-sm uppercase tracking-wide ${pathname === "/contato" ? "text-white" : "text-zinc-300 hover:text-white"}`}
            >
              Contato
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
