"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
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
      className={`relative px-3 py-2 text-sm uppercase tracking-wide transition
        ${
          scrolled
            ? isActive
              ? "text-white"
              : "text-white hover:text-grey-300"
            : isActive
            ? "text-black"
            : "text-zinc-900 hover:text-white"
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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all pt-10 pb-10
        ${
          scrolled
            ? "bg-primary border-b border-zinc-200 shadow-sm"
            : "bg-white"
        }
      `}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={logo}
              alt="Souza Martins"
              priority
              width={150}
              height={200}
            />
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

            {/* Dropdown Serviços */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className={`relative px-3 py-2 text-sm uppercase tracking-wide
                    ${
                      scrolled
                        ? pathname.startsWith("/servicos")
                          ? "text-white"
                          : "text-white"
                        : pathname.startsWith("/servicos")
                        ? "text-white"
                        : "text-zinc-300"
                    }
                    hover:bg-transparent hover:${
                      scrolled ? "text-white" : "text-white"
                    }
                    after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 ${
                      scrolled ? "after:bg-black" : "after:bg-white"
                    }
                    after:transition-all after:duration-300 after:content-['']
                    hover:after:w-full
                  `}
                >
                  Serviços
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className={`min-w-56 ${
                  scrolled ? "bg-white text-black" : "bg-primary text-white"
                }`}
              >
                <DropdownMenuLabel>Serviços</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {SERVICES.map((s) => (
                  <DropdownMenuItem key={s.href} asChild>
                    <Link href={s.href}>{s.label}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <NavLink
              item={MAIN_LINKS[2]}
              isActive={pathname === MAIN_LINKS[2].href}
              scrolled={scrolled}
            />
          </nav>

          {/* Mobile button */}
          <button
            className={`md:hidden inline-flex items-center justify-center rounded-md p-2 ${
              scrolled
                ? "text-white hover:text-black"
                : "text-white hover:text-zinc-900"
            } focus:outline-none`}
            onClick={() => setOpenMobile((v) => !v)}
            aria-label="Abrir menu"
            aria-expanded={openMobile}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
