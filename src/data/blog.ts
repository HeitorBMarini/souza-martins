import type { StaticImageData } from "next/image";

// ✅ imagens dos primeiros artigos
import heroEsquadrias  from "@/components/imgs/blog/esquadria-serralheria.png";
import heroEstruturas  from "@/components/imgs/blog/estrutura-metalica.png";
import heroPintura     from "@/components/imgs/blog/pintura-industrial.png";
import heroReforma     from "@/components/imgs/blog/serralheria-reforma.png";

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  cover?: StaticImageData | string;
  content: string;
  date: string;
};

export const POSTS: Post[] = [
  {
    slug: "estruturas-metalicas-melhor-opcao",
    title: "Estruturas Metálicas: Por que são a Melhor Opção para Construções?",
    excerpt:
      "Rapidez de obra, alta resistência, versatilidade, sustentabilidade e excelente custo-benefício: entenda por que o aço domina projetos modernos.",
    cover: heroEstruturas,
    date: "2025-01-15",
    content: `...`,
  },
  {
    slug: "serralheria-e-reforma-estrutural",
    title: "Serralheria e Reforma Estrutural: segurança e valorização",
    excerpt:
      "Quando intervir na estrutura? Como a serralheria reforça vigas, escadas, mezaninos e telhados com soluções sob medida.",
    cover: heroReforma,
    date: "2025-01-10",
    content: `...`,
  },
  {
    slug: "pintura-industrial-protecao-durabilidade",
    title: "Pintura Industrial: proteção, durabilidade e valorização",
    excerpt:
      "Epóxi, PU, anticorrosiva e eletrostática a pó: onde aplicar e por que contratar um serviço profissional.",
    cover: heroPintura,
    date: "2025-01-07",
    content: `...`,
  },
  {
    slug: "esquadrias-e-serralheria",
    title: "Esquadrias e Serralheria: beleza, funcionalidade e segurança",
    excerpt:
      "Portas, janelas e fachadas com durabilidade, conforto e estética — e como a serralheria personalizada eleva o projeto.",
    cover: heroEsquadrias,
    date: "2025-01-05",
    content: `...`,
  },

  // 🚀 novos artigos SEM imagem
  {
    slug: "fabricacao-estruturas-metalicas-sob-medida",
    title: "Fabricação de Estruturas Metálicas Sob Medida: Vantagens e Aplicações",
    excerpt:
      "Descubra como estruturas metálicas sob medida tornam projetos mais seguros, rápidos e econômicos.",
    date: "2025-01-20",
    content: `
<p>A <strong>fabricação de estruturas metálicas sob medida</strong> vem ganhando destaque no setor da construção civil e industrial por oferecer soluções personalizadas, resistentes e de alto desempenho.</p>

<h3>Onde utilizar?</h3>
<ul>
<li>Galpões industriais e comerciais</li>
<li>Mezaninos metálicos</li>
<li>Coberturas e telhados</li>
<li>Passarelas e plataformas</li>
<li>Silos e armazéns no agronegócio</li>
</ul>

<h3>Principais vantagens</h3>
<ul>
<li>Rapidez na execução</li>
<li>Durabilidade com epóxi ou galvanização</li>
<li>Flexibilidade total de projeto</li>
<li>Melhor custo-benefício</li>
<li>Possibilidade de expansão futura</li>
</ul>

<h3>Etapas do processo</h3>
<ol>
<li>Projeto e cálculo estrutural</li>
<li>Corte e conformação do metal</li>
<li>Soldagem e montagem</li>
<li>Acabamento e proteção</li>
</ol>

<p><em>Investir em estruturas metálicas sob medida é garantir qualidade, eficiência e segurança. Solicite um orçamento personalizado.</em></p>
`,
  },
  {
    slug: "grades-protecao-guarda-corpos",
    title: "Grades de Proteção e Guarda-Corpos: Segurança e Funcionalidade",
    excerpt:
      "Grades e guarda-corpos metálicos reforçam a segurança em obras, empresas e residências com resistência e design sob medida.",
    date: "2025-01-18",
    content: `
<p>As <strong>grades de proteção</strong> e <strong>guarda-corpos</strong> são estruturas metálicas essenciais para a segurança de pessoas e equipamentos em diversos ambientes.</p>

<h3>Aplicações principais</h3>
<ul>
<li>Escadas e mezaninos</li>
<li>Varandas e sacadas</li>
<li>Plataformas industriais</li>
<li>Proteção de máquinas</li>
<li>Áreas externas e jardins</li>
</ul>

<h3>Vantagens</h3>
<ul>
<li>Segurança reforçada</li>
<li>Durabilidade</li>
<li>Personalização sob medida</li>
<li>Versatilidade (interno e externo)</li>
<li>Design moderno</li>
</ul>

<p><em>Precisa de grades ou guarda-corpos metálicos? Fale com nossa equipe e solicite um orçamento personalizado.</em></p>
`,
  },
  {
    slug: "corrimaos-escadas-metalicas",
    title: "Corrimãos e Escadas Metálicas: Segurança, Resistência e Design Sob Medida",
    excerpt:
      "Escadas e corrimãos metálicos unem resistência, estética e segurança em projetos residenciais, comerciais e industriais.",
    date: "2025-01-16",
    content: `
<p>Os <strong>corrimãos</strong> e <strong>escadas metálicas</strong> são soluções que garantem segurança, durabilidade e estética, valorizando qualquer tipo de projeto.</p>

<h3>Onde utilizar?</h3>
<ul>
<li>Residências</li>
<li>Escritórios e empresas</li>
<li>Indústrias</li>
<li>Comércios e shoppings</li>
<li>Áreas externas</li>
</ul>

<h3>Benefícios</h3>
<ul>
<li>Alta resistência</li>
<li>Segurança contra quedas</li>
<li>Durabilidade com epóxi ou galvanização</li>
<li>Design adaptado ao ambiente</li>
<li>Instalação prática</li>
</ul>

<p><em>Invista em escadas e corrimãos metálicos sob medida e garanta modernidade, praticidade e valorização do espaço.</em></p>
`,
  },

];

export function getPost(slug: string) {
  return POSTS.find((p) => p.slug === slug);
}
