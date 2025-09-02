import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SERVICE_CATEGORIES, getService } from "@/data/services";

type Params = { categoria: string; slug: string };

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { categoria, slug } = await params; 
  const { service } = getService(categoria, slug);
  if (!service) return null;

  return (
    <div className="grid gap-8 md:grid-cols-2 md:pt-10">
      <div>
        {service.img ? (
          <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden ring-1 ring-zinc-100">
            <Image
              src={service.img}
              alt={service.label}
              fill
              className="object-cover"
            />
          </div>
        ) : null}
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-[var(--dark-text)]">
          Como funciona
        </h2>
        {/* 👉 Aqui chamamos a descrição do serviço */}
        <p className="text-zinc-700">{service.desc}</p>

        <div className="pt-2">
          <Button
            asChild
            className="rounded-full bg-[var(--secondary)] hover:bg-[color:var(--primary)]"
          >
            <Link href="/contato">Solicitar orçamento</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

// SSG
export function generateStaticParams() {
  const params: { categoria: string; slug: string }[] = [];
  for (const c of SERVICE_CATEGORIES)
    for (const s of c.children)
      params.push({ categoria: c.category, slug: s.slug });
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}) {
  const { categoria, slug } = await params; // 👈 obrigatório
  const { cat, service } = getService(categoria, slug);
  return { title: service ? `${service.label} | ${cat?.label}` : "Serviços" };
}
