import Image from "next/image";
import Link from "next/link";
import HeaderSecondary from "@/components/HeaderSecondary";
import { POSTS } from "@/data/blog";

export const metadata = { title: "Blog | Souza Martins" };

export default function BlogPage() {
  const list = [...POSTS].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <>
      <HeaderSecondary />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-[var(--dark-text)] mb-6">Blog</h1>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="group block overflow-hidden rounded-xl bg-white ring-1 ring-zinc-200 shadow-sm hover:shadow-md transition"
            >
              {p.cover && (
                <div className="relative h-80 w-full">
                  <Image src={p.cover} alt={p.title} fill className="object-cover" />
                </div>
              )}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-[var(--dark-text)]">{p.title}</h3>
                <p className="mt-2 text-sm text-zinc-600 line-clamp-3">{p.excerpt}</p>
                <span className="mt-4 inline-block rounded-2xl bg-[var(--primary)] px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white">
                  Ler artigo
                </span>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
