"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import HeaderSecondary from "@/components/HeaderSecondary";
import { Home as HomeIcon, ChevronRight } from "lucide-react";

export default function ServicosLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean); // ex: ["servicos","contato"]

  const lastSegment = segments[segments.length - 1];
  const pageTitle =
    lastSegment?.charAt(0).toUpperCase() + lastSegment?.slice(1);

  return (
    <>
      <HeaderSecondary />

      {/* Breadcrumb + Título da página */}
      <div className="w-full bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20">
          <Breadcrumb>
            <BreadcrumbList className="flex items-center gap-2 text-sm text-black">
              {/* Home */}
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/" className="flex items-center gap-1">
                    <HomeIcon size={16} className="text-black" />
                    Home
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>

              {segments.map((seg, idx) => {
                const href = "/" + segments.slice(0, idx + 1).join("/");
                const label = seg.charAt(0).toUpperCase() + seg.slice(1);

                return (
                  <span key={href} className="inline-flex items-center gap-2">
                    <BreadcrumbSeparator>
                      <ChevronRight size={14} className="text-zinc-400" />
                    </BreadcrumbSeparator>
                    <BreadcrumbItem>
                      {idx === segments.length - 1 ? (
                        <BreadcrumbPage className="text-black font-bold">
                          {label}
                        </BreadcrumbPage>
                      ) : (
                        <BreadcrumbLink asChild>
                          <Link href={href}>{label}</Link>
                        </BreadcrumbLink>
                      )}
                    </BreadcrumbItem>
                  </span>
                );
              })}
            </BreadcrumbList>
          </Breadcrumb>

          {/* Page Title */}
          {pageTitle && (
            <h1 className="mt-6 text-3xl font-bold text-black border-b-3 border-primary inline-block pb-1">
              {pageTitle}
            </h1>
          )}
        </div>
      </div>

      <main className="pt-6">{children}</main>
    </>
  );
}
