import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Araça Cloro | Soluções e Serviços",
  description: "Soluções químicas industriais, tratamento de águas, equipamentos e suporte técnico para múltiplos segmentos.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Araça Cloro | Soluções e Serviços",
    description: "Soluções químicas industriais, tratamento de águas, equipamentos e suporte técnico.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
