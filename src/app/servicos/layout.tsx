// app/servicos/layout.tsx
import { ReactNode } from "react";
import HeaderSecondary from "@/components/HeaderSecondary";
import BreadcrumbClient from "./BreadcrumbClient";
import TitleClient from "./TitleClient";
import ServiceRail from "@/components/ServiceRail";

export default function ServicosLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <HeaderSecondary />
            <ServiceRail />

      <div className="w-full bg-white pt-50 md:pt-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
          <BreadcrumbClient />
          <TitleClient />   {/* 👈 título/subtítulo dinâmicos */}
        </div>
      </div>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {children}
      </main>

    </>
  );
}
