import type { StaticImageData } from "next/image";

// ✅ novas imagens (ajuste a extensão se alguma for .png)
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
    content: `
<p>Quando falamos em modernização da construção civil, as <strong>estruturas metálicas</strong> vêm ganhando destaque...</p>
<h3>1. Rapidez na Execução da Obra</h3>
<p>Peças pré-fabricadas reduzem prazo e custo de mão de obra.</p>
<h3>2. Alta Resistência e Durabilidade</h3>
<p>O aço suporta grandes cargas e, com proteção anticorrosiva, dura décadas.</p>
<h3>3. Versatilidade no Design</h3>
<p>Permite vãos maiores, projetos arrojados e espaços amplos.</p>
<h3>4. Sustentabilidade</h3>
<p>100% reciclável e com baixo resíduo de obra.</p>
<h3>5. Excelente Custo-Benefício</h3>
<p>Economia em prazo, manutenção e desperdício ao longo do ciclo de vida.</p>
<p><em>A SM Serralheria fabrica e instala estruturas sob medida. Fale com a gente!</em></p>
`,
  },
  {
    slug: "serralheria-e-reforma-estrutural",
    title: "Serralheria e Reforma Estrutural: segurança e valorização",
    excerpt:
      "Quando intervir na estrutura? Como a serralheria reforça vigas, escadas, mezaninos e telhados com soluções sob medida.",
    cover: heroReforma,
    date: "2025-01-10",
    content: `
<p>A serralheria é essencial em <strong>reformas estruturais</strong>, garantindo segurança, durabilidade e modernização.</p>
<h3>O que é reforma estrutural?</h3>
<ul>
<li>Reforço de vigas/pilares;</li>
<li>Troca de coberturas por telhados metálicos;</li>
<li>Recuperação de escadas, mezaninos e grades;</li>
<li>Adequação para novas cargas e normas.</li>
</ul>
<h3>Quando fazer?</h3>
<ul>
<li>Trincas/fissuras, ferrugem avançada;</li>
<li>Ampliação de carga;</li>
<li>Infiltração que compromete estrutura.</li>
</ul>
<p><em>Na Zona Sul de SP, a SM Sousa Martins atende do reforço ao acabamento.</em></p>
`,
  },
  {
    slug: "pintura-industrial-protecao-durabilidade",
    title: "Pintura Industrial: proteção, durabilidade e valorização",
    excerpt:
      "Epóxi, PU, anticorrosiva e eletrostática a pó: onde aplicar e por que contratar um serviço profissional.",
    cover: heroPintura,
    date: "2025-01-07",
    content: `
<p>A <strong>pintura industrial</strong> protege contra corrosão, aumenta a durabilidade e valoriza o imóvel.</p>
<h3>Aplicações</h3>
<p>Condomínios industriais, construtoras e público final (portões, estruturas, corrimãos e fachadas).</p>
<h3>Tipos</h3>
<ul>
<li>Epóxi (pisos);</li>
<li>PU (alto brilho e resistência);</li>
<li>Anticorrosiva (proteção de metais);</li>
<li>Eletrostática a pó (acabamento uniforme e durável).</li>
</ul>
`,
  },
  {
    slug: "esquadrias-e-serralheria",
    title: "Esquadrias e Serralheria: beleza, funcionalidade e segurança",
    excerpt:
      "Portas, janelas e fachadas com durabilidade, conforto e estética — e como a serralheria personalizada eleva o projeto.",
    cover: heroEsquadrias,
    date: "2025-01-05",
    content: `
<p><strong>Esquadrias</strong> (portas, janelas, venezianas, fachadas) aliadas à serralheria sob medida trazem estética, segurança e eficiência.</p>
<h3>Materiais</h3>
<ul>
<li>Alumínio (leve e resistente à corrosão);</li>
<li>Aço (robusto e seguro);</li>
<li>Ferro (tradicional e econômico).</li>
</ul>
<p>Melhoram vedação, conforto térmico/acústico e valorizam o imóvel.</p>
`,
  },
];

export function getPost(slug: string) {
  return POSTS.find((p) => p.slug === slug);
}
