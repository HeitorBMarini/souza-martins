// src/data/services.ts
import type { StaticImageData } from "next/image";

// Imports das imagens reais
import imgAcabamentos from "@/components/imgs/servicos/acabamento-cores-texturas.png";
import imgCorrimaoEscada from "@/components/imgs/servicos/corrimao-escada.jpg";
import imgMezaninos from "@/components/imgs/servicos/estruturas-mezaninos-coberturas.jpg";
import imgEstruturasSobMedida from "@/components/imgs/servicos/fabricacao-estruturas-metalicas-sob-medida.jpg";
import imgPortaoMetalico from "@/components/imgs/servicos/fabricacao-instalacao-portao-metalico.png";
import imgGrades from "@/components/imgs/servicos/grades-protecao-guarda-copo.jpg";
import imgManutencaoMetalicos from "@/components/imgs/servicos/manutencao-reparos-metalicos.png";
import imgPinturaAnticorrosiva from "@/components/imgs/servicos/pintura-anticorrosiva.png";
import imgPinturaEletrostatica from "@/components/imgs/servicos/pintura-eletrostatica-a-po.png";
import imgPinturaPersonalizacao from "@/components/imgs/servicos/pintura-personalizacao-portoes-metalicos.png";
import imgPortaoBasculante from "@/components/imgs/servicos/portao-basculante-deslizante-automaticos.jpg";
import imgPortoesAutomaticos from "@/components/imgs/servicos/portoes-automaticos.png";
import imgReformaPortoes from "@/components/imgs/servicos/reforma-manutencao-portoes-existentes.png";
import imgRestauracaoMetais from "@/components/imgs/servicos/restauracao-repintura-metais.png";
import imgServico from "@/components/imgs/servicos/servico.png";
import imgSerralheria from "@/components/imgs/servicos/serralheria.png";
import imgPinturaMetalica from "@/components/imgs/servicos/pintura-metalica.png";
import imgPortoes from "@/components/imgs/servicos/portoes.png";

export type ServiceItem = {
  slug: string;
  label: string;
  desc: string;
  img?: StaticImageData | string;
};

