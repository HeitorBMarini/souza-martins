import Image from "next/image";
import Link from "next/link";
import soldaImg from "@/components/imgs/servicos/solda.png"; 

export default function SoldaSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Imagem */}
        <div className="overflow-hidden rounded-lg shadow-md">
          <Image
            src={soldaImg}
            alt="Serviço de solda"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Texto */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--dark-text)] mb-4">
            Serviço de Solda
          </h2>

          <p className="text-sm text-zinc-600 mb-3">
            Executamos solda <strong>MIG/MAG, TIG e eletrodo revestido</strong>{" "}
            com máxima precisão e segurança, atendendo às mais diversas
            necessidades industriais e estruturais.
          </p>

          <p className="text-sm text-zinc-600 mb-3">
            Nossa equipe é especializada em projetos sob medida, garantindo alta
            qualidade nos acabamentos e durabilidade em todas as aplicações.
          </p>

          <p className="text-sm text-zinc-600 mb-6">
            Trabalhamos com prazos ágeis e materiais de primeira linha para
            oferecer soluções confiáveis e personalizadas para cada cliente.
          </p>

          {/* Botão */}
          <Link
            href="/contato"
            className="inline-block rounded-md bg-[var(--secondary)] px-5 py-2 text-xs font-semibold uppercase tracking-widest text-white shadow hover:bg-[color:var(--primary)] transition"
          >
            Solicitar Orçamento
          </Link>
        </div>
      </div>
    </section>
  );
}
