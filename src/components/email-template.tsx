// src/components/email-template.tsx
import * as React from "react";

export function EmailTemplate({
  name, email, phone, source, message,
}: { name: string; email: string; phone: string; source: string; message?: string }) {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <h2>Novo contato do site</h2>
      <p><b>Nome:</b> {name}</p>
      <p><b>E-mail:</b> {email}</p>
      <p><b>Telefone:</b> {phone}</p>
      <p><b>Como nos conheceu:</b> {source}</p>
      {message && (
        <>
          <hr />
          <p><b>Mensagem:</b></p>
          <p style={{ whiteSpace: "pre-wrap" }}>{message}</p>
        </>
      )}
    </div>
  );
}
