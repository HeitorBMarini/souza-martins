// src/components/email-template.tsx
import * as React from "react";

type EmailTemplateProps = {
  name: string;
  email: string;
  phone: string;
  source: string;
  message: string;
};

export function EmailTemplate({
  name,
  email,
  phone,
  source,
  message,
}: EmailTemplateProps) {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", lineHeight: 1.5 }}>
      <h2>Nova mensagem do site</h2>
      <p><strong>Nome:</strong> {name}</p>
      <p><strong>E-mail:</strong> {email}</p>
      <p><strong>Telefone:</strong> {phone}</p>
      <p><strong>Como nos conheceu:</strong> {source}</p>
      <p><strong>Mensagem:</strong></p>
      <div>
        {message?.split("\n").map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>
    </div>
  );
}
