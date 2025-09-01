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
  desc: string; // usado em /servicos
    img?: StaticImageData | string;   // 👈 nova propriedade

  children: ServiceItem[];
};

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    category: "serralheria",
    label: "Serralheria",
    desc:
      "Fabricação sob medida, instalação e manutenção de estruturas e peças metálicas para residências e comércios.",
       img: imgPlaceholder,
    children: [
      {
        slug: "estruturas-sob-medida",
        label: "Fabricação de Estruturas Metálicas Sob Medida",
        desc:
          "Desenvolvimento de estruturas conforme a necessidade do cliente, como suportes, reforços, armações e soluções personalizadas em metal.",
        img: imgPlaceholder,
      },
      {
        slug: "portoes-basculantes-deslizantes-automaticos",
        label: "Portões Basculantes, Deslizantes e Automáticos",
        desc:
          "Criação e instalação de portões metálicos com diferentes mecanismos de abertura, com foco em praticidade, segurança e automação.",
        img: imgPlaceholder,
      },
      {
        slug: "grades-e-guarda-corpos",
        label: "Grades de Proteção e Guarda-Corpos",
        desc:
          "Instalação de grades metálicas para janelas, varandas e escadas, promovendo segurança sem abrir mão do design.",
        img: imgPlaceholder,
      },
      {
        slug: "mezaninos-e-coberturas",
        label: "Estruturas para Mezaninos e Coberturas",
        desc:
          "Construção de mezaninos metálicos e coberturas resistentes para áreas internas ou externas.",
        img: imgPlaceholder,
      },
      {
        slug: "corrimaos-e-escadas",
        label: "Corrimãos e Escadas Metálicas",
        desc:
          "Produção e instalação de corrimãos e escadas com design funcional e resistente, ideais para residências ou comércios.",
        img: imgPlaceholder,
      },
      {
        slug: "manutencao-e-reparos",
        label: "Manutenção e Reparos em Peças Metálicas",
        desc:
          "Conserto e reforço de estruturas metálicas danificadas ou desgastadas pelo tempo.",
        img: imgPlaceholder,
      },
    ],
  },
  {
    category: "pintura-metalica",
    label: "Pintura Metálica",
    desc:
      "Pintura eletrostática, proteção anticorrosiva, restauração e acabamentos personalizados para valorizar e proteger metais.",
       img: imgPlaceholder,
    children: [
      {
        slug: "pintura-eletrostatica-po",
        label: "Pintura Eletrostática a Pó",
        desc:
          "Aplicação de tinta em pó com cura térmica, oferecendo alta durabilidade e acabamento uniforme.",
        img: imgPlaceholder,
      },
      {
        slug: "pintura-anticorrosiva",
        label: "Pintura Anticorrosiva para Portões e Estruturas",
        desc:
          "Proteção de superfícies metálicas contra ferrugem e desgaste com tintas específicas.",
        img: imgPlaceholder,
      },
      {
        slug: "restauracao-e-repintura",
        label: "Restauração e Repintura de Metais",
        desc:
          "Renovação de peças antigas ou danificadas, recuperando o brilho e a resistência.",
        img: imgPlaceholder,
      },
      {
        slug: "acabamentos-cores-texturas",
        label: "Acabamentos em Diversas Cores e Texturas",
        desc:
          "Aplicação de acabamentos personalizados, variando entre fosco, brilhante, texturizado, entre outros.",
        img: imgPlaceholder,
      },
    ],
  },
  {
    category: "portoes",
    label: "Portões",
    desc:
      "Fabricação sob medida, automação, reformas e pintura de portões residenciais e comerciais.",
       img: imgPlaceholder,
    children: [
      {
        slug: "fabricacao-instalacao",
        label: "Fabricação e Instalação de Portões Metálicos",
        desc:
          "Criação de portões sob medida com foco em durabilidade e estética.",
        img: imgPlaceholder,
      },
      {
        slug: "portoes-automaticos",
        label: "Portões Automáticos (Controle Remoto e Sistemas Modernos)",
        desc:
          "Automatização de portões com tecnologia de abertura por controle remoto, sensores ou aplicativos.",
        img: imgPlaceholder,
      },
      {
        slug: "reforma-e-manutencao",
        label: "Reforma e Manutenção de Portões Existentes",
        desc:
          "Ajustes, trocas de peças e melhorias em portões antigos para prolongar sua vida útil.",
        img: imgPlaceholder,
      },
      {
        slug: "pintura-personalizacao",
        label: "Pintura e Personalização de Portões Metálicos",
        desc:
          "Aplicação de pintura decorativa e funcional para renovar a aparência dos portões.",
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
