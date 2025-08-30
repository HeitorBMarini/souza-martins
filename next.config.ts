import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // ⚠️ Ignora erros do ESLint no build (não recomendado para sempre)
    ignoreDuringBuilds: true,
  },
  // outras configs podem entrar aqui
};

export default nextConfig;
