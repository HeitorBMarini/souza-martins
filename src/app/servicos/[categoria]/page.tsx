import Link from "next/link";
import Image from "next/image";
import HeaderSecondary from "@/components/HeaderSecondary";

import { SERVICE_CATEGORIES, getCategory } from "@/data/services";

type Params = { categoria: string };

export default async function CategoriaPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { categoria } = await params;                  // 👈 OBRIGATÓRIO
  const cat = getCategory(categoria);
  if (!cat) return null;

  return (
    <>
      <HeaderSecondary />


      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cat.children.map((s) => (
            <Link
              key={s.slug}
              href={`/servicos/${categoria}/${s.slug}`}
              className="group block overflow-hidden rounded-xl bg-white ring-1 ring-zinc-200 border border-secondary shadow-sm transition hover:shadow-md"
            >
              <article>
                {s.img ? (
                  <div className="relative h-44 w-full">
                    <Image src={s.img} alt={s.label} fill className="object-cover" />
                  </div>
                ) : null}

                <div className="p-4">
                  <h3 className="text-lg font-semibold text-[var(--dark-text)]">{s.label}</h3>
                  <p className="mt-2 text-sm text-zinc-600 line-clamp-3">{s.desc}</p>
                  <div className="mt-4">
                    <span className="inline-block rounded-2xl bg-[var(--primary)] px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white group-hover:bg-[color:var(--secondary)]">
                      Ver detalhes
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}

export function generateStaticParams() {
  return SERVICE_CATEGORIES.map((c) => ({ categoria: c.category }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}) {
  const { categoria } = await params;                  // 👈 OBRIGATÓRIO
  const cat = getCategory(categoria);
  return { title: cat ? `${cat.label} | Serviços` : "Serviços" };
}
