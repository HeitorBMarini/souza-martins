// src/data/services.ts
import type { StaticImageData } from "next/image";

// TODO: troque pelo caminho das imagens reais
import imgPlaceholder from "@/components/imgs/servicos/servico.png";

export type ServiceItem = {
  slug: string;
  label: string;
  desc: string;
  img?: StaticImageData | string;
};

export type ServiceCategory = {
  category: "serralheria" | "pintura-metalica" | "portoes";
  label: string;
  desc: string;                // usamos em /servicos
  children: ServiceItem[];
};

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    category: "serralheria",
    label: "Serralheria",
    desc:
      "Fabricação sob medida, montagem e manutenção de peças e estruturas metálicas para residências e comércios.",
    children: [
      {
        slug: "estruturas-sob-medida",
        label: "Fabricação de Estruturas Metálicas Sob Medida",
        desc:
          "Desenvolvimento de estruturas conforme a necessidade do cliente: suportes, reforços, armações e soluções personalizadas.",
        img: imgPlaceholder,
      },
      {
        slug: "portoes-basculantes-deslizantes-automaticos",
        label: "Portões Basculantes, Deslizantes e Automáticos",
        desc:
          "Criação e instalação com diferentes mecanismos de abertura, com foco em praticidade, segurança e automação.",
        img: imgPlaceholder,
      },
      {
        slug: "grades-e-guarda-corpos",
        label: "Grades de Proteção e Guarda-Corpos",
        desc:
          "Grades para janelas, varandas e escadas, promovendo segurança sem abrir mão do design.",
        img: imgPlaceholder,
      },
      {
        slug: "mezaninos-e-coberturas",
        label: "Estruturas para Mezaninos e Coberturas",
        desc:
          "Construção de mezaninos e coberturas metálicas resistentes para áreas internas ou externas.",
        img: imgPlaceholder,
      },
      {
        slug: "corrimaos-e-escadas",
        label: "Corrimãos e Escadas Metálicas",
        desc:
          "Produção e instalação com design funcional e resistente para residências e comércios.",
        img: imgPlaceholder,
      },
      {
        slug: "manutencao-e-reparos",
        label: "Manutenção e Reparos em Peças Metálicas",
        desc:
          "Conserto e reforço de estruturas danificadas ou desgastadas pelo tempo.",
        img: imgPlaceholder,
      },
    ],
  },
  {
    category: "pintura-metalica",
    label: "Pintura Metálica",
    desc:
      "Pintura eletrostática, anticorrosiva e acabamentos personalizados para proteger e valorizar superfícies metálicas.",
    children: [
      {
        slug: "pintura-eletrostatica-po",
        label: "Pintura Eletrostática a Pó",
        desc:
          "Aplicação com cura térmica, oferecendo alta durabilidade e acabamento uniforme.",
        img: imgPlaceholder,
      },
      {
        slug: "pintura-anticorrosiva",
        label: "Pintura Anticorrosiva para Portões e Estruturas",
        desc:
          "Proteção contra ferrugem e desgaste com tintas específicas.",
        img: imgPlaceholder,
      },
      {
        slug: "restauracao-e-repintura",
        label: "Restauração e Repintura de Metais",
        desc:
          "Renovação de peças antigas, recuperando brilho e resistência.",
        img: imgPlaceholder,
      },
      {
        slug: "acabamentos-cores-texturas",
        label: "Acabamentos em Diversas Cores e Texturas",
        desc:
          "Fosco, brilhante, texturizado e outras opções personalizadas.",
        img: imgPlaceholder,
      },
    ],
  },
  {
    category: "portoes",
    label: "Portões",
    desc:
      "Fabricação sob medida, automação, manutenção e pintura de portões residenciais e comerciais.",
    children: [
      {
        slug: "fabricacao-instalacao",
        label: "Fabricação e Instalação de Portões Metálicos",
        desc:
          "Projetos sob medida com foco em durabilidade e estética.",
        img: imgPlaceholder,
      },
      {
        slug: "portoes-automaticos",
        label: "Portões Automáticos (Controle Remoto e Sistemas)",
        desc:
          "Automatização com controle remoto, sensores e aplicativos.",
        img: imgPlaceholder,
      },
      {
        slug: "reforma-e-manutencao",
        label: "Reforma e Manutenção de Portões",
        desc:
          "Ajustes, trocas de peças e melhorias para prolongar a vida útil.",
        img: imgPlaceholder,
      },
      {
        slug: "pintura-personalizacao",
        label: "Pintura e Personalização de Portões",
        desc:
          "Acabamentos modernos e cores personalizadas.",
        img: imgPlaceholder,
      },
    ],
  },
];

// Helpers
export function getCategory(category: string) {
  return SERVICE_CATEGORIES.find((c) => c.category === category);
}

export function getService(category: string, slug: string) {
  const cat = getCategory(category);
  return { cat, service: cat?.children.find((s) => s.slug === slug) };
}

// (Opcional) Úteis para generateStaticParams
export const ALL_CATEGORY_SLUGS = SERVICE_CATEGORIES.map((c) => c.category);
export const ALL_SERVICE_PATHS = SERVICE_CATEGORIES.flatMap((c) =>
  c.children.map((s) => ({ category: c.category, slug: s.slug }))
);
