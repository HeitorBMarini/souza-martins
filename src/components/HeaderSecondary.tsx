"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { SERVICE_CATEGORIES } from "@/data/services";

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

import logo from "@/components/imgs/logo-souza.png";

type NavItem = { label: string; href: string };

const MAIN_LINKS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Sobre nós", href: "/sobre-nos" },
  { label: "Contato", href: "/contato" },
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

/* --------- MOBILE: Acordeão por categoria --------- */
function MobileCategory({
  label,
  category,
  onNavigate,
}: {
  label: string;
  category: string;
  onNavigate: () => void;
}) {
  const [open, setOpen] = useState(false);
  const cat = SERVICE_CATEGORIES.find((c) => c.category === category);
  if (!cat) return null;

  return (
    <div className="rounded-md">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between px-3 py-2 text-sm uppercase tracking-wide text-zinc-300 hover:text-white"
        aria-expanded={open}
        aria-controls={`cat-${category}`}
      >
        {label}
        <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div id={`cat-${category}`} className="pl-3 pb-2">
          {cat.children.map((s) => (
            <Link
              key={s.slug}
              href={`/servicos/${category}/${s.slug}`}
              onClick={onNavigate}
              className="block px-3 py-1.5 text-sm text-zinc-300 hover:text-white"
            >
              {s.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function HeaderSecondary() {
  const pathname = usePathname();
  const [openMobile, setOpenMobile] = useState(false);
  const [openMobileServices, setOpenMobileServices] = useState(false); // dropdown de serviços no mobile
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpenMobile(false);
    setOpenMobileServices(false);
  }, [pathname]);

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

            {/* Serviços: link + caret (desktop) */}
            <div className="relative flex items-center">
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

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button
                    type="button"
                    aria-label="Abrir submenu de serviços"
                    className={`ml-1 inline-flex h-8 w-8 items-center justify-center rounded-md
                      ${scrolled ? "text-white hover:bg-white/10" : "text-zinc-700 hover:bg-zinc-100"}
                      transition
                    `}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </button>
                </DropdownMenuTrigger>

                <DropdownMenuContent align="end" className="min-w-60">
                  {SERVICE_CATEGORIES.map((cat) => (
                    <DropdownMenuSub key={cat.category}>
                      <DropdownMenuSubTrigger>{cat.label}</DropdownMenuSubTrigger>
                      <DropdownMenuSubContent className="min-w-56">
                        {cat.children.map((s) => (
                          <DropdownMenuItem key={s.slug} asChild>
                            <Link href={`/servicos/${cat.category}/${s.slug}`}>{s.label}</Link>
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

              {/* Linha de “Serviços” no mobile */}
              <div className="flex items-center justify-between px-3 py-2">
                {/* 👉 TEXTO: sempre leva para /servicos */}
                <Link
                  href="/servicos"
                  onClick={() => {
                    setOpenMobile(false);
                    setOpenMobileServices(false);
                  }}
                  className="text-sm uppercase tracking-wide text-zinc-200 hover:text-white"
                >
                  Serviços
                </Link>

                {/* 👉 CARET: só abre/fecha o dropdown */}
                <button
                  type="button"
                  onClick={() => setOpenMobileServices((v) => !v)}
                  aria-expanded={openMobileServices}
                  aria-controls="mobile-services-panel"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-md text-zinc-200 hover:text-white hover:bg-white/10"
                >
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${openMobileServices ? "rotate-180" : ""}`}
                  />
                </button>
              </div>


              {/* Painel rolável de categorias/serviços (mobile) */}
              {openMobileServices && (
                <div
                  id="mobile-services-panel"
                  className="mt-1 mx-2 rounded-md border border-white/10 bg-primary/90 max-h-[60vh] overflow-y-auto overscroll-contain"
                >
                  <div className="px-2 py-2 space-y-1">
                    {SERVICE_CATEGORIES.map((cat) => (
                      <MobileCategory
                        key={cat.category}
                        label={cat.label}
                        category={cat.category}
                        onNavigate={() => {
                          setOpenMobile(false);
                          setOpenMobileServices(false);
                        }}
                      />
                    ))}
                  </div>
                </div>
              )}

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