export type ServiceCategory = {
  category: "serralheria" | "pintura-metalica" | "portoes";
  label: string;
  desc: string;
  img?: StaticImageData | string;
  children: ServiceItem[];
};

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    category: "serralheria",
    label: "Serralheria",
    desc: "Fabricação sob medida, instalação e manutenção de estruturas e peças metálicas para residências e comércios.",
    img: imgSerralheria,
    children: [
      {
        slug: "estruturas-sob-medida",
        label: "Fabricação de Estruturas Metálicas Sob Medida",
        desc: `Desenvolvimento de estruturas conforme a necessidade do cliente, como suportes, reforços, armações e soluções personalizadas em metal.<br /><br />
Na SM Souza Martins, produzimos estruturas metálicas totalmente personalizadas para atender às necessidades específicas de cada cliente. Seja para suportes, armações, reforços ou soluções especiais em metal, desenvolvemos cada peça com atenção aos detalhes, precisão e qualidade.<br /><br />
<strong>Como funciona:</strong><br />
- Você nos passa o projeto ou a ideia do que precisa: formato, dimensões, função e estilo.<br />
- Avaliamos o tipo de material metálico ideal para o uso (resistência, acabamento, durabilidade).<br />
- Produzimos em nossa oficina com técnicas de solda, corte e montagem de alta qualidade.<br />
- Finalizamos com acabamento apropriado (pintura, proteção contra corrosão, etc.), garantindo também estética e durabilidade.<br /><br />
Com nossa tradição e experiência no ramo de serralheria, unimos habilidade técnica e compromisso com o resultado para entregar estruturas seguras, duráveis e visualmente alinhadas ao seu projeto.`,
        img: imgEstruturasSobMedida,
      },
      {
        slug: "portoes-basculantes-deslizantes-automaticos",
        label: "Portões Basculantes, Deslizantes e Automáticos",
        desc: `Na SM Souza Martins, desenvolvemos portões sob medida que unem segurança, praticidade e durabilidade.<br />
  Trabalhamos com modelos <strong>basculantes</strong>, <strong>deslizantes</strong> e <strong>automáticos</strong>, oferecendo soluções ideais para residências, comércios e indústrias.<br /><br />
  Cada portão é projetado de acordo com a necessidade do cliente, garantindo robustez na estrutura metálica, acabamento de qualidade e sistemas de automação confiáveis que facilitam o dia a dia.<br /><br />
  Além de funcionais, nossos portões podem ser personalizados no design, valorizando a estética do imóvel sem abrir mão da segurança.`,
        img: imgPortaoBasculante,
      },
      {
        slug: "grades-e-guarda-corpos",
        label: "Grades de Proteção e Guarda-Corpos",
        desc: `A SM Souza Martins é especialista na fabricação de grades de proteção e guarda-corpos metálicos sob medida, desenvolvidos para garantir segurança, resistência e durabilidade em diferentes ambientes.<br /><br />
  Nossas soluções são ideais para residências, empresas, indústrias, condomínios e áreas externas, sempre com acabamento de alta qualidade e adaptação às normas de segurança.<br /><br />
  <strong>Grades de proteção metálicas:</strong> modelos resistentes para janelas, portas e áreas externas, oferecendo maior proteção contra invasões e acidentes.<br />
  <strong>Guarda-corpos metálicos sob medida:</strong> indicados para varandas, sacadas, escadas e mezaninos, unindo segurança e design moderno.<br />
  <strong>Personalização completa:</strong> escolha do modelo, estilo e acabamento para valorizar a estética do imóvel sem abrir mão da proteção.<br /><br />
  Combinamos materiais de alta qualidade, soldagem precisa e pintura protetiva que aumentam a vida útil das estruturas e garantem excelente custo-benefício.<br /><br />
  Se você busca grades e guarda-corpos metálicos duráveis, modernos e seguros, fale com a SM Souza Martins e solicite seu orçamento personalizado.`,
        img: imgGrades,
      },

      {
        slug: "mezaninos-e-coberturas",
        label: "Estruturas para Mezaninos e Coberturas",
        desc: `A SM Souza Martins é especialista na fabricação e instalação de estruturas metálicas para mezaninos e coberturas sob medida, desenvolvidas para oferecer resistência, funcionalidade e aproveitamento inteligente de espaços.<br /><br />
  Nossas soluções atendem tanto projetos residenciais quanto comerciais e industriais, sempre com foco em segurança, durabilidade e acabamento de qualidade.<br /><br />
  <strong>Mezaninos metálicos sob medida:</strong> ideais para ampliar áreas internas, criando novos ambientes sem necessidade de grandes reformas.<br />
  <strong>Coberturas metálicas:</strong> resistentes às intempéries, perfeitas para garagens, áreas externas, depósitos e espaços industriais.<br />
  <strong>Projetos personalizados:</strong> cada estrutura é dimensionada de acordo com a necessidade do cliente, garantindo estética e desempenho.<br /><br />
  Utilizamos aços de alta resistência, soldagem precisa e pintura protetiva, que asseguram longa vida útil e baixo custo de manutenção.<br /><br />
  Se você procura estruturas para mezaninos e coberturas metálicas de qualidade, a SM Souza Martins entrega soluções robustas e personalizadas para valorizar e proteger seu imóvel.`,
        img: imgMezaninos,
      },

      {
        slug: "corrimaos-e-escadas",
        label: "Corrimãos e Escadas Metálicas",
        desc: `A SM Souza Martins fabrica corrimãos e escadas metálicas sob medida, unindo segurança, praticidade e design moderno. Nossas soluções atendem projetos residenciais, comerciais e industriais, sempre com foco em durabilidade e acabamento de alta qualidade.<br /><br />
  <strong>Escadas metálicas sob medida:</strong> ideais para ambientes internos e externos, podem ser projetadas em diferentes formatos (reta, caracol, em “L” ou “U”), garantindo resistência e aproveitamento de espaço.<br />
  <strong>Corrimãos metálicos:</strong> fabricados em aço de alta resistência, oferecem maior segurança em escadas, rampas e varandas, além de um visual sofisticado.<br />
  <strong>Personalização completa:</strong> cada projeto é desenvolvido conforme a necessidade do cliente, com opções de pintura, acabamento e estilo.<br /><br />
  Utilizamos materiais de alta qualidade, soldagem de precisão e pintura protetiva, que aumentam a vida útil das estruturas e asseguram excelente custo-benefício.<br /><br />
  Se você busca corrimão ou escada metálica sob medida, a SM Souza Martins entrega soluções robustas, seguras e elegantes para valorizar seu espaço.`,
        img: imgCorrimaoEscada,
      },

      {
        slug: "manutencao-e-reparos",
        label: "Manutenção e Reparos em Peças Metálicas",
        desc: `A SM Souza Martins oferece serviços especializados de manutenção e reparos em peças metálicas, garantindo maior durabilidade, segurança e desempenho para estruturas já instaladas.<br /><br />
  Com equipe técnica experiente e equipamentos adequados, realizamos:<br />
  <strong>• Soldas e reforços estruturais:</strong> recuperação de peças metálicas danificadas, aumentando sua vida útil.<br />
  <strong>• Ajustes e alinhamentos:</strong> correções em portões, grades, corrimãos e outras estruturas metálicas.<br />
  <strong>• Substituição de componentes:</strong> troca de partes comprometidas sem necessidade de refazer toda a estrutura.<br />
  <strong>• Acabamentos e proteção anticorrosiva:</strong> pintura e tratamento contra ferrugem e oxidação.<br /><br />
  Atendemos residências, comércios, indústrias e condomínios, oferecendo soluções rápidas, seguras e econômicas.<br /><br />
  Se você procura manutenção e reparo de peças metálicas sob medida, conte com a SM Souza Martins para recuperar suas estruturas com qualidade e eficiência.`,
        img: imgManutencaoMetalicos,
      },
    ],
  },
  {
    category: "pintura-metalica",
    label: "Pintura Metálica",
    desc: "Pintura eletrostática, proteção anticorrosiva, restauração e acabamentos personalizados para valorizar e proteger metais.",
    img: imgPinturaMetalica,
    children: [
      {
        slug: "pintura-eletrostatica-po",
        label: "Pintura Eletrostática a Pó",
        desc: "Aplicação de tinta em pó com cura térmica, oferecendo alta durabilidade e acabamento uniforme.",
        img: imgPinturaEletrostatica,
      },
      {
        slug: "pintura-anticorrosiva",
        label: "Pintura Anticorrosiva para Portões e Estruturas",
        desc: "Proteção de superfícies metálicas contra ferrugem e desgaste com tintas específicas.",
        img: imgPinturaAnticorrosiva,
      },
      {
        slug: "restauracao-e-repintura",
        label: "Restauração e Repintura de Metais",
        desc: "Renovação de peças antigas ou danificadas, recuperando o brilho e a resistência.",
        img: imgRestauracaoMetais,
      },
      {
        slug: "acabamentos-cores-texturas",
        label: "Acabamentos em Diversas Cores e Texturas",
        desc: "Aplicação de acabamentos personalizados, variando entre fosco, brilhante, texturizado, entre outros.",
        img: imgAcabamentos,
      },
    ],
  },
  {
    category: "portoes",
    label: "Portões",
    desc: "Fabricação sob medida, automação, reformas e pintura de portões residenciais e comerciais.",
    img: imgPortoes,
    children: [
      {
        slug: "fabricacao-instalacao",
        label: "Fabricação e Instalação de Portões Metálicos",
        desc: "Criação de portões sob medida com foco em durabilidade e estética.",
        img: imgPortaoMetalico,
      },
      {
        slug: "portoes-automaticos",
        label: "Portões Automáticos (Controle Remoto e Sistemas Modernos)",
        desc: "Automatização de portões com tecnologia de abertura por controle remoto, sensores ou aplicativos.",
        img: imgPortoesAutomaticos,
      },
      {
        slug: "reforma-e-manutencao",
        label: "Reforma e Manutenção de Portões Existentes",
        desc: "Ajustes, trocas de peças e melhorias em portões antigos para prolongar sua vida útil.",
        img: imgReformaPortoes,
      },
      {
        slug: "pintura-personalizacao",
        label: "Pintura e Personalização de Portões Metálicos",
        desc: "Aplicação de pintura decorativa e funcional para renovar a aparência dos portões.",
        img: imgPinturaPersonalizacao,
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
