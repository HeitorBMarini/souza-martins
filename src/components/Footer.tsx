"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Instagram,
  Facebook,
  Phone,
  Mail,
  MessageSquareText,
} from "lucide-react";

import logo from "@/components/imgs/logo-souza.png";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-white border-primary border-t-1">
      {/* conteúdo principal */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 text-center md:text-left">
          {/* Coluna: logo + texto */}
          <div className="md:col-span-4 flex flex-col items-center md:items-start">
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src={logo}
                alt="Souza Martins"
                className="h-auto"
                priority
              />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-zinc-600 max-w-xs">
              Lorem ipsum dolor sit amet consectetur. Egestas gravida sed neque
              sed proin facilisis egestas. Ornare massa viverra vel nunc purus
              quis lorem. Enim et auctor.
            </p>
          </div>

          {/* Coluna: navegação */}
          <div className="md:col-span-3 flex flex-col items-center md:items-start">
            <h4 className="text-base font-semibold text-[color:var(--dark-text,#0f172a)]">
              Navegação
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-zinc-700 hover:text-[color:var(--primary)] transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/sobre-nos"
                  className="text-zinc-700 hover:text-[color:var(--primary)] transition"
                >
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link
                  href="/servicos"
                  className="text-zinc-700 hover:text-[color:var(--primary)] transition"
                >
                  Serviços
                </Link>
              </li>
              <li>
                <Link
                  href="/contato"
                  className="text-zinc-700 hover:text-[color:var(--primary)] transition"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna: contato */}
          <div className="md:col-span-4 flex flex-col items-center md:items-start">
            <h4 className="text-base font-semibold text-[color:var(--dark-text,#0f172a)]">
              Contato
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-center justify-center md:justify-start gap-2 text-zinc-700">
                <span className="inline-flex size-6 items-center justify-center rounded bg-[color:var(--primary)] text-white">
                  <Phone className="size-4" />
                </span>
                <a
                  href="tel:+5511975981616"
                  className="hover:text-[color:var(--primary)]"
                >
                  (11) 97598-1616
                </a>
              </li>

              <li className="flex items-center justify-center md:justify-start gap-2 text-zinc-700">
                <span className="inline-flex size-6 items-center justify-center rounded bg-[color:var(--primary)] text-white">
                  <MessageSquareText className="size-4" />
                </span>
                <a
                  href="https://wa.me/5511975981616"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[color:var(--primary)]"
                >
                  (11) 97598-1616
                </a>
              </li>

              <li className="flex items-center justify-center md:justify-start gap-2 text-zinc-700">
                <span className="inline-flex size-6 items-center justify-center rounded bg-[color:var(--primary)] text-white">
                  <Mail className="size-4" />
                </span>
                <a
                  href="mailto:rafaelsousaesilva03@gmail.com"
                  className="hover:text-[color:var(--primary)] break-all"
                >
                  rafaelsousaesilva03@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* barra inferior */}
      <div className="relative bg-[color:var(--primary)] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 text-center text-xs">
          Copyright © {year} Souza Martins serralheria e pintura. Todos os
          direitos reservados.
        </div>
      </div>
    </footer>
  );
}
