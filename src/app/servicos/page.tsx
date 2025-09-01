import Image from "next/image";
import Link from "next/link";
import HeaderSecondary from "@/components/HeaderSecondary";
import { SERVICE_CATEGORIES } from "@/data/services";

export const metadata = { title: "Serviços | Souza Martins" };

export default function ServicosPage() {
  return (
    <>
      <HeaderSecondary />

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICE_CATEGORIES.map((cat) => (
            <Link
              key={cat.category}
              href={`/servicos/${cat.category}`}
              className="group block overflow-hidden rounded-xl bg-white ring-1 ring-zinc-200 border border-secondary shadow-sm transition hover:shadow-md"
            >
              <article>
                {/* Imagem da categoria */}
                {cat.img && (
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={cat.img}
                      alt={cat.label}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                )}

                <div className="p-4">
                  <h3 className="text-lg font-semibold text-[var(--dark-text)]">{cat.label}</h3>
                  <p className="mt-2 text-sm text-zinc-600">
                    {cat.children.slice(0, 2).map((s) => s.label).join(" • ")}
                    {cat.children.length > 2 ? " • ..." : ""}
                  </p>
                  <span className="mt-4 inline-block rounded-2xl bg-[var(--primary)] px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white">
                    Ver serviços
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
