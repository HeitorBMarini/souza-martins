import type { StaticImageData } from "next/image";

// ✅ imagens dos primeiros artigos
import heroEsquadrias  from "@/components/imgs/blog/esquadria-serralheria.png";
import heroEstruturas  from "@/components/imgs/blog/estrutura-metalica.png";
import heroPintura     from "@/components/imgs/blog/pintura-industrial.png";
import heroReforma     from "@/components/imgs/blog/serralheria-reforma.png";
import heroGrade     from "@/components/imgs/blog/grade-guarda-copo.jpg";
import heroReformaProtoes     from "@/components/imgs/blog/reforma-portoes.jpg";



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
  slug: "corrimaos-escadas-metalicas",
  title: "Corrimãos e Escadas Metálicas: Segurança, Resistência e Design Sob Medida",
  excerpt:
    "Escadas e corrimãos metálicos unem resistência, estética e segurança em projetos residenciais, comerciais e industriais.",
  date: "2025-01-16",
  content: `
  <p><strong>Corrimãos e Escadas Metálicas: Segurança, Resistência e Design Sob Medida</strong></p>

  <p>Descubra as vantagens dos corrimãos e escadas metálicas sob medida. Soluções seguras, resistentes e personalizadas para obras industriais e residenciais.</p>
<br>
  <h2>A Importância dos Corrimãos e Escadas Metálicas</h2>
  <p>Os corrimãos e escadas metálicas são soluções que unem segurança, durabilidade e estética em um único projeto. Com fabricação sob medida, atendem desde residências até grandes empreendimentos comerciais e industriais, garantindo resistência estrutural e acabamento de qualidade.</p>
  <p>Além da função prática, essas estruturas agregam valor estético, permitindo projetos modernos, funcionais e adaptados ao espaço disponível.</p>
<br>
  <h3>Onde Utilizar Escadas e Corrimãos Metálicos?</h3>
  <ul>
    <li>Residências – escadas internas e externas com design moderno</li>
    <li>Empresas e escritórios – estruturas seguras e sofisticadas para circulação</li>
    <li>Indústrias – escadas metálicas robustas para áreas técnicas e operacionais</li>
    <li>Comércios e shoppings – soluções duráveis que suportam grande fluxo de pessoas</li>
    <li>Áreas externas – resistentes às intempéries, ideais para jardins, varandas e acessos</li>
  </ul>
  <br>

  <h3>Vantagens das Escadas e Corrimãos Metálicos Sob Medida</h3>
  <ul>
    <li><strong>Alta resistência:</strong> suportam grande peso e uso contínuo.</li>
    <li><strong>Segurança garantida:</strong> corrimãos oferecem apoio e prevenção contra quedas.</li>
    <li><strong>Durabilidade:</strong> aço de qualidade, com pintura epóxi ou galvanização contra corrosão.</li>
    <li><strong>Design personalizado:</strong> adapta-se ao estilo do ambiente, moderno ou clássico.</li>
    <li><strong>Instalação prática:</strong> montagem rápida e eficiente.</li>
  </ul>
<br>
  <h3>Processo de Fabricação</h3>
  <ul>
    <li><strong>Projeto e dimensionamento:</strong> definição das medidas e cálculos estruturais.</li>
    <li><strong>Corte e modelagem do aço:</strong> adaptação ao design definido.</li>
    <li><strong>Soldagem e montagem:</strong> estrutura robusta e estável.</li>
    <li><strong>Acabamento final:</strong> pintura ou galvanização para proteção e estética.</li>
  </ul>
<br>
  <h3>Conclusão</h3>
  <p>Investir em corrimãos e escadas metálicas sob medida é optar por uma solução segura, moderna e durável, que se adapta a qualquer tipo de projeto. Seja em residências, indústrias ou comércios, essas estruturas oferecem praticidade e valorizam o espaço.</p>

  <p><em>Precisa de corrimãos ou escadas metálicas para sua obra? Entre em contato com nossa equipe e solicite um orçamento personalizado.</em></p>
  `,
},

