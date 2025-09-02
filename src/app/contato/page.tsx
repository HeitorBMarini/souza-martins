"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  MessageCircle,
  Home as HomeIcon,
  ChevronRight,
} from "lucide-react";

import HeaderSecondary from "@/components/HeaderSecondary";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { FaWhatsapp } from "react-icons/fa";

export default function ContatoPage() {
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState<null | boolean>(null);
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setOk(null);
    setErrorMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      source: String(formData.get("source") || ""),
      message: String(formData.get("message") || ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const json = await res.json().catch(() => ({}));

      if (!res.ok) {
        setOk(false);
        setErrorMsg(json?.error || res.statusText || "Falha ao enviar.");
        return;
      }

      setOk(true);
      form.reset();
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Erro inesperado.";
      setOk(false);
      setErrorMsg(message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <HeaderSecondary />

      {/* Breadcrumb */}
      <div className="w-full bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-40">
          <div className="pt-10 md:pt-0">
            <Breadcrumb>
              <BreadcrumbList className="flex items-center gap-2 text-sm text-black">
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href="/" className="flex items-center gap-1">
                      <HomeIcon size={16} />
                      Home
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbSeparator>
                  <ChevronRight size={14} className="text-black" />
                </BreadcrumbSeparator>

                <BreadcrumbItem>
                  <BreadcrumbPage className="font-bold">Contato</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>


          {/* Título da página com underline */}
          <h2 className="relative mt-6 text-3xl font-bold text-[var(--dark-text)] pb-1
             after:content-[''] after:block after:h-[3px] after:w-16 
             after:bg-[var(--primary)] after:mt-2">
            Contato
          </h2>
        </div>
      </div>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Header da página */}
        <div className="text-center mb-10">
          <span className="inline-block rounded-full bg-zinc-200 px-3 py-1 text-[11px] font-medium uppercase tracking-widest text-zinc-700">
            Fale Conosco
          </span>
          <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-[var(--dark-text)]">
            Solicite seu
          </h1>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--secondary)] -mt-1">
            Orçamento Gratuito
          </h2>
          <p className="mt-3 text-sm text-zinc-600 max-w-2xl mx-auto">
            Preencha o formulário abaixo ou entre em contato direto pelos nossos
            canais. Responderemos em até 2 horas com uma proposta personalizada.
          </p>
        </div>

        {/* Grid principal */}
        <div className="grid gap-6 md:grid-cols-[1fr_380px]">
          {/* Formulário */}
          <div className="rounded-xl bg-[#fafafa] p-6 shadow-sm ring-1 ring-zinc-100">
            {/* feedback */}
            <div aria-live="polite" className="mb-3">
              {ok === true && (
                <div className="rounded-md bg-emerald-50 text-emerald-700 text-sm px-3 py-2">
                  Mensagem enviada com sucesso! Em breve entraremos em contato.
                </div>
              )}
              {ok === false && (
                <div className="rounded-md bg-rose-50 text-rose-700 text-sm px-3 py-2">
                  {errorMsg || "Não foi possível enviar. Tente novamente mais tarde."}
                </div>
              )}
            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                {/* Nome */}
                <label className="space-y-1">
                  <span className="block text-sm font-medium text-[#888]">Nome*</span>
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="Seu nome"
                    className="w-full rounded-md border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm outline-none focus:border-zinc-300"
                  />
                </label>

                {/* Email */}
                <label className="space-y-1">
                  <span className="block text-sm font-medium text-[#888]">E-mail*</span>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="exemplo@exemplo.com.br"
                    className="w-full rounded-md border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm outline-none focus:border-zinc-300"
                  />
                </label>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {/* Telefone */}
                <label className="space-y-1">
                  <span className="block text-sm font-medium text-[#888]">Telefone*</span>
                  <input
                    name="phone"
                    type="tel"
                    required
                    placeholder="Telefone"
                    className="w-full rounded-md border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm outline-none focus:border-zinc-300"
                  />
                </label>

                {/* Como nos conheceu */}
                <label className="space-y-1">
                  <span className="block text-sm font-medium text-[#888]">Como Nos Conheceu*</span>
                  <select
                    name="source"
                    required
                    className="w-full rounded-md border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm outline-none focus:border-zinc-300"
                    defaultValue=""
                  >
                    <option value="" disabled>Selecione</option>
                    <option>Google</option>
                    <option>Instagram</option>
                    <option>Facebook</option>
                    <option>Indicação</option>
                    <option>Outros</option>
                  </select>
                </label>
              </div>

              {/* Mensagem */}
              <label className="space-y-1 block">
                <span className="block text-sm font-medium text-[#888]">Mensagem</span>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Escreva Aqui..."
                  className="w-full resize-none rounded-md border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm outline-none focus:border-zinc-300"
                />
              </label>

              <p className="text-[12px] text-zinc-500">Os campos com * são obrigatórios</p>

              <Button
                type="submit"
                disabled={loading}
                className="mt-2 cursor-pointer w-full sm:w-full rounded-full bg-[var(--secondary)] px-6 py-5 text-xs uppercase tracking-widest hover:bg-[color:var(--primary)] disabled:opacity-70"
              >
                {loading ? "Enviando..." : "Enviar mensagem"}
              </Button>
            </form>
          </div>

          {/* Card lateral de contato */}
          <aside className="rounded-xl bg-primary text-white p-6 h-fit">
            <h3 className="text-xl font-semibold">Informações de Contato</h3>

            <ul className="mt-6 space-y-5">
              <li className="flex items-start gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-[var(--secondary)]">
                  <Phone size={18} />
                </span>
                <div>
                  <p className="text-sm font-semibold">Telefone</p>
                  <Link href="tel:+5511976159174" className="text-sm text-zinc-200 hover:underline">
                    (11) 97598-1616
                  </Link>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-[var(--secondary)]">
                  <FaWhatsapp className="size-4" />
                </span>
                <div>
                  <p className="text-sm font-semibold">WhatsApp</p>
                  <Link href="https://wa.me/5511976159174" target="_blank" className="text-sm text-zinc-200 hover:underline">
                    (11) 97598-1616
                  </Link>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-[var(--secondary)]">
                  <Mail size={18} />
                </span>
                <div>
                  <p className="text-sm font-semibold">Email</p>
                  <Link
                    href="mailto:rafaelsousaesilva03@gmail.com"
                    className="text-sm text-zinc-200 hover:underline break-all"
                    target="_blank"
                  >
                    rafaelsousaesilva03@gmail.com
                  </Link>
                </div>
              </li>
            </ul>
          </aside>
        </div>
      </main>
    </>
  );
}
