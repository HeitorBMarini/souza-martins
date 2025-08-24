"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu } from "lucide-react";

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

function NavLink({ item, isActive, onClick }: { item: NavItem; isActive: boolean; onClick?: () => void }) {
  return (
    <Link
      href={item.href}
      onClick={onClick}
      className={`relative px-3 py-2 text-sm uppercase tracking-wide transition
        ${isActive ? "text-black" : "text-zinc-500 hover:text-black"}
        after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-black
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

  return (
    <header className="w-full relative z-50 bg-white ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-20 flex items-center justify-between pt-12">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={logo}
              alt="Souza Martins"
              priority
              width={160}   // largura controlada
              height={60}   // altura controlada
            />
          </Link>


          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-2">
            {MAIN_LINKS.slice(0, 2).map((item) => (
              <NavLink key={item.href} item={item} isActive={pathname === item.href} />
            ))}

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className={`relative px-3 py-2 text-sm uppercase tracking-wide
                    ${pathname.startsWith("/servicos") ? "text-black" : "text-zinc-500"}
                    hover:text-black hover:bg-transparent
                    after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-black
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
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-zinc-600 hover:text-black focus:outline-none"
            onClick={() => setOpenMobile((v) => !v)}
            aria-label="Abrir menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {openMobile && (
        <div className="md:hidden border-t border-zinc-200 bg-white">
          <div className="px-4 py-3 space-y-1">
            {MAIN_LINKS.slice(0, 2).map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpenMobile(false)}
                  className={`block px-3 py-2 text-sm uppercase tracking-wide ${isActive ? "text-black font-semibold" : "text-zinc-600 hover:text-black"
                    }`}
                >
                  {item.label}
                </Link>
              );
            })}

            <div className="pt-2">
              <div className="px-2 pb-1 text-[11px] font-semibold uppercase tracking-widest text-zinc-500">
                Serviços
              </div>
              {SERVICES.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  onClick={() => setOpenMobile(false)}
                  className={`block px-2 py-2 text-sm ${pathname === s.href ? "text-black font-semibold" : "text-zinc-600 hover:text-black"
                    }`}
                >
                  {s.label}
                </Link>
              ))}
            </div>

            <Link
              href="/contato"
              onClick={() => setOpenMobile(false)}
              className={`block px-2 py-2 text-sm uppercase tracking-wide ${pathname === "/contato" ? "text-black font-semibold" : "text-zinc-600 hover:text-black"
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
