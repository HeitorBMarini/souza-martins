// src/app/api/contact/route.ts
import { NextRequest } from "next/server";
import { Resend } from "resend";
import { EmailTemplate } from "@/components/email-template";
import { render } from "@react-email/components";

export const runtime = "nodejs";

type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  source: string;
  message: string;
};

export async function GET() {
  return Response.json({ ping: "pong" });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(async () => {
      const form = await req.formData();
      return {
        name: (form.get("name") || "").toString(),
        email: (form.get("email") || "").toString(),
        phone: (form.get("phone") || "").toString(),
        source: (form.get("source") || "").toString(),
        message: (form.get("message") || "").toString(),
      } as Partial<ContactPayload>;
    });

    const name = (body.name || "").trim();
    const email = (body.email || "").trim();
    const phone = (body.phone || "").trim();
    const source = (body.source || "").trim();
    const message = (body.message || "").trim();

    if (!name || !email || !phone || !source) {
      return Response.json({ error: "Campos obrigatórios ausentes." }, { status: 400 });
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO;
    const from = process.env.CONTACT_FROM;

    // Fallback: responde sucesso simulado em dev se faltar ENV
    if (!RESEND_API_KEY || !to || !from) {
      console.warn("[/api/contact] ENV ausente. Simulando envio.", {
        hasKey: !!RESEND_API_KEY, to, from,
      });
      return Response.json({ ok: true, simulated: true });
    }

    const resend = new Resend(RESEND_API_KEY);

    // 👇 Renderiza o HTML manualmente (evita o erro this.renderAsync)
    const html = await render(
      EmailTemplate({ name, email, phone, source, message }),
      { pretty: true }
    );

    const { data, error } = await resend.emails.send({
      from,                // "onboarding@resend.dev" (teste) OU domínio verificado
      to: [to],
      replyTo: email,
      subject: `Novo contato do site: ${name}`,
      html,                // 👈 usa html no lugar de "react"
      // opcionalmente, um texto simples também:
      // text: `Nome: ${name}\nE-mail: ${email}\nTelefone: ${phone}\nFonte: ${source}\n\n${message}`
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json({ error: error.message || "Erro Resend" }, { status: 502 });
    }

    return Response.json({ ok: true, id: data?.id });
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Erro inesperado.";
    console.error("API /contact error:", msg);
    return Response.json({ error: msg }, { status: 500 });
  }
}
