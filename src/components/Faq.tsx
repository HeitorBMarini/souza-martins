"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus } from "lucide-react";

export default function FAQSection() {
  return (
    <section className="w-full py-12 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <div className="mb-10 text-center md:text-left">
          <h2 className="text-3xl font-medium  leading-tight tracking-tight text-[#1A2602] md:text-4xl">
            Dúvidas frequentes
          </h2>
        </div>

        <div className="grid gap-10 ">
      
          {/* FAQ */}
          <Accordion
            type="single"
            collapsible
            className="grid gap-6 md:grid-cols-2"
          >
            {faq.map((f, i) => (
              <AccordionItem
                key={f.q}
                value={`item-${i + 1}`}
                // Último ocupa 2 colunas
                className={`overflow-hidden rounded-2xl bg-[var(--light)] px-5 py-4 shadow-sm ring-1 ring-zinc-100 ${
                  i === faq.length - 1 ? "md:col-span-2" : ""
                }`}
              >
                <AccordionTrigger className="group flex w-full items-center justify-between text-left [&>svg]:hidden">
                  <span className="text-sm font-medium text-[#303030]">
                    {i + 1}. {f.q}
                  </span>

                  <span className="shrink-0 rounded-sm bg-[#f6f6f6] p-1.5 text-[#888] transition-colors group-hover:bg-zinc-200">
                    <Plus className="h-4 w-4" />
                  </span>
                </AccordionTrigger>

                <AccordionContent className="pt-2 text-sm text-[#303030] leading-relaxed">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

const faq = [
  {
    q: "O que nos diferencia?",
    a: "Atendimento personalizado e soluções sob medida para cada cliente.",
  },
  {
    q: "Usam materiais de qualidade?",
    a: "Sim. Trabalhamos apenas com materiais resistentes e de alta durabilidade.",
  },
  {
    q: "Vocês cumprem os prazos?",
    a: "Nosso compromisso é entregar sempre no prazo combinado, com planejamento em cada etapa.",
  },
  {
    q: "O acabamento é diferenciado?",
    a: "Sim. Garantimos acabamento premium que valoriza visualmente e aumenta a durabilidade.",
  },
  {
    q: "A equipe é experiente?",
    a: "Contamos com profissionais qualificados e anos de experiência no setor.",
  },
];