{
  slug: "fabricacao-estruturas-metalicas-sp",
  title: "Fabricação de Estruturas Metálicas em SP — Qualidade e Precisão para Sua Obra",
  excerpt:
    "Estruturas metálicas sob medida em São Paulo: resistência, rapidez e custo-benefício para obras residenciais, comerciais e industriais.",
  date: "2025-01-25",
  content: `
<p>A <strong>fabricação de estruturas metálicas em SP</strong> é uma solução cada vez mais procurada por empresas da construção civil, indústrias e clientes que buscam <strong>resistência, rapidez e custo-benefício</strong> em seus projetos.</p>
<br>
<p>Na <strong>Serralheria SM</strong>, oferecemos serviços especializados em estruturas metálicas sob medida, garantindo <strong>segurança, durabilidade e acabamento impecável</strong>.</p>
<br>

<h3>Por que escolher estruturas metálicas em São Paulo?</h3>
<ul>
  <li><strong>Versatilidade:</strong> aplicáveis em galpões, mezaninos, coberturas, passarelas e diversas construções;</li>
  <li><strong>Rapidez na execução:</strong> montagem muito mais ágil que métodos convencionais;</li>
  <li><strong>Durabilidade:</strong> resistentes a intempéries, quando bem projetadas e tratadas;</li>
  <li><strong>Custo-benefício:</strong> reduz gastos com mão de obra e manutenção ao longo prazo.</li>
</ul>
<br>

<h3>Fabricação sob medida</h3>
<p>Trabalhamos com <strong>projetos personalizados</strong>, desenvolvidos conforme a necessidade de cada cliente. Utilizamos matérias-primas de alta qualidade e técnicas modernas de soldagem e montagem, entregando soluções completas para obras de pequeno, médio e grande porte.</p>
<br>

<h3>Principais serviços</h3>
<ul>
  <li>Estruturas metálicas para galpões e indústrias;</li>
  <li>Mezaninos metálicos;</li>
  <li>Escadas e passarelas metálicas;</li>
  <li>Coberturas metálicas;</li>
  <li>Projetos sob medida para empresas e residências.</li>
</ul>
<br>

<h3>Atendimento em toda a Grande São Paulo</h3>
<p>Estamos localizados na capital e atendemos toda a região metropolitana, incluindo <strong>Osasco, Guarulhos, Santo André, São Bernardo do Campo, Diadema, Barueri, Carapicuíba, Taboão da Serra</strong> e cidades próximas.</p>
<br>

<h3>Conclusão</h3>
<p>Se você procura <strong>fabricação de estruturas metálicas em SP</strong> com qualidade, confiança e entrega no prazo, a <strong>Serralheria SM</strong> é a parceira ideal para o seu projeto.</p>
<br>

<p><em>Entre em contato agora mesmo e solicite um orçamento sem compromisso para sua estrutura metálica sob medida.</em></p>
`,
},


    // 🚀 novos artigos SEM imagem
  {
  slug: "fabricacao-estruturas-metalicas-sob-medida",
  title: "Fabricação de Estruturas Metálicas Sob Medida: Vantagens e Aplicações",
  excerpt:
    "Descubra as vantagens da fabricação de estruturas metálicas sob medida e como essa solução pode tornar seu projeto mais seguro, rápido e econômico.",
  date: "2025-01-20",
  content: `
  <p><strong>Fabricação de Estruturas Metálicas Sob Medida: Vantagens e Aplicações</strong></p>

  <p>Descubra as vantagens da fabricação de estruturas metálicas sob medida e como essa solução pode tornar seu projeto mais seguro, rápido e econômico.</p>
<br>
  <h2>Por que investir em Estruturas Metálicas Sob Medida?</h2>
  <p>A fabricação de estruturas metálicas sob medida vem ganhando destaque no setor da construção civil e industrial por oferecer soluções personalizadas, resistentes e de alto desempenho. Diferente das opções padronizadas, o projeto sob encomenda garante que cada detalhe seja adaptado às necessidades específicas do cliente, aumentando a eficiência e reduzindo custos com desperdícios.</p>
<br>
  <h3>Onde utilizar Estruturas Metálicas Personalizadas?</h3>
  <ul>
    <li>Galpões industriais e comerciais</li>
    <li>Mezaninos metálicos para aproveitamento do espaço interno</li>
    <li>Coberturas e telhados resistentes e duradouros</li>
    <li>Passarelas e plataformas com alta segurança</li>
    <li>Projetos para o agronegócio, como silos e armazéns</li>
  </ul>
<br>
  <h3>Vantagens da Fabricação Sob Medida</h3>
  <ul>
    <li><strong>Rapidez na execução:</strong> montagem simplificada e menor tempo de obra.</li>
    <li><strong>Durabilidade:</strong> uso de aço de alta qualidade com pintura epóxi ou galvanização.</li>
    <li><strong>Flexibilidade:</strong> projetos totalmente adaptados ao espaço e à necessidade do cliente.</li>
    <li><strong>Custo-benefício:</strong> redução de retrabalhos e menor manutenção.</li>
    <li><strong>Expansão futura:</strong> possibilidade de ampliar a estrutura conforme o crescimento do negócio.</li>
  </ul>
<br>
  <h3>Etapas do Processo de Fabricação</h3>
  <ul>
    <li>Projeto e cálculo estrutural – análise técnica e definição do tipo de aço.</li>
    <li>Corte e conformação do metal – precisão garantida por máquinas especializadas.</li>
    <li>Soldagem e montagem – união de peças com máxima resistência.</li>
    <li>Acabamento e proteção – pintura ou galvanização para evitar corrosão.</li>
  </ul>
  <br>

  <h3>Conclusão</h3>
  <p>Investir em uma estrutura metálica sob medida é garantir qualidade, eficiência e segurança em qualquer projeto. Seja para galpões, indústrias, comércios ou agronegócio, essa solução oferece praticidade e excelente retorno sobre o investimento.</p>

  <p><em>Quer saber como a fabricação de estruturas metálicas pode transformar o seu projeto? Entre em contato com nossa equipe e solicite um orçamento personalizado.</em></p>
  `,

  },
  {
  slug: "grades-protecao-guarda-corpos",
  title: "Grades de Proteção e Guarda-Corpos: Segurança e Funcionalidade em Estruturas Metálicas",
  excerpt:
    "Saiba como grades de proteção e guarda-corpos metálicos aumentam a segurança em obras e indústrias, com resistência, durabilidade e design sob medida.",
  date: "2025-01-18",
  content: `
  <p><strong>Grades de Proteção e Guarda-Corpos: Segurança e Funcionalidade em Estruturas Metálicas</strong></p>

  <p>Saiba como grades de proteção e guarda-corpos metálicos aumentam a segurança em obras e indústrias, com resistência, durabilidade e design sob medida.</p>
<br>
  <h2>O que são Grades de Proteção e Guarda-Corpos?</h2>
  <p>As grades de proteção e guarda-corpos são estruturas metálicas desenvolvidas para garantir a segurança de pessoas e equipamentos em diferentes ambientes. Com fabricação sob medida, podem ser aplicadas em áreas industriais, comerciais e residenciais, oferecendo resistência, durabilidade e funcionalidade sem abrir mão do design.</p>
<br>
  <h3>Onde Utilizar Grades de Proteção e Guarda-Corpos?</h3>
  <ul>
    <li>Escadas e mezaninos metálicos</li>
    <li>Varandas e sacadas residenciais ou comerciais</li>
    <li>Plataformas industriais</li>
    <li>Máquinas e equipamentos (proteção perimetral)</li>
    <li>Áreas externas como jardins e espaços de lazer</li>
  </ul>
<br>
  <h3>Vantagens das Grades de Proteção e Guarda-Corpos Metálicos</h3>
  <ul>
    <li><strong>Segurança reforçada:</strong> proteção contra acidentes e quedas.</li>
    <li><strong>Durabilidade:</strong> resistência a impactos e ao desgaste do tempo.</li>
    <li><strong>Personalização:</strong> fabricação sob medida para atender cada projeto.</li>
    <li><strong>Versatilidade:</strong> aplicáveis em ambientes internos e externos.</li>
    <li><strong>Estética:</strong> possibilidade de acabamento moderno, com pintura epóxi ou galvanização.</li>
  </ul>
<br>
  <h3>Como é Feita a Fabricação?</h3>
  <ul>
    <li><strong>Levantamento do projeto:</strong> análise do local e definição das medidas exatas.</li>
    <li><strong>Corte e conformação do aço:</strong> precisão na fabricação das peças.</li>
    <li><strong>Soldagem e montagem:</strong> união de elementos com máxima resistência.</li>
    <li><strong>Acabamento final:</strong> pintura ou galvanização para maior durabilidade.</li>
  </ul>
<br>
  <h3>Conclusão</h3>
  <p>As grades de proteção e guarda-corpos metálicos são indispensáveis para aumentar a segurança em obras, empresas e residências. Com fabricação sob medida, oferecem soluções eficientes, duráveis e adaptadas às necessidades de cada cliente.</p>

  <p><em>Precisa de grades de proteção ou guarda-corpos para seu projeto? Fale com nossa equipe e solicite um orçamento personalizado agora mesmo.</em></p>
  `,
  },
{
  slug: "reforma-de-portoes-zona-sul-sp",
  title: "Reforma de Portões na Zona Sul de SP — Vale a pena recuperar em vez de trocar?",
  excerpt:
    "Quando compensa reformar: problemas comuns, vantagens (economia de 30%–60%), serviços mais pedidos e exemplos por bairro na Zona Sul de SP.",
  date: "2025-01-23",
      cover: heroReformaProtoes,
  content: `
<p>Os portões são essenciais para segurança, privacidade e valorização da fachada. Com o tempo, é natural surgirem desgastes como <strong>ferrugem</strong>, <strong>pintura descascada</strong>, <strong>motor com falhas</strong>, <strong>dobradiças empenadas</strong> e até <strong>trincas</strong>.</p>
<br>

<p>Em bairros da Zona Sul de São Paulo — <em>Santo Amaro, Moema, Campo Belo, Jabaquara, Saúde, Ipiranga, Morumbi, Panamby</em> — a demanda por <strong>reforma de portões</strong> tem crescido. Vale a pena recuperar em vez de trocar? Na maioria das vezes, <strong>sim</strong>.</p>
<br>

<h3>Problemas mais comuns</h3>
<ul>
  <li>Ferrugem (ferro/aço carbono) por falta de proteção;</li>
  <li>Pintura descascada (compromete estética e durabilidade);</li>
  <li>Dobradiças/roldanas gastas (travamentos, barulhos);</li>
  <li>Motores antigos ou sem manutenção (perda de potência/falhas);</li>
  <li>Soldas enfraquecidas e empeno/desalinhamento estrutural.</li>
</ul>
<br>

<p>Esses pontos raramente exigem troca total. Uma boa reforma devolve <strong>funcionalidade</strong> e <strong>aparência</strong> de “quase novo”.</p>

<h3>Por que reformar em vez de trocar?</h3>
<ul>
  <li><strong>Economia:</strong> geralmente custa <strong>30%–60%</strong> do valor de um portão novo;</li>
  <li><strong>Sustentabilidade:</strong> aproveita a estrutura existente, menos descarte;</li>
  <li><strong>Personalização:</strong> pintura automotiva/eletrostática, serralheria artística, nova automação;</li>
  <li><strong>Rapidez:</strong> obra limpa, sem quebra-quebra na alvenaria;</li>
  <li><strong>Valorização:</strong> acabamento premium eleva a fachada.</li>
</ul>
<br>

<h3>Serviços mais procurados na Zona Sul</h3>
<ol>
  <li><strong>Soldagem e reforço estrutural</strong> (trincas/pontos frágeis);</li>
  <li><strong>Troca de roldanas, trilhos e dobradiças</strong> (movimento suave e silencioso);</li>
  <li><strong>Automatização</strong> ou <strong>troca de motores</strong> (conforto e eficiência);</li>
  <li><strong>Pintura especial</strong> (automotiva/eletrostática) ou <strong>galvanização</strong> (barreira anticorrosiva);</li>
  <li><strong>Reforma estética completa</strong> (lixamento, pintura premium, acessórios).</li>
</ol>
<br>

<h3>Exemplos por bairro</h3>
<ul>
  <li><strong>Santo Amaro / Campo Belo:</strong> reformas rápidas em garagens automáticas;</li>
  <li><strong>Moema / Vila Mariana:</strong> acabamentos mais sofisticados e silenciosos;</li>
  <li><strong>Jabaquara / Saúde:</strong> manutenção corretiva em portões antigos;</li>
  <li><strong>Morumbi / Panamby / Vila Andrade:</strong> personalização com serralheria artística e pintura premium.</li>
</ul>
<br>

<h3>Conclusão</h3>
<p>Reformar costuma ser a opção mais inteligente: <strong>economiza</strong>, <strong>moderniza</strong> e <strong>prolonga</strong> a vida útil. Antes de comprar um portão novo, consulte especialistas — muitas vezes, reparos e um bom acabamento já resolvem.</p>
<br>

<p><em>Quer saber quanto custaria reformar seu portão na Zona Sul de SP? Solicite um orçamento personalizado agora mesmo.</em></p>
`,
},
{
  slug: "manutencao-preventiva-portoes-zona-sul-sp",
  title: "Manutenção Preventiva de Portões na Zona Sul de São Paulo — Evite gastos desnecessários",
  excerpt:
    "Descubra por que a manutenção preventiva de portões na Zona Sul de SP é essencial para segurança, economia e valorização do imóvel.",
  date: "2025-01-24",
  content: `
<p>Um portão é muito mais do que uma entrada: é a <strong>primeira barreira de segurança</strong>, protege veículos, garante privacidade e compõe a fachada. Na Zona Sul de São Paulo, onde condomínios, residências e empresas utilizam portões intensivamente, a <strong>manutenção preventiva</strong> se tornou fundamental.</p>
<br>

<h3>O que é manutenção preventiva?</h3>
<p>São ações periódicas para evitar falhas. Diferente da corretiva (quando o problema já aconteceu), a preventiva garante funcionamento contínuo e seguro — como uma revisão de carro antes da pane.</p>
<br>

<h3>Benefícios principais</h3>
<ul>
  <li><strong>Evita paradas inesperadas:</strong> reduz riscos de travamento;</li>
  <li><strong>Aumenta a vida útil:</strong> motores, trilhos e engrenagens duram mais;</li>
  <li><strong>Economia:</strong> pequenos ajustes custam menos do que trocas emergenciais;</li>
  <li><strong>Segurança:</strong> evita falhas que podem expor moradores e empresas;</li>
  <li><strong>Valorização:</strong> transmite cuidado e aumenta valor de revenda.</li>
</ul>
<br>

<h3>Itens que precisam de revisão</h3>
<ol>
  <li><strong>Motores e automatizadores:</strong> potência, lubrificação, engrenagens;</li>
  <li><strong>Trilhos e roldanas:</strong> alinhamento, substituição, limpeza;</li>
  <li><strong>Dobradiças:</strong> lubrificação e reaperto;</li>
  <li><strong>Estrutura metálica:</strong> inspeção de ferrugem, soldagem, pintura protetiva;</li>
  <li><strong>Sistema elétrico e controles:</strong> fiação, sensores e programação.</li>
</ol>
<br>

<h3>Preventiva x corretiva</h3>
<ul>
  <li><strong>Preventiva:</strong> programada a cada 6–12 meses, evita falhas;</li>
  <li><strong>Corretiva:</strong> ocorre após quebra — custa de 2 a 3 vezes mais.</li>
</ul>
<br>

<h3>Exemplos práticos</h3>
<ul>
  <li><strong>Vila Mariana:</strong> condomínio reduziu chamados emergenciais em 80% após manutenção trimestral;</li>
  <li><strong>Ipiranga:</strong> portão com rangidos resolvido em horas, sem troca;</li>
  <li><strong>Santo Amaro:</strong> empresa evitou prejuízo caro ao revisar engrenagens.</li>
</ul>
<br>

<h3>Periodicidade recomendada</h3>
<ul>
  <li>Residências: a cada 12 meses;</li>
  <li>Condomínios: a cada 6 meses;</li>
  <li>Empresas/galpões: a cada 3 meses;</li>
  <li>Áreas úmidas ou poluídas: intervalos mais curtos.</li>
</ul>
<br>

<h3>Perguntas frequentes</h3>
<ol>
  <li><strong>Posso lubrificar sozinho?</strong> Sim, mas apenas com produtos corretos.</li>
  <li><strong>Quais sinais de alerta?</strong> Barulhos, lentidão, falhas no motor, ferrugem.</li>
  <li><strong>Previne acidentes?</strong> Sim, aumenta a segurança geral.</li>
  <li><strong>Quando reformar?</strong> Apenas se a estrutura estiver comprometida.</li>
  <li><strong>Há contratos de manutenção?</strong> Sim, para residências, condomínios e empresas.</li>
</ol>
<br>

<h3>Conclusão</h3>
<p>A <strong>manutenção preventiva</strong> de portões na Zona Sul de SP é um investimento que se paga rapidamente. Evita dores de cabeça, garante segurança e prolonga a vida útil. Em vez de esperar quebrar, programe revisões periódicas com especialistas.</p>

<p><em>Agende agora sua manutenção preventiva na Zona Sul de São Paulo e evite gastos inesperados.</em></p>
`,
},

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
  {
  slug: "grades-protecao-guarda-corpos-zona-sul",
  title: "Grades de Proteção e Guarda-Corpos na Zona Sul de São Paulo",
  excerpt:
    "Grades e guarda-corpos metálicos oferecem segurança, durabilidade e design sofisticado em residências, condomínios e empresas da Zona Sul de SP.",
  date: "2025-01-28",
  cover: heroGrade, 
  content: `
<p>As <strong>grades de proteção</strong> e os <strong>guarda-corpos</strong> são fundamentais para garantir segurança em casas, apartamentos, condomínios e empresas. Além de prevenir quedas e acidentes, também agregam valor estético, trazendo sofisticação ao imóvel.</p>
<br>

<h3>Onde encontrar grades e guarda-corpos na Zona Sul de SP</h3>
<br>

<p>A região da Zona Sul de São Paulo concentra grande demanda por instalação de grades e guarda-corpos de alta qualidade. Alguns exemplos:</p>
<ul>
  <li><strong>Morumbi:</strong> guarda-corpos de vidro com inox para apartamentos de alto padrão;</li>
  <li><strong>Campo Belo e Moema:</strong> opções modernas que combinam com arquitetura contemporânea;</li>
  <li><strong>Vila Mariana e Chácara Santo Antônio:</strong> grades personalizadas em ferro galvanizado;</li>
  <li><strong>Santo Amaro, Saúde e Jabaquara:</strong> soluções práticas e econômicas;</li>
  <li><strong>Brooklin:</strong> guarda-corpos sofisticados para sacadas e varandas.</li>
</ul>
<br>

<h3>Tipos mais usados</h3>
<ul>
  <li><strong>Grades de ferro galvanizado:</strong> resistentes à oxidação, ideais para residências e comércios;</li>
  <li><strong>Guarda-corpos de vidro com inox:</strong> combinam segurança e elegância, muito usados em alto padrão;</li>
  <li><strong>Grades de alumínio:</strong> leves, modernas e de baixa manutenção, perfeitas para áreas externas.</li>
</ul>
<br>

<h3>Benefícios de instalar grades e guarda-corpos</h3>
<ul>
  <li><strong>Segurança:</strong> proteção contra quedas e invasões;</li>
  <li><strong>Durabilidade:</strong> materiais resistentes ao tempo e uso diário;</li>
  <li><strong>Estética:</strong> opções modernas que valorizam o imóvel;</li>
  <li><strong>Personalização:</strong> projetos sob medida para cada ambiente.</li>
</ul>
<br>

<h3>Dúvidas Frequentes (FAQ)</h3>
<ol>
  <li><strong>Qual o melhor material?</strong> — Vidro com inox para sofisticação, ferro galvanizado para resistência a menor custo.</li>
  <li><strong>Posso instalar em varandas e sacadas?</strong> — Sim, altamente recomendado, principalmente em apartamentos.</li>
  <li><strong>Atendem às normas de segurança?</strong> — Sim, todas as instalações seguem as normas da ABNT.</li>
  <li><strong>Onde encontro instalação na Zona Sul?</strong> — Nossa equipe atende <strong>Morumbi, Campo Belo, Moema, Vila Mariana, Santo Amaro, Jabaquara, Saúde, Chácara Santo Antônio e Brooklin</strong>, com orçamento sob medida.</li>
</ol>
<br>

<p><em>Entre em contato agora mesmo e solicite um orçamento sem compromisso para grades e guarda-corpos sob medida na Zona Sul de SP.</em></p>
`,
},



];

export function getPost(slug: string) {
  return POSTS.find((p) => p.slug === slug);
}
