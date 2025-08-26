"use client";

import { ChevronUp } from "lucide-react";

export default function ButtonFixed() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Voltar ao topo"
      className="
        fixed bottom-6 right-6 
        z-50
        inline-flex items-center justify-center
        size-12
        rounded-full
        bg-primary text-white
        shadow-lg
        hover:bg-zinc-300 transition
      "
    >
      <ChevronUp className="size-7" />
    </button>
  );
}
